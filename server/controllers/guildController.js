const { poolPromise } = require('../db')
const sql = require('mssql')
// const jsonBuffer = require('../utiles/bufferConstants')
const fs = require('fs')

// const buf = new Buffer.from(jsonBuffer.data, 'base64')
// console.log(buf);
// fs.writeFile("pic3.gif", buf, (err) => {
//     if (err) console.log(err);
//     console.log(' The file was created! ')
// })

class GuildController {
    async getGuildsInfo(req, res) {
        const pool = await poolPromise
        const request = pool.request()
        const data = await request.query('SELECT G_Name, G_Mark, G_Master, G_Count FROM dbo.Guild')
        const buf = new Buffer.from(data.recordset[0].G_Mark.toString('utf8'))
        const decodedImg = new Buffer.from(buf, 'base64')
        // console.log(buf);
        fs.writeFile("pic4.bmp", decodedImg, (err) => {
            if (err) console.log(err);
            console.log(' The file was created! ')
        })
        console.log(data.recordset[0].G_Mark)
        return res.json(data.recordset[0].G_Mark)
    }
}

module.exports = new GuildController()