const { poolPromise } = require('../db')
const sql = require('mssql')

async function mmotopAddCoin(arr){
    console.log(`arr: ${arr}`);
    const d = new Date()
    arr.forEach(async (e) => {
            if(e.voteCount == 1) {
            const pool = await poolPromise
            const request = pool.request()
            const voteMMOTOP = await request
            .input('id', sql.VarChar(30), e.id)
            .input('accLogin', sql.VarChar(10), e.login)
            .input('ip', sql.VarChar(30), e.ip)
            .input('voteDate', sql.SmallDateTime(), d)
            .input('voteCount', sql.SmallInt(), e.voteCount)
            .execute('dbo.add_mmotop_vote')
            console.log(voteMMOTOP.recordset[0].RESULT);
            // return res.json(voteMMOTOP.recordset[0].RESULT)
        } else {
            return next(ApiError.internal("Something went wrong..."))
        }
    })
}
class mmotopVoteController {
async mmotopFetch() {
    let mmotopData = await fetch('https://mmotop.ru/votes/0d25e6ddbe1fbad184c1a809bada8f12bd0c6250.txt')
    .then(res => res.text())
    .then(text => text.split(new RegExp("\\\n")))
    .then(arrText => arrText.map(e => e.split(new RegExp("\\\t"))))
    .then(textArr => textArr.map(e => e.reduce((obj, el, i) => {
    if(el.length > 0){
        if(i == 0){
            obj.id = el
        }
        if(i == 1){
            obj.dateTime = el
        }
        if(i == 2){
            obj.ip = el
        }
        if(i == 3){
            obj.login = el
        }
        if(i == 4) {
            obj.voteCount = el
        }
    }
    return obj
},{id: null, dateTime: null, ip: null, login: null, voteCount: null})))
.then(objArr => objArr.filter(e => e.dateTime != null))
.then(filtredArr => filtredArr.filter(e => (new Date().toDateString()) === (new Date(e.dateTime.slice(0,10).split('.')[2], e.dateTime.slice(0,10).split('.')[1] - 1, e.dateTime.slice(0,10).split('.')[0]).toDateString())))
// .then(accVoteArr => accVoteArr.forEach( async (e) => {
//             if(e.voteCount == 1) {
//             const pool = await poolPromise
//             const request = pool.request()
//             const voteMMOTOP = await request
//             .input('@login', sql.VarChar(10), e.login)
//             .execute('dbo.addCoin_mmotop')
//             console.log(voteMMOTOP.recordset[0].RESULT);
//             return res.json(voteMMOTOP.recordset[0].RESULT)
//         } else {
//             return next(ApiError.internal("Something went wrong..."))
//         }
//     }))
    console.log(mmotopData);
    console.log(mmotopData.length);
    await mmotopAddCoin(mmotopData)
    // mmotopData.forEach( async (e) => {
    //         if(e.voteCount == 1) {
    //         const pool = await poolPromise
    //         const request = pool.request()
    //         const voteMMOTOP = await request
    //         .input('AccountID', sql.VarChar(10), e.login)
    //         .execute('dbo.addCoin_mmotop')
    //         console.log(voteMMOTOP.recordset[0].RESULT);
    //         return res.json(voteMMOTOP.recordset[0].RESULT)
    //     } else {
    //         return next(ApiError.internal("Something went wrong..."))
    //     }
    // })
    // return mmotopData
} 

}
module.exports = new mmotopVoteController()