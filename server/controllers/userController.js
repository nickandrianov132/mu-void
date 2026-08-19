const { poolPromise } = require('../db')
const sql = require('mssql')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const allowed380Items = require('../utiles/allowed380Items');
const itemsList = require('../utiles/item_list.json');
// const bcrypt = require('bcrypt')
// var md5 = require('md5');


const generateJwt = (login, password, email) => {
    return  jwt.sign(
              {login, password, email}, 
              process.env.SECRET_KEY,
              {expiresIn: '1h'}
            )
}
async function checkUserOnline(accId, next) {
    try{
        const pool = await poolPromise
        const request = pool.request()
        const accountStatus = await request
        .input('accountId', sql.VarChar(10), accId)
        .query('SELECT ConnectStat FROM dbo.MEMB_STAT ms WHERE ms.memb___id = @accountId')
        if (accountStatus.recordset.length === 0) {
            return next(ApiError.badRequest("User not found, please log-in the game at least once!"));
        }
        return accountStatus.recordset[0].ConnectStat
    } catch(err) {
        return next(ApiError.badRequest(err.message));
    }
}
// const md5Pass = (pass, login) => {
//     const passHash = md5(pass + login)
//     console.log(`passHash: ${passHash}`)
//     const shortPassHash = passHash.slice(0,20)
//     console.log(`shortPassHassh: ${shortPassHash}`)
//     return shortPassHash
// } 

// const passMD5Check = async (pass, login) => {
//     const hashPass = md5(pass + login)
//     const shortHash =  hashPass.slice(0,20)
//     const pool = await poolPromise
//     const request = pool.request()
//     const acc = await request
//     .input('memb___id', sql.VarChar(10), login)
//     .query('SELECT memb.memb__pwd AS userPass FROM dbo.MEMB_INFO memb WHERE memb.memb___id = @memb___id')
//     if(acc.recordset.length != 0) {
//             console.log(`shortHash from check: ${shortHash}`);
//             console.log(acc.recordset);
//             const checkPwd = shortHash === acc.recordset[0].userPass
//             console.log(`checkPwd:${checkPwd}`)
//             return checkPwd
//     }
// }
const ITEM_SIZE = 32;
const GRID_WIDTH = 8; // Сетка склада: 8 колонок
const GRID_HEIGHT = 15; // Сетка склада: 15 строк
const TOTAL_SLOTS = 120;
const MAX_SLOTS = 120; // Ограничение основного склада
function getExcOptions(excByte) {
    return {
        firstOpt: !!(excByte & 1),
        secondOpt: !!(excByte & 2),
        thirdOpt: !!(excByte & 4),
        fourthOpt: !!(excByte & 8),
        fifthOpt: !!(excByte & 16),
        sixthOpt: !!(excByte & 32),
    }
}
function getIsExc(excOptObj) {
    if ( excOptObj.firstOpt || excOptObj.secondOpt || excOptObj.thirdOpt || excOptObj.fourthOpt || excOptObj.fifthOpt || excOptObj.sixthOpt) {
        return true
    } else {
        return false
    }
}
function parseInventory(rawData) {
    if (!rawData) return [];
    const buffer = Buffer.isBuffer(rawData) ? rawData : Buffer.from(rawData.replace('0x', ''), 'hex');
    const inventory = [];
    const maxBytes = Math.min(buffer.length, 120 * ITEM_SIZE);

    for (let i = 0; i < maxBytes; i += ITEM_SIZE) {
        const item = buffer.subarray(i, i + ITEM_SIZE);
        const  slotIndex = i / ITEM_SIZE;
        // если первый байт 0xFF, значит слот пуст
        if (item.length < ITEM_SIZE) continue;
        if (item[0] === 0xFF) {
            inventory.push({
            slot: slotIndex,
            cat: null
        })
        }
        else {
            inventory.push({
                slot: slotIndex,
                ...decodeIGCNItem(item)
            })

        }
    }
    return inventory;
}
function decodeIGCNItem(buf) {
    // Базовый ID и Группа (Category)
    // console.log([...buf.subarray(0,16)]);
    const itemCategory = (buf[9] >> 4) & 0x0F;
    let itemIndex = buf[0];
    // let hotByte = buf;
    // console.log(hotByte);
    if ((buf[7] & 0x80) !== 0) {
        itemIndex += 256;
    }
    const fullId = (itemCategory * 512) + itemIndex;
    // Уровень предмета (Level)
    const levelByte = buf[1];
    const level = (levelByte >> 3) & 15; // Биты 3,4,5,6
    // Опции
    const hasSkill = !!(levelByte & 128);
    const hasLuck = !!(levelByte & 4);
    // Excellent опции (Байт 7)
    const excOption = buf[7];
    // Серийный номер (Serial) - для удаления/перемещения/проверки итема важно для аукциона!
    const serial = buf.readUInt32LE(16);
    // Socket / Elementsl статы (начинаются с 11 байта в S9)
    const sockets = [buf[11], buf[12], buf[13], buf[14], buf[15]];
    // Ancient 
    const categoryByte = buf[8];
    const ancientValue = categoryByte & 0x0F; // Маска для младших 4 бит
    const isAncient = ancientValue > 0;
    const byte1 = buf[1];
    const byte7 = buf[7];

    let is380pvpOpt = false;
    const canHave380 = allowed380Items.some(x => x.cat === itemCategory && x.index === itemIndex);
    if (canHave380) {
        const hasAnyPvpBit = (buf[8] > 0 && buf[8] !== 0xff) ||
                             (buf[9] > 0 && buf[9] !== 0xff) ||
                             (buf[10] > 0 && buf[10] !== 0xff);
        if (hasAnyPvpBit) {
            is380pvpOpt = true;
        }
    }
    // harmony options (старшие 4 бита - ID опции, младшие 4 бита - Level опции )
    const harmonyByte = buf[10]; // 11-й байт
    const hasHarmony =  harmonyByte !== 0 && harmonyByte !== 255;
    const harmonyType = hasHarmony ? (harmonyByte & 0xF0) >> 4 : 0;  // ID опции
    const harmonyLevel = hasHarmony ? (harmonyByte & 0x0F) : 0;     // уровень опции
    const harmonyTypeGroup = getHarmonyTypeGroup(itemCategory);
    // add Options
    let addOption = (byte1 & 3); 
    if (byte7 & 64) {
        addOption += 4;
    }
    const addValue = addOption * 4;
    let addName = "";
    if (addValue > 0) {
        if (itemCategory >= 0 && itemCategory <= 5) addName = `Additional Damage +${addValue}`;
        else if (itemCategory === 6) addName = `Additional Defense Rate +${addValue}`;
        else if (itemCategory > 6 && itemCategory <= 12) addName = `Additional Defense +${addValue}`;
        else if (itemCategory === 13) addName = `Automatic Hp recovery +${addValue / 4}%`;
        else addName = `Additional +${addValue}`;
    }
    function getHarmonyTypeGroup(category) {
        if (category >= 0 && category <= 4) return 1;    // Physical
        if (category === 5) return 2;                   // Magical
        if (category >=6 && category <= 12) return 3;   // Defensive
        else return null
    }
    const width = getItemSizes(itemCategory, itemIndex).width
    const height = getItemSizes(itemCategory, itemIndex).height

    return {
        cat: itemCategory,
        id: itemIndex,
        is380Opt: is380pvpOpt,
        fullId: fullId,
        level: level,
        addOpt: addName,
        hasHarmony: hasHarmony,
        harmonyTypeGroup: harmonyTypeGroup,
        harmonyType: harmonyType,
        harmonyLevel: harmonyLevel,
        skill: hasSkill,
        luck: hasLuck,
        isExc: getIsExc(getExcOptions(excOption)),
        exc: getExcOptions(excOption),
        serial: serial.toString(16).toUpperCase(),
        sockets: sockets,
        isAncient: isAncient, 
        ancGroup: isAncient ? ancientValue : null,
        isPentagram: itemCategory === 12 && itemIndex >= 200, // Пример логики
        hex: buf.toString('hex'),
        width: width,
        height: height,
        itemCategory: getCategoryId(itemCategory, itemIndex)
    }
}

function moveItemToMarket(originalBuffer, slotId, expectedSerial) {
    // 1. Проверяем, что запрашиваемый слот входит в разрешенные первые 120 слотов
    console.log(`expectedSerial: ${expectedSerial}`);
    if (slotId < 0 || slotId >= MAX_SLOTS) {
        return { success: false, error: 'Доступны для продажи только предметы из основного склада(слоты 0-119)'};
    } 
    const offset = slotId * ITEM_SIZE;
    // 2. Вырезаем 32 байта конкретного предмета
    const itemBuffer = originalBuffer.subarray(offset, offset + ITEM_SIZE);
    // Надежная проверка, слот пуст только если все 32 байта пустые (0xFF)
    if (itemBuffer.every(byte => byte === 0xFF)) {
        return { success: false, error:'Выбранный слот на складе пуст'}; 
    }
    // Проверяем на пустоту: если первый байт 0xFF, или весь буфер в 0xFF
    // if (itemBuffer[0] === 0xFF) {
    // throw new Error('Выбранный слот на складе пуст'); 
    // }
    //3. Декодируем предмет  функцией (создаем чистую копию буфера)
    const decodedItem = decodeIGCNItem(Buffer.from(itemBuffer));
    // 4. Проверка безопасности по серийному номеру
    // Приводим обе строки к верхнему регистру, чтобы избежать ошибок регистра ('e71c1600' vs 'E71C1600')
    if (!decodedItem.serial || decodedItem.serial.toUpperCase() !== expectedSerial.toUpperCase()) {
        return { success: false, error: 'Анти-чит: Серийный номер предмета в базе данных не совпадает с запросом фронтенда'};
    } 
    //5. Генерируем HEX-строку предмета для записи в таблицу dbo.market
    const itemHex = itemBuffer.toString('hex').toUpperCase();
    // 6. Вырезаем предмет: создаем копию всего буфера склада (все 7680 байт)
    const newWarehouseBuffer = Buffer.from(originalBuffer);
    // Забиваем 32 байта этого слота значениями 0xFF (удаляем вещь со склада)
    newWarehouseBuffer.fill(0xFF, offset, offset + ITEM_SIZE);
    return {
    success: true,
    itemHex,
    expectedSerial: decodedItem.serial,
    newWarehouseBuffer
    };
}

