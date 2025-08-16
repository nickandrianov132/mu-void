const { poolPromise } = require('../db')


class OnlineController {
    async getOnline(req, res) {
        const pool = await poolPromise
        const request = pool.request()
        const data = await request.query('select COUNT(ConnectStat)as online from dbo.MEMB_STAT m where m.ConnectStat = 1')
        const online = data.recordset[0]
        console.log(data)
        return res.json(online)
    }
}

module.exports = new OnlineController()