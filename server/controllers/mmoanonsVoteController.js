const { poolPromise } = require('../db')
const sql = require('mssql')

async function mmoanonsAddCoin(arr){
    console.log(`arr: ${arr}`);
    const d = new Date()
    if(arr.length > 0) {
        arr.forEach(async (e) => {
                const pool = await poolPromise
                const request = pool.request()
                const voteMMOANONS = await request
                .input('id', sql.VarChar(30), toString(e.id))
                .input('accLogin', sql.VarChar(10), e.nickname)
                .input('ip', sql.VarChar(30), e.ip)
                .input('voteDate', sql.SmallDateTime(), d)
                .execute('dbo.add_mmoanons_vote')
                console.log(voteMMOANONS.recordset[0].RESULT);
                // return res.json(voteMMOTOP.recordset[0].RESULT)
        })
    }
    else {
        return "No Accounts Voted!"
    }
}


class mmoanonsVoteController {
async mmoanonsFetch() {
    // let mmoanonsData = await fetch('https://cdn.mmoanons.com/votes/01k8c4hsjxc9s0d5pc5sdjakjp.json')
    let mmoanonsData = await fetch('https://cdn.mmoanons.com/votes/01k99m098y53amgmewxn38rbma.json')
    .then(res => res.json())
    .then(resJSON => {
        for(let objKey in resJSON) {
            if(objKey.split('.').reverse().join("-") == new Date().toISOString().slice(0, 10)){
                return resJSON[objKey]
            }
        }
    })
    .catch(er => er)

    console.log(mmoanonsData)
    await mmoanonsAddCoin(mmoanonsData)
    // return mmoanonsData
} 

}
module.exports = new mmoanonsVoteController()