function getItemSizes(cat, id) {
    let item = `${cat}_${id}`
    console.log(item);
    return { width: itemsList[item].Width, height: itemsList[item].Height}
}
function getCategoryId(cat, id) {
    if (cat === 0 ) return 18
    if (cat === 1) return 1
    if (cat === 2) {
        if (id <=6) {
            return 1
        } 
        else if (id > 6) {
            return 2
        } else {
            return 17
        }   
    }
    if (cat === 3) return 3
    if (cat === 4) return 4
    if (cat === 5) return 5
    if (cat === 6) return 6
    if (cat === 7) return 7
    if (cat === 8) return 8
    if (cat === 9) return 9
    if (cat === 10) return 10
    if (cat === 11) return 11
    if (cat === 12) {
        if (id === 0 || id === 1 || id === 2 || id === 3 || id === 4 || id === 5 || id === 6 || id === 36 || id === 37 || id === 38 || id === 39 || id === 40 || id === 41 || id === 42 || id === 43 || id === 49 || id === 130 || id === 131 || id === 132 || id === 133 || id === 134 || id === 135 || id === 262 || id === 263 || id === 264 || id === 265 || id === 266 || id === 267 || id === 268) {
            return 12
        } else if (id === 7 || id === 8 || id === 9 || id === 10 || id === 11 || id === 12 || id === 13 || id === 14 || id === 16 || id === 17 || id === 18 || id === 19 || id === 21 || id === 22 || id === 23 || id === 24 || id === 35 || id === 44 || id === 45 || id === 46 || id === 47 || id === 48) {
            return 15
        } else if (id === 15 || id === 30 || id === 31 || id === 136 || id === 137 || id === 138 || id === 139 || id === 140 || id === 141 || id === 142 || id === 143) {
            return 16
        } else {
            return 17
        }
    }
    if (cat === 13 ) {
        if (id === 30) {
            return 12
        }
        else if (id === 8 || id === 9 || id === 20 || id === 21 || id === 22 || id === 23 || id === 24 || id === 38) {
            return 13
        }
        else if (id === 12 || id === 13 || id === 25 || id === 26 || id === 27 || id === 28) {
            return 14
        }
        else {
            return 17
        }
    }
    if (cat === 14) {
        if (id === 13 || id === 14 || id === 16 || id === 22 || id === 31 || id === 41 || id === 42 || id === 43 || id === 44) {
            return 16
        }
    }
    if (cat === 15) return 15
    return 17
}

function findFreeSlotForItem(parsedInventory, newItemWidth, newItemHeight) {
    // 1. Создаем пустую виртуальную матрицу 8x15, заполненную нулями (0 - свободно)
    const grid = Array(GRID_HEIGHT).fill(null).map(() => Array(GRID_WIDTH).fill(0));
    // 2. Размечаем (закрашиваем) матрицу предметами, которые УЖЕ лежат на складе
    for (const item of parsedInventory) {
        if (item.cat === null || item.cat === undefined) continue; // Пропускаем пустыеслоты
        // Вычисляем координаты верхнего левого угла предмета в сетке
        const itemX = item.slot % GRID_WIDTH;
        const itemY = Math.floor(item.slot / GRID_WIDTH);
        // Получаем реальные размеры этого предмета из справочника
        const { width, height } = getItemSizes(item.cat, item.id);
        // Помечаем все клетки, которые занимает этот предмет, единицей (1 - занято)
        for (let y = itemY; y < itemY + height; y++) {
            for (let x = itemX; x < itemX + width; x++) {
            // Защита от выхода за границы (на случай багнутых предметов в БД)
                if (y < GRID_HEIGHT && x < GRID_WIDTH) {
                    grid[y][x] = 1;
                }
            }
        }
    }
    // 3. Ищем место для НОВОГО предмета (сканируем сетку сверху вниз, слева направо)
    for (let y = 0; y <= GRID_HEIGHT - newItemHeight; y++) {
        for (let x = 0; x <= GRID_WIDTH - newItemWidth; x++) {
            let canFit = true;
            // Проверяем, свободен ли прямоугольник размером (newItemWidth x newItemHeight)
            for (let checkY = y; checkY < y + newItemHeight; checkY++) {
                for (let checkX = x; checkX < x + newItemWidth; checkX++) {
                    if (grid[checkY][checkX] === 1) {
                        canFit = false; // Наткнулись на занятую клетку
                        break;
                    }
                }
                if(!canFit) break;
            }
            // Если весь прямоугольник оказался свободным — мы нашли идеальныйслот!
            if (canFit) {
                // Переводим координаты (X, Y) обратно в плоский ID слота (0-119)
                const targetSlotId = (y * GRID_WIDTH) + x;
                return targetSlotId;
            }
        }
    } // Если прошли всю сетку и никуда не влезло
    return null;
}


async function findOneUserEmail(email) {
    const pool = await poolPromise
    const request = pool.request()
    const acc = await request
    .input('mail_addr', sql.VarChar(50), email)
    .query('SELECT memb.mail_addr AS user_email FROM dbo.MEMB_INFO memb WHERE memb.mail_addr = @mail_addr')
    return acc
}
async function findOneUserLogin(login) {
    const pool = await poolPromise
    const request = pool.request()
    const acc = await request
    .input('memb___id', sql.VarChar(10), login)
    .query('SELECT memb.memb___id AS user_login FROM dbo.MEMB_INFO memb WHERE memb.memb___id = @memb___id')
    return acc
}
async function findUserInvoice(uuid) {
    const pool = await poolPromise
    const request = pool.request()
    const invoice = await request
    .input('uuid', sql.VarChar(50), uuid)
    .query('SELECT cp.accLogin FROM dbo.cryptocloud_payment cp  WHERE cp.uuid = @uuid')
    return invoice
}
async function findUserAnswer(answer) {
    const pool = await poolPromise
    const request = pool.request()
    const acc = await request
    .input('fpas_answ', sql.VarChar(10), answer)
    .query('SELECT memb.memb___id AS user_login FROM dbo.MEMB_INFO memb WHERE memb.fpas_answ = @fpas_answ')
    return acc
}

async function findVoteUserMUOGG(login, site) {
    const pool = await poolPromise
    const request = pool.request()
    const voteUserDate = await request
    .input('accName', sql.VarChar(10), login)
    .input('voteSite', sql.VarChar(20), site)
    .query('SELECT v.voteDate FROM dbo.Vote_Acc_Info_muogg v WHERE v.accName = @accName AND v.voteSite = @voteSite')
    console.log(voteUserDate.recordset)
    return voteUserDate 
}
async function addVoteUserMUOGG(login, site, date, ip) {
        const pool = await poolPromise
        const request = pool.request()
            const addVoteUser = await request
            .input('accName', sql.VarChar(10), login)
            .input('voteSite', sql.VarChar(20), site)
            .input('voteIp', sql.VarChar(15), ip)
            .input('voteDate', sql.SmallDateTime(), date)
            .query('INSERT INTO dbo.Vote_Acc_Info_muogg (accName, voteSite, voteDate, voteIp) VALUES (@accName, @voteSite, @voteDate, @voteIp)')
            console.log("Voted from addVoteUserMUOGG")
            return addVoteUser
}
async function updateVoteUserMUOGG(login, site, date, ip) {
            const pool = await poolPromise
            const request = pool.request()
                const updateVoteUser = await request
                .input('accName', sql.VarChar(10), login)
                .input('voteSite', sql.VarChar(20), site)
                .input('voteDate', sql.SmallDateTime(), date)
                .input('voteIp', sql.VarChar(15), ip)
                .query('UPDATE dbo.Vote_Acc_Info SET voteDate = @voteDate WHERE accName = @accName AND voteSite = @voteSite')
                console.log("Voted from updateVoteUser")
                return updateVoteUser
}
async function findVoteUser(login, site) {
    const pool = await poolPromise
    const request = pool.request()
    const voteUserDate = await request
    .input('accName', sql.VarChar(10), login)
    .input('voteSite', sql.VarChar(20), site)
    .query('SELECT v.voteDate FROM dbo.Vote_Acc_Info v WHERE v.accName = @accName AND v.voteSite = @voteSite')
    console.log(voteUserDate.recordset)
    return voteUserDate 
}
// async function findVoteUser(login, site) {
//     const pool = await poolPromise
//     const request = pool.request()
//     const voteUserDate = await request
//     .input('accName', sql.VarChar(10), login)
//     .input('voteSite', sql.VarChar(20), site)
//     .query('SELECT v.voteDate FROM dbo.Vote_Acc_Info v WHERE v.accName = @accName AND v.voteSite = @voteSite')
//     console.log(voteUserDate.recordset)
//     return voteUserDate 
// }

async function addVoteUser(login, site, date, ip) {
        const pool = await poolPromise
        const request = pool.request()
            const addVoteUser = await request
            .input('accName', sql.VarChar(10), login)
            .input('voteSite', sql.VarChar(20), site)
            .input('voteIp', sql.VarChar(15), ip)
            .input('voteDate', sql.SmallDateTime(), date)
            .query('INSERT INTO dbo.Vote_Acc_Info (accName, voteSite, voteDate, voteIp) VALUES (@accName, @voteSite, @voteDate, @voteIp)')
            console.log("Voted from addVoteUser")
            return addVoteUser
}

