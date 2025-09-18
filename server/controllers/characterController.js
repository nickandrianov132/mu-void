const { poolPromise } = require('../db')
const sql = require('mssql')
const jwt = require('jsonwebtoken')
// const jsonBuffer = require('../utiles/bufferConstants')
// const fs = require('fs')

// const buf = new Buffer.from(jsonBuffer.data, 'base64')
// console.log(buf);
// fs.writeFile("pic3.gif", buf, (err) => {
//     if (err) console.log(err);
//     console.log(' The file was created! ')
// })

class CharacterController {
    async getOneCharacter(req, res) {
        const {id} = req.params
        console.log(req.params);
        console.log(id)
        const pool = await poolPromise
        const request = pool.request()
        const data = await request
        .input('name', sql.VarChar(10), id)
        .query('SELECT name as cName, cLevel, mLevel, class as cClass, str as cStr, agi as cAgi, vit as cVit, ene as cEne, cmd as cCmd, cZen, mapNumber, posX as mapX, posY as mapY, reset as cReset, gReset as cGrandReset, online FROM dbo.vwCharacters c WHERE c.name = @name')
        // .query('SELECT Name as cName, Class as cClass, cLevel, mLevel, RESETS as cReset, GRANDRESET as cGrandreset, Strength as cStr, Dexterity as cAgi, Vitality as cVit, Energy as cEne, Leadership as cCmd, MapNumber as mapNumber, MapPosX as mapPosX, MapPosY as mapPosY FROM dbo.Character WHERE Name = @name')
        console.log(data.recordset[0]);
        return res.json(data.recordset[0])
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
        const data = await request.query('SELECT * FROM dbo.vwCharacters')
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