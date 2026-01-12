const { poolPromise } = require('../db')
const sql = require('mssql')

class fakeCharLvlController{
    async charLevelUp(cNames){
        console.log(typeof cNames);
    
        if(cNames.length != 0) {
            cNames.forEach(async (e) => {
                    const pool = await poolPromise
                    const request = pool.request()
                    const charLvl = await request
                    .input('cName', sql.VarChar(10), e)
                    .execute('dbo.Add_level')
                    // console.log(charLvl.recordset);
                    // return res.json(voteMMOTOP.recordset[0].RESULT)
            })
        }
        else {
            return "No Accounts Voted!"
        }
    }

}

module.exports = new fakeCharLvlController()