async function updateVoteUser(login, site, date, ip) {
            const pool = await poolPromise
            const request = pool.request()
                const updateVoteUser = await request
                .input('accName', sql.VarChar(10), login)
                .input('voteSite', sql.VarChar(20), site)
                .input('voteDate', sql.SmallDateTime(), date)
                .input('voteIp', sql.VarChar(15), ip)
                .query('UPDATE dbo.Vote_Acc_Info SET voteDate = @voteDate WHERE accName = @accName AND voteSite = @voteSite')
                console.log("Voted from updateVoteUser")
                return updateVoteUser
}

async function findVoteUserTop100Arena(login, site) {
    const pool = await poolPromise
    const request = pool.request()
    const voteUserDate = await request
    .input('accName', sql.VarChar(10), login)
    .input('voteSite', sql.VarChar(20), site)
    .query('SELECT v.voteDate FROM dbo.Vote_Acc_Info_Top100Arena v WHERE v.accName = @accName AND v.voteSite = @voteSite')
    console.log(voteUserDate.recordset)
    return voteUserDate 
}
async function addVoteUserTop100Arena(login, site, date, ip) {
        const pool = await poolPromise
        const request = pool.request()
            const addVoteUser = await request
            .input('accName', sql.VarChar(10), login)
            .input('voteSite', sql.VarChar(20), site)
            .input('voteDate', sql.SmallDateTime(), date)
            .query('INSERT INTO dbo.Vote_Acc_Info_Top100Arena (accName, voteSite, voteDate) VALUES (@accName, @voteSite, @voteDate)')
            console.log("Voted from addVoteUserTop100Arena")
            return addVoteUser
}

async function updateVoteUserTop100Arena(login, site, date) {
            const pool = await poolPromise
            const request = pool.request()
                const updateVoteUser = await request
                .input('accName', sql.VarChar(10), login)
                .input('voteSite', sql.VarChar(20), site)
                .input('voteDate', sql.SmallDateTime(), date)
                .query('UPDATE dbo.Vote_Acc_Info_Top100Arena SET voteDate = @voteDate WHERE accName = @accName AND voteSite = @voteSite')
                console.log("Voted from updateVoteUserTop100Arena")
                return updateVoteUser
}

class UserController {
async checkUserOnline(req, res, next) {
    try{
        const pool = await poolPromise
        const request = pool.request()
        const accountStatus = await request
        .input('accountId', sql.VarChar(10), req.body.login)
        .query('SELECT ConnectStat FROM dbo.MEMB_STAT ms WHERE ms.memb___id = @accountId')
        if (accountStatus.recordset.length === 0) {
            return next(ApiError.badRequest("User not found"));
        }
        return res.json(accountStatus.recordset[0].ConnectStat)
    } catch(err) {
        return next(ApiError.badRequest(err.message));
    }
}
    async insertCryptoInvoice(req, res, next) {
        const {accLogin, uuid, wcoins} = req.body
        const pool = await poolPromise
        const request = pool.request()
        const insertCyptoCloudPayment = await request
        .input('accLogin', sql.VarChar(10), accLogin)
        .input('uuid', sql.VarChar(50), uuid)
        .input('wcoins', sql.Int(), wcoins)
        .execute('dbo.add_cryptocloud_payment')
        return res.json(insertCyptoCloudPayment.recordset[0])
    }

    async cryptoCloudPayment(req, res, next) {
        const {status, amount_crypto, invoice_info} = req.body
        console.log(invoice_info.uuid);
        const pool = await poolPromise
        const request = pool.request()
        const isInvoiceExist = await findUserInvoice(invoice_info.uuid)
        let accName;
        if(isInvoiceExist.recordset.length == 0) {
            return next(ApiError.internal("Invoice not exist!"))
        } else {
            accName = isInvoiceExist.recordset[0].accLogin
            console.log(`Account: ${accName}`);
            console.log(accName);
        }
        console.log(isInvoiceExist.recordset[0].accLogin);
        if(status == "success") {
            console.log("success");
            console.log(invoice_info.amount_usd);
            if(amount_crypto == 10) {
                const buyWcoins = await request
                .input('AccountID', sql.VarChar(10), accName)
                .input('Type', sql.Int(), 0)
                .input('Coin', sql.Float(), amount_crypto * 20)
                .execute('dbo.WZ_IBS_AddCoin')
                return res.json(buyWcoins.recordset[0].RESULT)
            }
            return res.json(1)
        } else {
            // console.log(req.body);
            console.log("error");
            return res.json(0)
        }
    }
    //// Vote links Rewards Functions - set back reward wcoins (now is 0)
    async  userVoteTOPG(req, res, next) {
        const {p_resp, ip} = req.query
        const pool = await poolPromise
        const request = pool.request()
        const voteDate = await findVoteUser(p_resp, "TOPG")
        const d = new Date()
        if(voteDate.recordset.length == 0) {
            await addVoteUser(p_resp, "TOPG", d, ip)
            const vote = await request
            .input('AccountID', sql.VarChar(10), p_resp)
            .input('Type', sql.Int(), 0)
            .input('Coin', sql.Float(), 3)
            .execute('dbo.WZ_IBS_AddCoin')
            // console.log("vote 1st if");
            return res.json(vote.recordset[0].RESULT)
        }
        else if(voteDate.recordset.length != 0) {
            const dateNowInMS = Date.now()
            const voteDateInMS = Date.parse(voteDate.recordset[0].voteDate)
            const dateDifference = dateNowInMS - voteDateInMS
            if(dateDifference > 21600000) {
                await updateVoteUser(p_resp, "TOPG", d, ip)
                const vote = await request
                .input('AccountID', sql.VarChar(10), p_resp)
                .input('Type', sql.Int(), 0)
                .input('Coin', sql.Float(), 3)
                .execute('dbo.WZ_IBS_AddCoin')
                // console.log("vote 2nd if");
                return res.json(vote.recordset[0].RESULT)
            } else{
            return next(ApiError.internal("you have already voted!"))
        }
        }
        else{
            return next(ApiError.internal("ooops... something went wrong"))
        }
    }
    async  userVoteMUOGG(req, res, next) {
        const {userId, ip} = req.body
        const pool = await poolPromise
        const request = pool.request()
        const voteDate = await findVoteUserMUOGG(userId, "MUOGG")
        const d = new Date()
        if(voteDate.recordset.length == 0) {
            await addVoteUserMUOGG(userId, "MUOGG", d, ip)
            const vote = await request
            .input('AccountID', sql.VarChar(10), userId)
            .input('Type', sql.Int(), 0)
            .input('Coin', sql.Float(), 5)
            .execute('dbo.WZ_IBS_AddCoin')
            // console.log("vote 1st if");
            return res.json(vote.recordset[0].RESULT)
        }
        else if(voteDate.recordset.length != 0) {
            const dateNowInMS = Date.now()
            const voteDateInMS = Date.parse(voteDate.recordset[0].voteDate)
            const dateDifference = dateNowInMS - voteDateInMS
            if(dateDifference > 43200000) {
                await updateVoteUserMUOGG(userId, "MUOGG", d, ip)
                const vote = await request
                .input('AccountID', sql.VarChar(10), userId)
                .input('Type', sql.Int(), 0)
                .input('Coin', sql.Float(), 5)
                .execute('dbo.WZ_IBS_AddCoin')
                // console.log("vote 2nd if");
                return res.json(vote.recordset[0].RESULT)
            } else{
            return next(ApiError.internal("you have already voted!"))
        }
        }
        else{
            return next(ApiError.internal("ooops... something went wrong"))
        }
    }
    async  userVoteTop100arena(req, res, next) {
        const {postback} = req.query
        const pool = await poolPromise
        const request = pool.request()
        const voteDate = await findVoteUserTop100Arena(postback, "Top100Arena")
        const d = new Date()
        if(voteDate.recordset.length == 0) {
            await addVoteUserTop100Arena(postback, "Top100Arena", d)
            const vote = await request
            .input('AccountID', sql.VarChar(10), postback)
            .input('Type', sql.Int(), 0)
            .input('Coin', sql.Float(), 10)
            .execute('dbo.WZ_IBS_AddCoin')
            console.log("vote 1st if");
            return res.json(vote.recordset[0].RESULT)
        }
        else if(voteDate.recordset.length != 0) {
            const now = new Date();
            const lastVoteDate = new Date(voteDate.recordset[0].voteDate);
            const isSameDay = 
                lastVoteDate.getFullYear() === now.getFullYear() &&
                lastVoteDate.getMonth() === now.getMonth() &&
                lastVoteDate.getDate() === now.getDate();
            if(!isSameDay) {
                await updateVoteUserTop100Arena(postback, "Top100Arena", d)
                const vote = await request
                .input('AccountID', sql.VarChar(10), postback)
                .input('Type', sql.Int(), 0)
                .input('Coin', sql.Float(), 10)
                .execute('dbo.WZ_IBS_AddCoin')
                console.log("vote 2nd if");
                return res.json(vote.recordset[0].RESULT)
            } else{
            return next(ApiError.internal("you have already voted!"))
        }
        }
        else{
            return next(ApiError.internal("ooops... something went wrong"))
        }
    }
    async  userVoteExtremetop100(req, res) {
        const {custom} = req.query
        const pool = await poolPromise
        const request = pool.request()
        const vote = await request
        .input('AccountID', sql.VarChar(10), custom)
        .input('Type', sql.Int(), 0)
        .input('Coin', sql.Float(), 5)
        .execute('dbo.WZ_IBS_AddCoin')
        console.log(vote.recordset[0]);
        return res.json(vote.recordset[0].RESULT)
    }
    async  userVoteMMTOP200(req, res) {
        const {custom} = req.query
        const pool = await poolPromise
        const request = pool.request()
        const vote = await request
        .input('AccountID', sql.VarChar(10), custom)
        .input('Type', sql.Int(), 0)
        .input('Coin', sql.Float(), 5)
        .execute('dbo.WZ_IBS_AddCoin')
        console.log(vote.recordset[0]);
        return res.json(vote.recordset[0].RESULT)
    }
    // async  userVoteTop100arena(req, res) {
    //     const {postback} = req.query
    //     const pool = await poolPromise
    //     const request = pool.request()
    //     const vote = await request
    //     .input('AccountID', sql.VarChar(10), postback)
    //     .input('Type', sql.Int(), 0)
    //     .input('Coin', sql.Float(), 0)
    //     .execute('dbo.WZ_IBS_AddCoin')
    //     console.log(vote.recordset[0]);
    //     return res.json(vote.recordset[0].RESULT)
    // }
    async  userVoteArenaTop100(req, res, next) {
        const {voted, userid, userip} = req.query
        if(voted == 1) {
            const pool = await poolPromise
            const request = pool.request()
            const vote = await request
            .input('AccountID', sql.VarChar(10), userid)
            .input('Type', sql.Int(), 0)
            .input('Coin', sql.Float(), 5)
            .execute('dbo.WZ_IBS_AddCoin')
            console.log(vote.recordset[0].RESULT);
            return res.json(vote.recordset[0].RESULT)
        } else {
            return next(ApiError.internal("Something went wrong..."))
        }
    }

