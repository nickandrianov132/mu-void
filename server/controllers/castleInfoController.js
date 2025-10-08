const { poolPromise } = require('../db')


class CastleController {
    async getCastleInfo(req, res) {
        const pool = await poolPromise
        const request = pool.request()
        const data = await request.query('SELECT * FROM dbo.vwCastle_info')
        const castleInfo = data.recordset[0]
        console.log(castleInfo)
        return res.json(castleInfo)
    }
}

module.exports = new CastleController()