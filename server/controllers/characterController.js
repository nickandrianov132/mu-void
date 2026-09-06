const { poolPromise } = require('../db')
const sql = require('mssql')
const jwt = require('jsonwebtoken');
const allowed380Items = require('../utiles/allowed380Items');
const fs = require('fs');
const path = require('path');
const itemsList = require('../utiles/item_list.json');
// const jsonBuffer = require('../utiles/bufferConstants')
// const fs = require('fs')

// const buf = new Buffer.from(jsonBuffer.data, 'base64')
// // console.log(buf);
// fs.writeFile("pic3.gif", buf, (err) => {
//     if (err) console.log(err);
//     console.log(' The file was created! ')
// })
// let base64String = btoa(String.fromCharCode(...new Uint8Array(byteArray)));
// document.getElementById('yourImg').src = `data:image/jpeg;base64,${base64String}`;

const ITEM_SIZE = 32;
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
// async function savePreparedItemsToJSON(charName) {
//     try {
//         const pool = await poolPromise
//         const request = pool.request()
//         const result = await request
//             .input('name', sql.VarChar(10), charName)
//             .query('SELECT Inventory FROM dbo.Character WHERE Name = @name');

//         if (!result.recordset.length) {
//             console.log("Персонаж не найден");
//             return;
//         }

//         const itemBuf = result.recordset[0].Inventory; 
//         const ITEM_SIZE = 32; // Размер предмета 32 байта для вашей сборки
//         const rewardTemplates = [];

//         // Начинаем с 384 байта, чтобы пропустить 12 слотов надетой экипировки
//         for (let i = 384; i < itemBuf.length; i += ITEM_SIZE) {
//             const singleItemBuf = itemBuf.slice(i, i + ITEM_SIZE);
            
//             // Защита от выхода за пределы буфера инвентаря
//             if (singleItemBuf.length < ITEM_SIZE) {
//                 continue; 
//             }

//             // ОГРАНИЧЕНИЕ: Если первые байты равны 0xFF, то слот пустой — пропускаем его
//             if (singleItemBuf[0] === 0xFF && singleItemBuf[1] === 0xFF) {
//                 continue; 
//             }

//             const fullHex = singleItemBuf.toString('hex').toUpperCase();
//             const decoded = decodeIGCNItem(singleItemBuf); 

//             // Считаем индекс слота относительно начала сумки
//             const relativeSlotIndex = (i - 384) / ITEM_SIZE;

//             // Обнуляем серийник (начиная с 16-го байта, то есть с 32-го hex-символа на длину 8 символов)
//             const hexTemplate = fullHex.substring(0, 32) + "00000000" + fullHex.substring(40);

//             rewardTemplates.push({
//                 name: itemsList[`${decoded.cat}_${decoded.id}`].Name,
//                 cat: decoded.cat,
//                 id: decoded.id,
//                 fullId: decoded.fullId,
//                 level: decoded.level,
//                 hexTemplate: hexTemplate
//             });
//         }

//         const outputPath = path.join(__dirname, '../reward_templates_res.json');
//         fs.writeFileSync(outputPath, JSON.stringify(rewardTemplates, null, 4), 'utf-8');
        
//         console.log(`\n🎉 Успех! Экспортировано РЕАЛЬНЫХ предметов из сумки: ${rewardTemplates.length}`);
//         console.log(`💾 Файл сохранен в: ${outputPath}\n`);

//     } catch (err) {
//         console.error("Произошла ошибка при экспорте:", err);
//     }
// }

// // Запустите функцию, передав имя персонажа, на которого вы надели/положили призовые шмотки
// savePreparedItemsToJSON('Weapon');

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

    for (let i = 0; i < buffer.length / ITEM_SIZE; i++) {
        const item = buffer.subarray(i * ITEM_SIZE, (i + 1) * ITEM_SIZE);
        // если первый байт 0xFF, значит слот пуст
        // if (item[0] === 0xFF) continue;
        if (item[0] === 0xFF && i < 12) {
            inventory.push({
            slot: i,
            cat: null
        })
        }
        else if (i < 12) {
            inventory.push({
                slot: i,
                ...decodeIGCNItem(item)
            })

        }
    }
    return inventory;
}
function parseInventoryItems(rawData) {
    if (!rawData) return [];
    const buffer = Buffer.isBuffer(rawData) ? rawData : Buffer.from(rawData.replace('0x', ''), 'hex');
    const inventory = [];

    for (let i = 0; i < buffer.length / ITEM_SIZE; i++) {
        const item = buffer.subarray(i * ITEM_SIZE, (i + 1) * ITEM_SIZE);
        // если первый байт 0xFF, значит слот пуст
        // if (item[0] === 0xFF) continue;
        if (item[0] === 0xFF && i < 12) {
            inventory.push({
            slot: i,
            cat: null
        })
        }
        else if (i > 12) {
            inventory.push({
                slot: i,
                ...decodeIGCNItem(item)
            })

        }
    }
    return inventory;
}
function decodeIGCNItem(buf) {
    // Базовый ID и Группа (Category)
    const itemCategory = (buf[9] >> 4) & 0x0F;
    let itemIndex = buf[0];
    let hotByte = buf;
    console.log(hotByte);
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
    const serial = buf.readUInt32LE(16)
    // const serial = buf.readUInt32LE(16);
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
        hex: buf.toString('hex')
    }
}