    // async  userVoteGamesTop100(req, res) {
    //     console.log(req);
    //     const {pingUsername} = req.query
    //     const pool = await poolPromise
    //     const request = pool.request()
    //     const vote = await request
    //     .input('AccountID', sql.VarChar(10), custom)
    //     .input('Type', sql.Int(), 0)
    //     .input('Coin', sql.Float(), 5)
    //     .execute('dbo.WZ_IBS_AddCoin')
    //     console.log(vote.recordset[0]);
    //     return res.json(vote.recordset[0].RESULT)
    // }

    async createAccount(req, res, next) {
        const {login, password, name, email, date, regQuestion, regAnswer, ip} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest("Wrong password or email!"))
        }
        const candidateEmail = await findOneUserEmail(email)
        console.log(candidateEmail.recordset.length);
        if(candidateEmail.recordset.length != 0) {
            return next(ApiError.internal("User with this E-mail already exist!"))
        }
        const candidateLogin = await findOneUserLogin(login)
        if(candidateLogin.recordset.length != 0) {
            return next(ApiError.internal("User with this Login already exist!"))
        }
        // const encryptedPwd = md5Pass(password, login)
        const pool = await poolPromise
        const request = pool.request()
        const acc = await request
            // .input('memb_guid', sql.Int, 2)
            // .input('memb___id', sql.VarChar(10), login)
            // .input('memb__pwd', sql.VarChar(20), encryptedPwd)
            // .input('memb_name', sql.VarChar(10), name)
            // .input('mail_addr', sql.VarChar(50), email)
            // .input('fpas_ques', sql.VarChar(50), regQuestion)
            // .input('fpas_answ', sql.VarChar(50), regAnswer)
            // .input('sno__numb', sql.Char(13), "1234567890")
            // .input('mail_chek', sql.Char(1), "0")
            // .input('bloc_code', sql.Char(1), "0")
            // .input('ctl1_code', sql.Char(1), "0")
            // .input('JoinDate', sql.VarChar(25), date)
            // .query(`INSERT INTO dbo.MEMB_INFO ( memb___id, memb__pwd, memb_name, mail_addr, fpas_ques, fpas_answ, sno__numb, mail_chek, bloc_code, ctl1_code, JoinDate) VALUES ( @memb___id, @memb__pwd, @memb_name, @mail_addr, @fpas_ques, @fpas_answ, @sno__numb, @mail_chek, @bloc_code, @ctl1_code, @JoinDate)`)
            .input('accLogin', sql.VarChar(10), login)
            .input('pass', sql.VarChar(20), password)
            .input('accName', sql.VarChar(10), name)
            .input('accMail', sql.VarChar(50), email)
            .input('regQuestion', sql.VarChar(50), regQuestion)
            .input('regAnswer', sql.VarChar(50), regAnswer)
            .input('accJoinDate', sql.VarChar(23), date)
            .execute(`dbo.RegAccount`)
            // .input('userIp', sql.VarChar(15), ip)
            // .input('dayAdd', sql.Int(), 5)
            // .input('vipType', sql.SmallInt(), 3)
            // .execute(`dbo.RegAccWithVip`)
            const userResponse = await request
            .query('SELECT memb.memb___id AS login, memb.memb__pwd AS password, memb.mail_addr AS email FROM dbo.MEMB_INFO memb WHERE memb.memb___id = @accLogin')
        const userData = userResponse.recordset[0]
        console.log(acc)
        console.log(userData)
        const token = generateJwt(userData.login, userData.password, userData.email)
        // return res.json({message: "Account created!"})
        return res.json(token)
    }

    async regainAccountQuestion(req, res, next) {
        const {login, email} = req.body
        if(!email || !login) {
            return next(ApiError.badRequest("Wrong password or email!"))
        }
        const candidateEmail = await findOneUserEmail(email)
        console.log(candidateEmail.recordset.length);
        if(candidateEmail.recordset.length == 0) {
            return next(ApiError.internal("User with this E-mail not found!"))
        }
        const candidateLogin = await findOneUserLogin(login)
        if(candidateLogin.recordset.length == 0) {
            return next(ApiError.internal("User with this Login not found!"))
        }
        const pool = await poolPromise
        const request = pool.request()
        const accQuestion = await request
            .input('memb___id', sql.VarChar(10), login)
            .input('mail_addr', sql.VarChar(50), email)
            .query(`SELECT fpas_ques as question FROM dbo.MEMB_INFO mi WHERE mi.memb___id = @memb___id AND mi.mail_addr = @mail_addr`)
        const question = accQuestion.recordset[0]
        console.log(question)
        return res.json(question)
    }

    async regainAccountAnswer(req, res, next) {
        // console.log(req.body);
        const {login, email, answer} = req.body
        if(!email || !login || !answer) {
            return next(ApiError.badRequest("Wrong answer!"))
        }
        const candidateEmail = await findOneUserEmail(email)
        console.log(candidateEmail.recordset.length);
        if(candidateEmail.recordset.length == 0) {
            return next(ApiError.internal("User with this E-mail not found!"))
        }
        const candidateLogin = await findOneUserLogin(login)
        if(candidateLogin.recordset.length == 0) {
            return next(ApiError.internal("User with this Login not found!"))
        }
        const candidateQuestionAnswer = await findUserAnswer(answer)
        if(candidateQuestionAnswer.recordset.length == 0){
            return next(ApiError.internal("Wrong answer!"))
        }
        const pool = await poolPromise
        const request = pool.request()
        const accAnswer = await request
            .input('memb___id', sql.VarChar(10), login)
            .input('mail_addr', sql.VarChar(50), email)
            .input('fpas_answ', sql.VarChar(50), answer)
            .query(`SELECT memb__pwd as password FROM dbo.MEMB_INFO mi WHERE mi.memb___id = @memb___id AND mi.mail_addr =@mail_addr AND mi.fpas_answ = @fpas_answ`)
        const regainPassword = accAnswer.recordset[0]
        console.log(regainPassword)
        return res.json(regainPassword)
    }

    async login(req, res, next) {
        const {login, password} = req.body
        console.log(login)
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('memb___id', sql.VarChar(10), login)
        .query('SELECT memb.memb___id AS login, memb.memb__pwd AS password, memb.mail_addr AS email FROM dbo.MEMB_INFO memb WHERE memb.memb___id COLLATE Latin1_General_CS_AS = @memb___id')
        const userData = data.recordset[0]
        console.log(userData)
        if (!userData) {
            return next(ApiError.internal('User with this login not found!'))
        }
        // let comparePassword = await passMD5Check(password, login) 
        let comparePassword = userData.password === password 
        if (!comparePassword) {
            return next(ApiError.forbidden('Wrong password!'))
        }
        const token = generateJwt(userData.login, userData.password, userData.email)
        // const decoded = jwt.verify(token, process.env.SECRET_KEY)
        // console.log(decoded)
        return res.json({token})
    }
    async check(req, res, next) {
        console.log(req.user)
        const token = generateJwt(req.user.login, req.user.password, req.user.email)
        return res.json({token})
    }
    async getAccountCharacters(req, res, next) {
        console.log(req.user);
        const pool = await poolPromise
        const request = pool.request()   
        const data = await request
        .input('id', sql.VarChar(10), req.user.login)
        .query('SELECT name as cName, cLevel, mLevel, class as cClass, str as cStr, agi as cAgi, vit as cVit, ene as cEne, cmd as cCmd, cZen, mapNumber, posX as mapX, posY as mapY, reset as cReset, gReset as cGrandReset, online, charGuild FROM dbo.vwCharacters c WHERE c.id = @id')
        return res.json(data.recordset)
    }
    
    async getAccountInfo(req, res, next) {
        console.log(req.user);
        const pool = await poolPromise
        const request = pool.request()   
        const data = await request
        .input('id', sql.VarChar(10), req.user.login)
        .query('SELECT * FROM dbo.vwUsers u WHERE u.accName = @id')
        return res.json(data.recordset[0])
    }

    async makeAccountCharacterReset(req, res) {
        const {name} = req.body
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('cName', sql.VarChar(10), name)
        .execute('dbo.Reset_system7')
        return res.json(data.recordset[0].Result)
    }
    async makeAccountCharacterGrandReset(req, res) {
        const {name} = req.body
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('cName', sql.VarChar(10), name)
        .execute('dbo.GrandReset_system1')
        return res.json(data.recordset[0].Result)
    }
    async buyVip(req, res) {
        const {name, days, type} = req.body
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('accName', sql.VarChar(10), name)
        .input('vipDays', sql.Int(), days)
        .input('vipType', sql.SmallInt(), type)
        .execute('dbo.Buy_vip')
        return res.json(data.recordset)
    }
    async getAccountVaultInfo(req, res, next) {
        console.log(req.user);
        const pool = await poolPromise
        const request = pool.request()   
        const data = await request
        .input('id', sql.VarChar(10), req.user.login)
        .query('SELECT Items as vaultItems, Money as vaultZen FROM dbo.warehouse wh WHERE wh.AccountID = @id')
        if(data.recordset.length === 0) {
            return next(ApiError.badRequest("Your Vault/Warehouse not found! Open your Vault in the game at least once."))
        }
        const itemBuf = data.recordset[0].vaultItems;
        const vaultZen = data.recordset[0].vaultZen;
        const items = parseInventory(itemBuf);
        return res.json({items, zen: vaultZen})
    }
    // async moveItemToMarket(req, res, next) {
    //     const { slotId, serial, itemWidth, itemHeight, priceZen, priceWCoin, priceGP } = req.body;
    //     const pool = await poolPromise;
    //     const request = pool.request()   
    //     const data = await request
    //     .input('id', sql.VarChar(10), req.user.login)
    //     .query('SELECT Items as vaultItems FROM dbo.warehouse wh WHERE wh.AccountID = @id')
    //     const originalBuffer = data.recordset[0].vaultItems;
    //     const validation = moveItemToMarket(originalBuffer, slotId, serial);
    //     // const { expectedSerial, itemHex, newWarehouseBuffer } = moveItemToMarket(originalBuffer, slotId, serial);
    //     if (!validation.success) {
    //         return next(ApiError.badRequest(validation.error));
    //     }
    //     const { itemHex, newWarehouseBuffer, expectedSerial } = validation;
    //     // Конвертируем строковый серийник 'E71C1600' в число BigInt для записи в базу данных
    //     // Это гарантирует корректную работу уникального индекса UX_market_ActiveSerial
    //     const serialAsBigInt = BigInt(`0x${expectedSerial}`);
    //     let transaction;
    //     try {
    //         transaction = new sql.Transaction(pool);
    //         await transaction.begin();
    //     // 1. Обновляем склад игрока (записываем измененный буфер обратно)
    //         const updateWarehouse = new sql.Request(transaction);
    //         updateWarehouse.input('accountId', sql.VarChar(10), req.user.login);
    //         updateWarehouse.input('warehouseBuffer', sql.VarBinary(7680), newWarehouseBuffer);
    //         await updateWarehouse.query('UPDATE dbo.warehouse SET Items = @warehouseBuffer WHERE AccountID = @accountId');
    //     // 2. Добавляем лот на маркет   
    //         const insertMarket = new sql.Request(transaction);
    //         insertMarket.input('accountId', sql.VarChar(10), req.user.login);
    //         insertMarket.input('itemHex', sql.VarChar(64), itemHex);
    //         insertMarket.input('itemSerial', sql.BigInt(), serialAsBigInt);
    //         insertMarket.input('itemWidth', sql.TinyInt(), itemWidth);
    //         insertMarket.input('itemHeight', sql.TinyInt(), itemHeight); 
    //         insertMarket.input('slotId', sql.Int(), slotId);
    //         insertMarket.input('priceZen', sql.Int(), priceZen || null);  // Валюты: если значение не передано с фронтенда, передаем null
    //         insertMarket.input('priceWCoin', sql.Int(), priceWCoin || null);
    //         insertMarket.input('priceGP', sql.Int(), priceGP || null);
    //         const data = await insertMarket.query('INSERT INTO dbo.market (AccountID, ItemHex, ItemSerial, ItemWidth, ItemHeight, OriginalSlot, PriceZen, PriceWCoin, PriceGP) VALUES (@accountId, @itemHex, @itemSerial, @itemWidth, @itemHeight, @slotId, @priceZen, @priceWCoin, @priceGP)');
    //     // Если оба запроса прошли успешно — фиксируем изменения в БД
    //         await transaction.commit();
    //         return res.json({success: true, data: data.recordset});
    //     } catch (error) {
    //         console.error("Fatal error on market:", error);
    //     // Если произошла любая ошибка (например, оборвалась связь или сработал уникальный индекс от дюпа)
    //     // Откатываем изменения, вещь останется у игрока на складе
    //     if (transaction && transaction._active) {
    //         try {
    //             await transaction.rollback();
    //         } catch (rollbackError) {
    //             console.error("Error while rolling back:", rollbackError.message);
    //         }
    //     }
    //         return res.status(500).json({ error: error.message });
    //     }

    // }
    async getAccountWebstore(req, res, next) {
        try{
            const pool = await poolPromise
            const request = pool.request()   
            const data = await request
            .input('id', sql.VarChar(10), req.user.login)
            .query('SELECT Items as webstoreItems, Money as webstoreZen FROM dbo.account_webstore ws WHERE ws.AccountID = @id')
            if(data.recordset.length === 0) {
                return next(ApiError.badRequest("Webstore not found!"))
            }
            const itemBuf = data.recordset[0].webstoreItems;
            const items = parseInventory(itemBuf);
            const webstoreZen = data.recordset[0].webstoreZen;
            return res.json({items, zen: webstoreZen})

        } catch(err) {
            return next(ApiError.badRequest(err.message))
        }
    }
    async moveItemToWebstore(req, res, next) {
        const { slotId, serial } = req.body;
        const accountId = req.user.login;
        try {
            const pool = await poolPromise;
            // 1. ЖЕСТКАЯ ПРОВЕКА: Игрок должен быть оффлайн
            const isOnline = await checkUserOnline(accountId, next);
            if (isOnline == 1) {
                return next(ApiError.badRequest('Please log-out from the game!'));
            } 
            //2. Загружаем буферы обоих складов
            const dbData = await pool.request()
            .input('accountId', sql.VarChar(10), accountId)
            .query('SELECT (SELECT Items FROM dbo.warehouse WHERE AccountID = @accountId) as gameItems, (SELECT Items FROM dbo.account_webstore WHERE AccountID = @accountId) as webItems');
            const gameBuffer = dbData.recordset[0].gameItems;
            const webBuffer = dbData.recordset[0].webItems;
            if (!gameBuffer) return next(ApiError.badRequest('Can not find user warehouse!'));
            if (!webBuffer) return next(ApiError.badRequest('Can not find user web-store'));
            // 3. Вырезаем предмет из игрового буфера (используем нашу готовую безопасную функцию)
            // Она вернет hex, очищенный игровой буфер и сериализированный объект для парсинга размеров
            const validation = moveItemToMarket(gameBuffer, slotId, serial);
            if (!validation.success) {
                return next(ApiError.badRequest(validation.error));
            }
            const { itemHex, newWarehouseBuffer, expectedSerial } = validation;
            // Декодируем вырезанный предмет, чтобы узнать его ItemWidth и ItemHeight
            const itemBuffer = Buffer.from(itemHex, 'hex');
            const decodedItem = decodeIGCNItem(itemBuffer);
            // 4. Ищем место на ВЕБ-СКЛАДЕ для этого предмета
            const parsedWebInventory = [];
            for (let s = 0; s < 120; s++) {
                const offset = s * ITEM_SIZE;
                const subBuf = webBuffer.subarray(offset, offset + ITEM_SIZE);
                if (!subBuf.every(byte => byte === 0xFF)) {
                    const decoded = decodeIGCNItem(Buffer.from(subBuf));
                    decoded.slot = s;
                    parsedWebInventory.push(decoded);
                }   
            } 
            const targetWebSlot = findFreeSlotForItem(parsedWebInventory, decodedItem.width, decodedItem.height);
            if (targetWebSlot === null) {
                return next(ApiError.badRequest(`Недостаточно места в Веб-складе сайта для этого предмета width:${decodedItem.width}, height:${decodedItem.height}}`));
            }
            //5. Вписываем предмет в буфер Веб-склада
            const updatedWebBuffer = Buffer.from(webBuffer);
            itemBuffer.copy(updatedWebBuffer, targetWebSlot * ITEM_SIZE);
            // 6. ТРАНЗАКЦИЯ ОБНОВЛЕНИЯ БАЗЫ ДАННЫХ
            let transaction = new sql.Transaction(pool);
            try {
                await transaction.begin();
                // Обновляем игровой склад (вещь стерта)
                await new sql.Request(transaction)
                .input('accountId', sql.VarChar(10), accountId)
                .input('buf', sql.VarBinary(7680), newWarehouseBuffer)
                .query('UPDATE dbo.warehouse SET Items = @buf WHERE AccountID = @accountId');
                // Обновляем веб-склад (вещь добавлена)
                await new sql.Request(transaction)
                .input('accountId', sql.VarChar(10), accountId)
                .input('buf', sql.VarBinary(7680), updatedWebBuffer)
                .query('UPDATE dbo.account_webstore SET Items = @buf WHERE AccountID = @accountId');
                await transaction.commit();
                return res.json({ success: true, message: 'Предмет успешно перенесен в Веб-склад на сайте!' });
            } catch (txErr) {
                if (transaction && transaction._active) await transaction.rollback();
                return next(ApiError.badRequest(txErr.message));
            }
        } catch (error) {
            return next(ApiError.internal(error.message));
        }
    }

    async moveItemToVault(req, res, next) {
        const { slotId, serial } = req.body;
        const accountId = req.user.login;

        try {
            const pool = await poolPromise;
            // 1. ЖЕСТКАЯ ПРОВЕКА: Игрок должен быть оффлайн
            const isOnline = await checkUserOnline(accountId);
            if (isOnline) {
                return next(ApiError.badRequest('Please log-out from the game!'));
            } 
            //2. Загружаем буферы обоих складов
            const dbData = await pool.request()
            .input('accountId', sql.VarChar(10), accountId)
            .query('SELECT (SELECT Items FROM dbo.warehouse WHERE AccountID = @accountId) as gameItems, (SELECT Items FROM dbo.account_webstore WHERE AccountID = @accountId) as webItems');
            const gameBuffer = dbData.recordset[0].gameItems;
            const webBuffer = dbData.recordset[0].webItems;
            if (!gameBuffer) return next(ApiError.badRequest('Vault/Warehouse not found!'));
            if (!webBuffer) return next(ApiError.badRequest('Webstore not found!'));
            // 3. Вырезаем предмет из ВЕБ-СКЛАДА (используем ту же функцию moveItemToMarket, ей без разницы какой буфер чистить)
            const validation = moveItemToMarket(webBuffer, slotId, serial);
            if (!validation.success) {
                return next(ApiError.badRequest(validation.error));
            }
            const { itemHex, newWarehouseBuffer, expectedSerial } = validation; // тут newWarehouseBuffer — это очищенный ВЕБ-буфер
            // Декодируем вырезанный предмет для получения размеров
            const itemBuffer = Buffer.from(itemHex, 'hex');
            const decodedItem = decodeIGCNItem(itemBuffer);
            // 4. Ищем место в ИГРОВОМ СКЛАДЕ
            const parsedGameInventory = [];
            for (let s = 0; s < 120; s++) {
                const offset = s * ITEM_SIZE;
                const subBuf = gameBuffer.subarray(offset, offset + ITEM_SIZE);
                if (!subBuf.every(byte => byte === 0xFF)) {
                    const decoded = decodeIGCNItem(Buffer.from(subBuf));
                    decoded.slot = s;
                    parsedGameInventory.push(decoded);
                }
            }
            const targetGameSlot = findFreeSlotForItem(parsedGameInventory, decodedItem.width, decodedItem.height);
            if (targetGameSlot === null) {
                return next(ApiError.badRequest('Not enough space in your Vault/Warehouse!'));
            }
            //5. Вписываем предмет в буфер Игрового склада
            const updatedGameBuffer = Buffer.from(gameBuffer);
            itemBuffer.copy(updatedGameBuffer, targetGameSlot * ITEM_SIZE);
            // 6. ТРАНЗАКЦИЯ ОБНОВЛЕНИЯ БАЗЫ ДАННЫХ
            let transaction = new sql.Transaction(pool);
            try {
                await transaction.begin();
                // Обновляем веб-склад (вещь стерта)
                await new sql.Request(transaction)
                .input('accountId', sql.VarChar(10), accountId)
                .input('buf', sql.VarBinary(7680), newWarehouseBuffer) // новый очищенный веб-буфер
                .query('UPDATE dbo.account_webstore SET Items = @buf WHERE AccountID =@accountId');
                // Обновляем игровой склад (вещь добавлена)
                await new sql.Request(transaction)
                .input('accountId', sql.VarChar(10), accountId)
                .input('buf', sql.VarBinary(7680), updatedGameBuffer)
                .query('UPDATE dbo.warehouse SET Items = @buf WHERE AccountID = @accountId');
                await transaction.commit();
                return res.json({ success: true, message: 'Item successfully sent to Vault/Warehouse!' });
            } catch (txErr) {
                if (transaction && transaction._active) await transaction.rollback();
                return next(ApiError.badRequest(txErr.message));
            }
        } catch (error) {
            return next(ApiError.internal(error.message));
        }
    }


    async moveZen(req, res, next) {
        const { amount, direction } = req.body; // direction может быть'to_web' или 'to_game'
        const accountId = req.user.login;
        const GAME_ZEN_LIMIT = 999999999;
        const zenAmount = parseInt(amount);
        if (isNaN(zenAmount) || zenAmount <= 0) {
           return next(ApiError.badRequest('Wrong Zen amount for transfering!'));
        } 
        if (direction !== 'to_web' && direction !== 'to_game') {
            return next(ApiError.badRequest('Wrong Zen transfer direction!'));
        } 

        try {
            const pool = await poolPromise;
            // 1. ОБЯЗАТЕЛЬНАЯ ПРОВЕРКА: Игрок должен быть оффлайн
            const isOnline = await checkUserOnline(accountId, next);
            if (isOnline) {
                return next(ApiError.badRequest('Please log-out from the game for Zen transfering.'));
            }
            // 2. Открываем транзакцию
            let transaction;
            try {
                transaction = new sql.Transaction(pool);
                await transaction.begin();
                const request = new sql.Request(transaction);
                request.input('accountId', sql.VarChar(10), accountId);
                request.input('amount', sql.BigInt(), BigInt(zenAmount)); // На сайте BIGINT
                if (direction === 'to_web') {
                    // ПЕРЕВОД ИЗ ИГРЫ НА САЙТ
                    // Списываем из ваулта (только если Money >= числу перевода) и зачисляем на веб-склад
                    const result = await request.query('UPDATE dbo.warehouse SET Money = Money - @amount WHERE AccountID = @accountId AND Money >= @amount; IF @@ROWCOUNT > 0 UPDATE dbo.account_webstore SET Money = Money + @amount WHERE AccountID = @accountId;');
                    console.log(result.rowsAffected[0]);
                    if (result.rowsAffected[0] === 0) {
                        return next(ApiError.internal('Not enough Zen in your Vault/Warehouse for transfer!'));      
                    }
                } else {
                    // ПЕРЕВОД С САЙТА В ИГРУ
                    // 1. Сначала делаем предварительную проверку лимита Zen в игре, чтобы не сжечь золото
                    const checkGameZen = await request.query('SELECT Money FROM dbo.warehouse WHERE AccountID = @accountId');
                    if (checkGameZen.recordset.length === 0) {
                        return next(ApiError.badRequest('Your Vault/Warehouse not yet created, please log-in the game and open yuor Vault at least once.'));
                    } 
                    const currentGameZen = checkGameZen.recordset[0].Money;
                    // console.log(currentGameZen);
                    if (currentGameZen + zenAmount > GAME_ZEN_LIMIT) {
                        return next(ApiError.badRequest(`Transfer rejected. Limit for Vault/Warehouse is 999,999,999 Zen (your Zen amount will be: ${(currentGameZen + zenAmount).toLocaleString()})`));
                    } 
                    // 2. Если лимит прошел — списываем с веб-склада и зачисляем в игру
                    const result = await request.query('UPDATE dbo.account_webstore SET Money = Money - @amount WHERE AccountID = @accountId AND Money >= @amount; IF @@ROWCOUNT > 0 UPDATE dbo.warehouse SET Money = Money + @amount WHERE AccountID = @accountId;');
                    console.log(result.rowsAffected[0]);
                    if (result.rowsAffected[0] === 0) {
                        return next(ApiError.badRequest('Not enough Zen on your Web-store for transfer!'));
                    }
                }
                await transaction.commit();
                return res.json({ success: true, message: 'Перевод Zen успешно выполнен!' });
            } catch (txError) {
                if (transaction && transaction._active) {
                    try { await transaction.rollback(); } catch (rbErr)
                        { console.error(rbErr); }
                    }
                    return next(ApiError.badRequest(txError.message));
            }
        } catch (error) {
            console.error('Ошибка в handleTransferZen:', error);
            return next(ApiError.internal('Внутренняя ошибка сервера при переводе валюты'));
        }
    }


    async getMarketItems(req, res, next) {
        // Получаем параметры из запроса, задаем дефолтные значения
        // console.log(req.query);
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12; // по 12 товаров на плитку фронтенда
        const search = req.query.search || ''; // поиск по AccountID продавца
        const categoryId = req.query.catId !== undefined && req.query.catId !== ''
                ? parseInt(req.query.catId)
                : null
                ;
        // Рассчитываем смещение для SQL-запроса (сколько строк пропустить)
        const offset = (page - 1) * limit;
        try {
            const pool = await poolPromise;
            const request = pool.request();
            // Передаем параметры для пагинации и поиска
            request.input('offset', sql.Int(), offset);
            request.input('limit', sql.Int(), limit);
            request.input('search', sql.VarChar(10), `%${search}%`);
            request.input('status', sql.Int(), 0);
            // Передаем categoryId в SQL, это будет либо число либо NULL
            request.input('categoryId', sql.Int(), categoryId);
            // Запрос 1: Получаем общее количество подходящих лотов (нужно фронтенду для отрисовки страниц 1, 2, 3...)
            // Конструкция (@categoryId IS NULL OR CategoryID = @categoryId) делает фильтр опциональным
            // const countResult = await request.query('SELECT COUNT(*) as total FROM dbo.market WHERE Status = @status AND AccountID LIKE @search');
            const countResult = await request.query(`
                SELECT COUNT(*) as total
                FROM dbo.market 
                WHERE Status = @status 
                    AND AccountID LIKE @search
                    AND (@categoryId IS NULL OR CategoryID = @categoryId)
                `);
            const totalItems = countResult.recordset[0].total;
            const totalPages = Math.ceil(totalItems / limit);
            // Запрос 2: Вытаскиваем саму порцию товаров (благодаря индексу IX_market_Status запрос отработает за 1-2 мс)
            const itemsResult = await request.query(`
                SELECT * FROM (
                SELECT ID as marketId, AccountID as seller, ItemHex,
                ItemSerial, ItemWidth, ItemHeight, PriceZen, PriceWCoin, PriceGP,
                DateAdded,
                ROW_NUMBER() OVER (ORDER BY DateAdded DESC) as
                RowNum
                FROM dbo.market
                WHERE Status = @status
                    AND AccountID LIKE @search
                    AND (@categoryId IS NULL OR CategoryID = @categoryId)
                ) as RowConstrainedResult
                WHERE RowNum > @offset AND RowNum <= (@offset + @limit)
                ORDER BY RowNum
                `);

            const processedItems = itemsResult.recordset.map(item => {
                let itemData = null;

                if (item.ItemHex) {
                    try {
                        // 1. Переводим НЕХ-строку обратно в Buffer
                        const itemBuffer = Buffer.from(item.ItemHex, 'hex');

                        // 2. Парсим буфер 
                        itemData = decodeIGCNItem(itemBuffer);
                    } catch (parseError) {
                        console.log(`parging Error with HEX: ${item.ItemHex}`, parseError);
                        itemData = {name: "Unknown item (Parsing Error)"}
                    }
                }
                return {
                    ...item,
                    itemData: itemData
                };
            });

            // Возвращаем структурированный ответ
            return res.json({
                success: true,
                meta: {
                    totalItems,
                    totalPages,
                    currentPage: page,
                    itemsPerPage: limit
                },
                items: processedItems
            });
        } catch (error) {
            console.error('Ошибка при получении товаров маркета:', error);
            return next(ApiError.internal('Не удалось загрузить товарывеб-рынка'));
        }
    }



    async moveItemToMarket(req, res, next) {
        const { slotId, serial, priceZen, priceWCoin, priceGP, itemWidth, itemHeight, categoryId } = req.body;
        const accountId = req.user.login;
        const zenAmount = BigInt(priceZen);
        const MAX_ZEN_LIMIT = 10000000000n
        // Валидация цен
        if (!priceZen && !priceWCoin && !priceGP) {
            return next(ApiError.badRequest('Item price not selected, please set item price!'))
        }
        if ( zenAmount  > MAX_ZEN_LIMIT) {
            console.log(priceZen);
            console.log(zenAmount);
            return next(ApiError.badRequest('Wrong Zen anount: maximum limit is 10kkk!'))
        }
        try {
            const pool = await poolPromise;
            // 1. Загружаем Буфер из Веб Склада dbo.account_webstore
            const request = pool.request();
            request.input('id', sql.VarChar(10), req.user.login);
            const dataWebstore = await request.query('SELECT Items FROM dbo.account_webstore WHERE AccountID = @id');
            
            if (dataWebstore.recordset.length === 0) {
                return next(ApiError.badRequest('Can not find acoount webstore!'))
            }
            const originalBuffer = dataWebstore.recordset[0].Items;
            // 2. Валидация и вырезание предмета из буфера веб-склада
            const validation = moveItemToMarket(originalBuffer, slotId, serial);
            
            if (!validation.success) {
                return next(ApiError.badRequest(validation.error));
            }
            const { itemHex, newWarehouseBuffer, expectedSerial } = validation;
            const serialAsBigInt = BigInt(`0x${expectedSerial}`);

            // 3. ЗАПУСК SQL-ТРАНЗАКЦИИ
            let transaction;
            try {
                transaction = new sql.Transaction(pool);
                await transaction.begin();
                // Обновляем буфер ВЕБ-СКЛАДА сайта (стираем вещь оттуда)
                const updateWebstore = new sql.Request(transaction);
                updateWebstore.input('accountId', sql.VarChar(10), accountId);
                updateWebstore.input('webstoreBuffer', sql.VarBinary(7680), newWarehouseBuffer);
                await updateWebstore.query('UPDATE dbo.account_webstore SET Items = @webstoreBuffer WHERE AccountID = @accountId');
                // Вставляем лот на маркет
                const insertMarket = new sql.Request(transaction);
                insertMarket.input('accountId', sql.VarChar(10), accountId);
                insertMarket.input('itemHex', sql.VarChar(64), itemHex);
                insertMarket.input('itemSerial', sql.BigInt(), serialAsBigInt);
                insertMarket.input('itemWidth', sql.TinyInt(), itemWidth);
                insertMarket.input('itemHeight', sql.TinyInt(), itemHeight);
                insertMarket.input('categoryId', sql.Int(), categoryId || null);
                insertMarket.input('slotId', sql.Int(), slotId);
                insertMarket.input('priceZen', sql.Int(), zenAmount || null);
                insertMarket.input('priceWCoin', sql.Int(), priceWCoin || null);
                insertMarket.input('priceGP', sql.Int(), priceGP || null);
                await insertMarket.query('INSERT INTO dbo.market (AccountID, ItemHex, ItemSerial, ItemWidth, ItemHeight, OriginalSlot, PriceZen, PriceWCoin, PriceGP, CategoryID) VALUES (@accountId, @itemHex, @itemSerial, @itemWidth, @itemHeight, @slotId, @priceZen, @priceWCoin, @priceGP, @categoryId);');
                await transaction.commit();
                return res.json({ success: true, message: "Item successfully sent on Market!" });
            } catch (error) {
                console.error('❌ ОШИБКА ТРАНЗАКЦИИ ВЫСТАВЛЕНИЯ:', error);
                if (transaction && transaction._active) {
                    await transaction.rollback();
                }
                return next(ApiError.badRequest(error.message));
            }
        } catch (error) {
           console.error('Глобальная ошибка:', error);
            return next(ApiError.internal('Internal server error'));
        }
    }

    async getBackMarketItem(req, res, next) {
        const { marketId } = req.body;
        const accountId = req.user.login;
        const ITEM_SIZE = 32;
        let transaction;

        try {
            const pool = await poolPromise;
            // Открываем транзакцию:
            transaction = new sql.Transaction(pool);
            // 1. Получаем данные лота из таблицы dbo.market
            // const marketRequest = pool.request();
            const marketRequest = pool.request(transaction); // передаем транзакцию
            marketRequest.input('marketId', sql.Int(), marketId);
            const marketResult = await marketRequest.query(`SELECT AccountID as sellerAccountId, ItemHex, ItemWidth, ItemHeight, Status FROM dbo.market WHERE ID = @marketId`);
            if (marketResult.recordset.length === 0) {
                return next(ApiError.badRequest('Указанный лот не найден'));
            } 
            // console.log(accountId);
            // console.log(marketResult.recordset[0].sellerAccountId);
            const lot = marketResult.recordset[0];
            // Проверяем, что этот лот принадлежит именно этому пользователю
            if (lot.sellerAccountId !== accountId) {
                return next(ApiError.badRequest('Вы не являетесь владельцем этого предмета'));
            }
            if (lot.Status !== 0) {
                return next(ApiError.badRequest('Этот предмет уже продан или снят с продажи'));
            }
            // 2. Загружаем буфер Веб-склада владельца
            // const webstoreRequest = pool.request();
            const webstoreRequest = pool.request(transaction);  // передаем транзакцию
            webstoreRequest.input('accountId', sql.VarChar(10), accountId);
            const wsResult = await webstoreRequest.query('SELECT Items FROM dbo.account_webstore WHERE AccountID = @accountId');
            const currentWebstoreBuffer = wsResult.recordset[0].Items;
            // 3. ПАРСИНГ ВЕБ-СКЛАДА И ПОИСК МЕСТА ДЛЯ ВОЗВРАТА
            const parsedInventory = [];
            for (let slot = 0; slot < 120; slot++) {
                const offset = slot * ITEM_SIZE;
                const itemBuffer = currentWebstoreBuffer.subarray(offset, offset + ITEM_SIZE);
                if (!itemBuffer.every(byte => byte === 0xFF)) {
                    const decoded = decodeIGCNItem(Buffer.from(itemBuffer));
                    decoded.slot = slot;
                    parsedInventory.push(decoded);
                }   
            } 
            // Ищем свободное место под габариты возвращаемой вещи
            const targetSlot = findFreeSlotForItem(parsedInventory, lot.ItemWidth, lot.ItemHeight);
            if (targetSlot === null) {
                // throw new Error('Недостаточно свободного места на вашем веб-складе сайта для возврата предмета');
                return next(ApiError.badRequest('Недостаточно свободного места на вашем веб-складе сайта для возврата предмета'));
            } 
            // 4. Подготавливаем обновленный буфер веб-склада (вписываем вещь обратно)
            const updatedWebBuffer = Buffer.from(currentWebstoreBuffer);
            const itemBufferToWrite = Buffer.from(lot.ItemHex, 'hex');
            itemBufferToWrite.copy(updatedWebBuffer, targetSlot * ITEM_SIZE);
            // 5. ТРАНЗАКЦИЯ ОТЗЫВА ЛОТА
            // let transaction;
            // try {
                transaction = new sql.Transaction(pool);
                await transaction.begin();
                // Переводим статус в 2 (Отозван / Снят с продажи)
                const updateMarket = new sql.Request(transaction);
                updateMarket.input('marketId', sql.Int(), marketId);
                // const updateMarketResult = await updateMarket.query('UPDATE dbo.market SET Status = 2 WHERE ID = @marketId AND Status = 0;');
                await updateMarket.query(`
                    INSERT INTO dbo.market_history (
                        ID, AccountID, ItemHex, ItemSerial, ItemWidth, ItemHeight, 
                        OriginalSlot, DateAdded, Status, PriceZen, PriceWCoin, PriceGP, CategoryID
                    )
                    SELECT 
                        ID, AccountID, ItemHex, ItemSerial, ItemWidth, ItemHeight,
                        OriginalSlot, DateAdded, 2, PriceZen, PriceWCoin, PriceGP, CategoryID
                    FROM dbo.market 
                    WHERE ID = @marketId AND Status = 0;
                `);
                    // 2. Удаляем запись из таблицы маркета
                const updateMarketResult = await updateMarket.query(`
                    DELETE FROM dbo.market
                    WHERE ID = @marketId AND Status = 0;
                `)
                if (updateMarketResult.rowsAffected === 0) {
                    throw new Error('Не удалось снять предмет с продажи (возможно, его только что купили)');
                } 
                // 6. Записываем обновленный буфер в веб-склад
                const saveWebstore = new sql.Request(transaction);
                saveWebstore.input('accountId', sql.VarChar(10), accountId);
                saveWebstore.input('wsBuffer', sql.VarBinary(7680), updatedWebBuffer);
                await saveWebstore.query('UPDATE dbo.account_webstore SET Items = @wsBuffer WHERE AccountID = @accountId;');
                await transaction.commit();
                return res.json({ success: true, message: 'Предмет успешно снят с продажи и возвращен в ваш Веб-склад!' });
            } catch (error) {
                if (transaction) {
                    try { 
                        await transaction.rollback(); 
                    } catch (rbErr){
                        console.error(rbErr); 
                    }
                    return next(ApiError.badRequest(error.message));
                }
            }
            // } catch (txError) {
            //     if (transaction && transaction._active) {
            //         try { 
            //             await transaction.rollback(); 
            //         } catch (rbErr){
            //             console.error(rbErr); 
            //         }
            //         return next(ApiError.badRequest(txError.message));
            //     }
            // }
        // } catch (error) {
        //     console.error('Ошибка в handleRemoveMarketItem:', error);
        //     // return error
        //     return next(ApiError.internal('Внутренняя ошибка сервера'));
        // }
    }

    async buyMarketItem(req, res, next) {
        const { marketId } = req.body;
        const buyerAccountId = req.user.login;
        const ITEM_SIZE = 32;
        let transaction;
        try {
            const pool = await poolPromise;
            // ОТКРЫВАЕМ ТРАНЗАКЦИЮ В САМОМ НАЧАЛЕ!
            transaction = new sql.Transaction(pool);
            await transaction.begin();
            // 1. Достаем данные лота из таблицы dbo.market
            // const marketRequest = pool.request(); 
            const marketRequest = new sql.Request(transaction);  // transaction added
            marketRequest.input('marketId', sql.Int(), marketId);
            const marketResult = await marketRequest.query(`
                SELECT AccountID as sellerAccountId, ItemHex,
                ItemWidth, ItemHeight, PriceZen, PriceWCoin, PriceGP, Status
                FROM dbo.market WHERE ID = @marketId
            `);
            if (marketResult.recordset.length === 0) {
                // return next(ApiError.badRequest('Указанный лот не найден на рынке'));
                throw new Error('Указанный лот не найден на рынке');
            }
            const lot = marketResult.recordset[0];
            if (lot.Status !== 0) {
                return next(ApiError.badRequest('Этот предмет уже продан или снят с продажи'));
            }
            if (lot.sellerAccountId === buyerAccountId) {
                return next(ApiError.badRequest('Вы не можете купить свой собственный предмет'));
            }
            // 2. Загружаем данные ВЕБ-СКЛАДОВ покупателя и продавца (вместо игровых складов)
            // const dataRequest = pool.request(transaction);
            const dataRequest = new sql.Request(transaction); // ЧЕРЕЗ ТРАНЗАКЦИЮ
            dataRequest.input('buyerId', sql.VarChar(10), buyerAccountId);
            dataRequest.input('sellerId', sql.VarChar(10), lot.sellerAccountId);
            const dbData = await dataRequest.query(`SELECT AccountID, Items, Money FROM dbo.account_webstore WHERE AccountID IN (@buyerId, @sellerId)`);
            const buyerData = dbData.recordset.find(row => row.AccountID === buyerAccountId);
            const sellerData = dbData.recordset.find(row => row.AccountID === lot.sellerAccountId);
            if (!buyerData) return next(ApiError.badRequest('Веб-склад покупателя не найден'));
            if (!sellerData) return next(ApiError.badRequest('Веб-склад продавца не найден'));
            // 3. ПАРСИНГ ВЕБ-СКЛАДА И ПОИСК СВОБОДНОЙ СЕТКИ (8х15)
            const buyerWebstoreBuffer = buyerData.Items;
            const parsedInventory = [];
            for (let slot = 0; slot < 120; slot++) {
                const offset = slot * ITEM_SIZE;
                const itemBuffer = buyerWebstoreBuffer.subarray(offset, offset + ITEM_SIZE);
                if (!itemBuffer.every(byte => byte === 0xFF)) {
                    const decoded = decodeIGCNItem(Buffer.from(itemBuffer));
                    decoded.slot = slot;
                    parsedInventory.push(decoded);
                }
            }
            // Запуск алгоритма findFreeSlotForItem
            const targetSlot = findFreeSlotForItem(parsedInventory, lot.ItemWidth, lot.ItemHeight);
            if (targetSlot === null) {
                return next(ApiError.badRequest('Недостаточносвободного места на вашем веб-складе сайта для этого предмета'));
            }
            // 4. Подготавливаем обновленный буфер веб-склада покупателя (вписываем вещь)
            const updatedBuyerBuffer = Buffer.from(buyerWebstoreBuffer);
            const itemBufferToWrite = Buffer.from(lot.ItemHex, 'hex');
            itemBufferToWrite.copy(updatedBuyerBuffer, targetSlot * ITEM_SIZE);

            // ШАГ А: Защита от Race Condition. Меняем статус лота на "Продано" (1)
            const updateMarket = new sql.Request(transaction);
            updateMarket.input('marketId', sql.Int(), marketId);
            const updateMarketResult = await updateMarket.query(`UPDATE dbo.market SET Status = 1 WHERE ID = @marketId AND Status = 0;`);
            if (updateMarketResult.rowsAffected === 0) {
                    throw new Error('Этот предмет только что перекупил другой игрок');
            } 
                    
            const historyRequest = new sql.Request(transaction);
            historyRequest.input('marketId', sql.Int(), marketId);
            historyRequest.input('buyerAccountId', sql.VarChar(10), buyerAccountId);
                 // 1. Копируем лот в историю со статусом 1 (Куплен) и логируем покупателя
            await historyRequest.query(`
                INSERT INTO dbo.market_history (
                    ID, AccountID, ItemHex, ItemSerial, ItemWidth, ItemHeight,
                    OriginalSlot, DateAdded, Status, PriceZen, PriceWCoin, PriceGP, categoryID, BuyerAccountID
                )
                SELECT
                    ID, AccountID, ItemHex, ItemSerial, ItemWidth, ItemHeight,
                    OriginalSlot, DateAdded, 1, PriceZen, PriceWCoin, PriceGP, CategoryID, @buyerAccountId
                FROM dbo.market
                WHERE ID = @marketId AND Status = 0;    
                `);
                
                // 2. Безвозвратно удаляем из маркетаб так как копия уже в истории
            const deleteResult = await historyRequest.query(`
                DELETE FROM dbo.market
                WHERE ID = @marketId AND Status = 0;
                `)
                // Если rowAffected === 0, значит лот уже забран, куплен или отсутствует
            if (deleteResult.rowsAffected === 0) {
                throw new Error('Этот предмет только что перекупил другой игрок, или снят с продажи!')
            }
            // ШАГ Б: Работа с экономикой (Веб-кошелек Zen + Электронная валюта через @@ROWCOUNT)
                const economyRequest = new sql.Request(transaction);
                economyRequest.input('buyerId', sql.VarChar(10), buyerAccountId);
                economyRequest.input('sellerId', sql.VarChar(10), lot.sellerAccountId);
                // 1. Списание/Начисление Zen в новой таблице dbo.account_webstore
                if (lot.PriceZen) {
                    economyRequest.input('priceZen', sql.BigInt(), BigInt(lot.PriceZen));
                    const zenTransaction = await economyRequest.query(`UPDATE dbo.account_webstore SET Money = Money - @priceZen WHERE AccountID = @buyerId AND Money >= @priceZen; 
                        IF @@ROWCOUNT > 0
                        UPDATE dbo.account_webstore SET Money =
                        Money + @priceZen WHERE AccountID = @sellerId;
                    `);
                    if (zenTransaction.rowsAffected === 0) {
                        throw new Error('Недостаточно Zen на вашем веб-кошельке для совершения покупки');
                    }
                }
                // 2. Списание/Начисление WCoinC в dbo.T_InGameShop_Point
                if (lot.PriceWCoin) {
                    economyRequest.input('priceWCoin', sql.Int(), lot.PriceWCoin);
                    const wcoinTransaction = await
                    economyRequest.query(`
                        UPDATE dbo.T_InGameShop_Point
                        SET WCoinC = WCoinC - @priceWCoin
                        WHERE AccountID = @buyerId AND WCoinC >=
                        @priceWCoin;
                        IF @@ROWCOUNT > 0
                        UPDATE dbo.T_InGameShop_Point SET WCoinC = WCoinC +
                        @priceWCoin WHERE AccountID = @sellerId;
                    `);
                    if (wcoinTransaction.rowsAffected === 0) {
                        throw new Error('Недостаточно wCoins на вашем аккаунте для совершения покупки');
                    }
                }
                // 3. Списание/Начисление GoblinPoint в dbo.T_InGameShop_Point
                if (lot.PriceGP) {
                    economyRequest.input('priceGP', sql.Int(), lot.PriceGP);
                    const gpTransaction = await economyRequest.query(`
                        UPDATE dbo.T_InGameShop_Point
                        SET GoblinPoint = GoblinPoint - @priceGP
                        WHERE AccountID = @buyerId AND GoblinPoint >=
                        @priceGP;
                        IF @@ROWCOUNT > 0
                        UPDATE dbo.T_InGameShop_Point SET GoblinPoint =GoblinPoint + @priceGP WHERE AccountID = @sellerId;
                    `);
                    if (gpTransaction.rowsAffected === 0) {
                        throw new Error('Недостаточно Goblin Points на вашем аккаунте для совершения покупки');
                    }
                }
                // ШАГ В: Запись готового буфера со вшитой вещью в ВЕБ-СКЛАД покупателя
                const saveWebstore = new sql.Request(transaction);
                saveWebstore.input('buyerId', sql.VarChar(10), buyerAccountId);
                saveWebstore.input('wsBuffer', sql.VarBinary(7680), updatedBuyerBuffer);
                await saveWebstore.query(`
                    UPDATE dbo.account_webstore SET Items = @wsBuffer
                    WHERE AccountID = @buyerId;
                `);
                // Успешный коммит
                await transaction.commit();
                return res.json({ success: true, message: 'Предмет успешно куплен и отправлен в ваш Веб-склад на сайте!' });
            }
            catch (error) {
                if (transaction) {
                    try {
                        await transaction.rollback();
                    } catch (rberr) {
                        console.error('Глобальный сбой в контроллере buyItem:', rberr);
                    }
                }
                return next(ApiError.badRequest(error.message));
            }
        //     } catch (txError) {
        //         if (transaction && transaction._active) {
        //             try { await transaction.rollback(); } catch (rbErr){ console.error(rbErr); }
        //         }
        //         return next(ApiError.badRequest(txError.message));
        //     }
        // } catch (error) {
        //     console.error('Глобальный сбой в контроллере buyItem:', error);
        //     return next(ApiError.internal('Внутренняя ошибка сервера при обработке покупки'));
        // }
    }

}

module.exports = new UserController()