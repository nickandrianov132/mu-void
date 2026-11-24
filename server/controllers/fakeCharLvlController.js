const { poolPromise } = require('../db')
const sql = require('mssql')

class fakeCharLvlController{
    async charLevelUp() {
        try {
            const pool = await poolPromise
            const request = pool.request()
            await request.execute('dbo.Add_level')
        } catch (error) {
            console.error('[FakeOnline] Ошибка выполнения dbo.Add_level:', error.message)
        }
    }
}

module.exports = new fakeCharLvlController()