const config = require('./dbconfig')
const sql = require('mssql')

const poolPromise = new sql.connect(config).then(pool => {
    console.log('Connected to MSSQL Server DB')
    return pool
}).catch(err => console.log('Database Connection Failed!:', err))


module.exports = {
    sql, poolPromise
}








// async function sql() {
//     try {
//         let pool = await mssql.connect(config);
//         return pool
//     } catch (e) {
//         console.log(e)
//     }
// }

// module.exports = sql;

// async function getCharacters(){
//     try {
//         let pool = await mssql.connect(config);
//         // const data = pool.request().query('INSERT INTO dbo.Character (AccountID, Name, ChatLimitTime, RESETS, mLevel, mlPoint, mlExperience, mlNextExp, InventoryExpansion, WinDuels, LoseDuels, PenaltyMask, BlockChatTime, FruitAddPoint, FruitSubPoint, QuestIndex, QuestState, QuestVar, QuestStat, GiftItem, CustomQuestOn, GRANDRESET, GRBonusSTR, GRBonusAGI, GRBonusVIT, GRBonusENE, GRBonusCMD, AutoReset) VALUES (132, 55522, 0, 5, 200, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 )');
//         let characters = await pool.request().query('SELECT * FROM dbo.Character');
//         return characters.recordsets
//         // characters.then(res => {
//         //     return res.json(res.recordsets[0]);
//         // })
        
//     } catch (e) {
//         console.log(e);
//     }
// }

// module.exports = {
//     getCharacters: getCharacters,
// }

// module.exports = new Sequelize({
//     dialect: MsSqlDialect,
//     server: 'LAPTOP-BO7FP0TD',
//     port: 1433,
//     database: 'MuOnline',
//     encrypt: false,
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'muemu',
//             password: '1322009',
//             trustServerCertificate: true,
//             trustedConnection: false,
//             enableArithAbort: true,
//             instancename: 'SQLEXPRESS',
//             cryptocredentialsDetails: {
//                 minVersion: 'TLSv1'
//             },
//         },
//     },
// });
// module.exports = new Sequelize('MuOnline', 'muemu', '1322009', {
//     dialect: 'mssql',
//     host: 'LAPTOP-BO7FP0TD',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//     dialectOptions: {
//         options: { encrypt: true }
//     }
// });
// module.exports = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         dialect: 'mssql',
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT
//     }
// )

// export default sequelize;