class CharacterController {
    async getOneCharacter(req, res) {
        const {id} = req.params
        console.log(req.params);
        console.log(id)
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('name', sql.VarChar(10), id)
        .query('SELECT name as cName, cLevel, mLevel, class as cClass, str as cStr, agi as cAgi, vit as cVit, ene as cEne, cmd as cCmd, cZen, mapNumber, posX as mapX, posY as mapY, reset as cReset, gReset as cGrandReset, online, charGuild FROM dbo.vwCharacters c WHERE c.name = @name')
        // .query('SELECT Name as cName, Class as cClass, cLevel, mLevel, RESETS as cReset, GRANDRESET as cGrandreset, Strength as cStr, Dexterity as cAgi, Vitality as cVit, Energy as cEne, Leadership as cCmd, MapNumber as mapNumber, MapPosX as mapPosX, MapPosY as mapPosY FROM dbo.Character WHERE Name = @name')
        console.log(data.recordset[0]);
        return res.json(data.recordset[0])
    }
    async getCharInventory(req, res) {
        const {id} = req.params
        // console.log(` params: ${req.params}`);
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('name', sql.VarChar(10), id)
        // .query('SELECT name as cName, cLevel, mLevel, class as cClass, str as cStr, agi as cAgi, vit as cVit, ene as cEne, cmd as cCmd, cZen, mapNumber, posX as mapX, posY as mapY, reset as cReset, gReset as cGrandReset, online, charGuild FROM dbo.vwCharacters c WHERE c.name = @name')
        // .query('SELECT Name as cName, Class as cClass, cLevel, mLevel, RESETS as cReset, GRANDRESET as cGrandreset, Strength as cStr, Dexterity as cAgi, Vitality as cVit, Energy as cEne, Leadership as cCmd, MapNumber as mapNumber, MapPosX as mapPosX, MapPosY as mapPosY FROM dbo.Character WHERE Name = @name')
        .query('SELECT Inventory as cInvent FROM dbo.Character WHERE Name = @name')
        // console.log(data.recordset[0].cInvent);
        const itemBuf = data.recordset[0].cInvent;
        const inv = parseInventory(itemBuf);
        // console.log(inv);
        return res.json(inv)
        // console.log(itemBuf.toString('hex'));
        // return res.json(data.recordset[0])
    }
    // async getAccountCharacters(req, res) {
    //     const {token} = req.params
    //     const decoded = jwt.verify(token, process.env.SECRET_KEY)
    //     console.log(decoded)
    //     const pool = await poolPromise
    //     const request = pool.request()   
    //     const data = await request
    //     .input('id', sql.VarChar(10), decoded.login)
    //     .query('SELECT AccountID as accID, Name as name, cLevel, mLevel, Class as class, Strength as str, Dexterity as agi, Vitality as vit, Energy as ene, Leadership as cmd, Money as zen, MapNumber as map, MapPosX as mapX, MapPosY as mapY, RESETS as reset, GRANDRESET as grandReset FROM dbo.Character c WHERE c.AccountID = @id')
    //     return res.json(data.recordset)
    // }
    async getCharacter(req, res) {
        const pool = await poolPromise
        const request = pool.request()
        // const data = await request.query('SELECT * FROM dbo.vwCharacters')
        const data = await request.query('SELECT TOP 100 * FROM dbo.vwCharacters')
        return res.json(data.recordset)
    }
    async getTop5Character(req, res) {
        const pool = await poolPromise
        const request = pool.request()
        const data = await request.query('SELECT TOP 5 id, name, reset, gReset, cLevel, mLevel FROM dbo.vwCharacters')
        return res.json(data.recordset)
    }
    async getSortedCharacter(req, res) {
        console.log(req.query);
        let charClass = {}
        if(req.query.class == 'DW'){
            charClass.classID1 = 0
            charClass.classID2 = 1
            charClass.classID3 = 2
        }
        if(req.query.class == 'DK'){
            charClass.classID1 = 16
            charClass.classID2 = 17
            charClass.classID3 = 18
        }
        if(req.query.class == 'FE'){
            charClass.classID1 = 32
            charClass.classID2 = 33
            charClass.classID3 = 34
        }
        if(req.query.class == 'Summ'){
            charClass.classID1 = 80
            charClass.classID2 = 81
            charClass.classID3 = 82
        }
        if(req.query.class == 'MG'){
            charClass.classID1 = 48
            charClass.classID2 = 50
            charClass.classID3 = null
        }
        if(req.query.class == 'DL'){
            charClass.classID1 = 64
            charClass.classID2 = 66
            charClass.classID3 = null
        }
        if(req.query.class == 'RF'){
            charClass.classID1 = 96
            charClass.classID2 = 98
            charClass.classID3 = null
        }
        console.log(charClass);
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('charClass1', sql.TinyInt(), charClass.classID1)
        .input('charClass2', sql.TinyInt(), charClass.classID2)
        .input('charClass3', sql.TinyInt(), charClass.classID3)
        .query('SELECT * FROM dbo.vwCharacters vwC WHERE vwC.class = @charClass1 OR vwC.class = @charClass2 OR vwC.class = @charClass3')
        return res.json(data.recordset)
    }
    async getGuildsInfo(req, res) {
        const pool = await poolPromise
        const request = pool.request()
        const data = await request.query('SELECT G_Name, G_Mark, G_Master, G_Count FROM dbo.Guild')
        console.log(data.recordset)
        return res.json(data.recordset)
    }
    async createCharacter(req, res) {
        const { AccountID, Name, cLevel, LevelUpPoint, Class, Experience, Strength, Dexterity, Vitality, Energy, Life, MaxLife, Mana, MaxMana, MapNumber, MapPosX, MapPosY, MapDir, PkCount, PkLevel, PkTime } = req.body
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('AccountID', sql.VarChar(10), AccountID)
        .input('Name', sql.VarChar(10), Name)
        .input('cLevel', sql.Int, cLevel)
        .input('LevelUpPoint', sql.Int, LevelUpPoint)
        .input('Class', sql.TinyInt, Class)
        .input('Experience', sql.BigInt, Experience)
        .input('Strength', sql.Int, Strength)
        .input('Dexterity', sql.Int, Dexterity)
        .input('Vitality', sql.Int, Vitality)
        .input('Energy', sql.Int, Energy)
        // .input('MagicList', sql.VarBinary(450), buf)
        .input('Life', sql.Real, Life)
        .input('MaxLife', sql.Real, MaxLife)
        .input('Mana', sql.Real, Mana)
        .input('MaxMana', sql.Real, MaxMana)
        .input('MapNumber', sql.SmallInt, MapNumber)
        .input('MapPosX', sql.SmallInt, MapPosX)
        .input('MapPosY', sql.SmallInt, MapPosY)
        .input('MapDir', sql.TinyInt, MapDir)
        .input('PkCount', sql.Int, PkCount)
        .input('PkLevel', sql.Int, PkLevel)
        .input('PkTime', sql.Int, PkTime)
        .query('INSERT INTO dbo.Character (AccountID, Name, cLevel, LevelUpPoint, Class, Experience, Strength, Dexterity, Vitality, Energy, Life, MaxLife, Mana, MaxMana, MapNumber, MapPosX, MapPosY, MapDir, PkCount, PkLevel, PkTime) VALUES (@AccountID, @Name, @cLevel, @LevelUpPoint, @Class, @Experience, @Strength, @Dexterity, @Vitality, @Energy, @Life, @MaxLife, @Mana, @MaxMana, @MapNumber, @MapPosX, @MapPosY, @MapDir, @PkCount, @PkLevel, @PkTime)')
        return res.json(data.recordset)
    }
    // async getDefaultClass(req, res) {
    //     const { accId, name, level, leveluppoint, classnum, experience, strength, dexterity, vitality, energy, life, maxlife, mana, maxmana, mapmumber, mapposX, mapposY, mapdir, pkcount, pklevel, pktime } = req.body
    //     const pool = await poolPromise
    //     const request = pool.request()
    //     const data = await request
    //     .query('INSERT INTO dbo.Character (AccountID, Name, cLevel, LevelUpPoint, Class, Experience, Strength, Dexterity, Vitality, Energy, Life, MaxLife, Mana, MaxMana, MapNumber, MapPosX, MapPosY, MapDir, PkCount, PkLevel, PkTime) VALUES ('+ `${accId}, ${name}, ${level}, ${leveluppoint}, ${classnum}, ${experience}, ${strength}, ${dexterity}, ${vitality}, ${energy}, ${life}, ${maxlife}, ${mana}, ${maxmana}, ${mapmumber}, ${mapposX}, ${mapposY}, ${mapdir}, ${pkcount}, ${pklevel}, ${pktime}`+')')
    //     return res.json(data.recordset)
    // }
    // async createAcc(req, res) {
    //     const pool = await poolPromise
    //     const request = pool.request()
    //     const acc = await request
    //         .input('accountid', sql.VarChar(10), "dream")
    //         .input('pass', sql.VarChar(10), "1322009")
    //         .input('mail_addr', sql.VarChar(50), "nickandrianov132@gmail.com")
    //         .input('personalid', sql.VarChar(13), "1234567890")
    //         .execute('dbo.MD5CREATEACC')
    //     return res.json(acc)
    // }
}

module.exports = new CharacterController()