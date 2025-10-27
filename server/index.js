require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const errorHandlerMiddleware = require('./middleware/ErrorHandlingMiddleware')
const mmotopVoteController = require('./controllers/mmotopVoteController')


const PORT = process.env.PORT || 7000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


/// Обработка ошибок, последний Middleware:
app.use(errorHandlerMiddleware)

// mmotopVoteController.mmotopFetch()
// setInterval( () => {
//     mmotopVoteController.mmotopFetch()
// }, 1200000)
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()











// app.get('/', async (req,res) => {
//     try {
//         const pool = await sql.connect(config);
//         // const data = pool.request().query('INSERT INTO dbo.Character (AccountID, Name, ChatLimitTime, RESETS, mLevel, mlPoint, mlExperience, mlNextExp, InventoryExpansion, WinDuels, LoseDuels, PenaltyMask, BlockChatTime, FruitAddPoint, FruitSubPoint, QuestIndex, QuestState, QuestVar, QuestStat, GiftItem, CustomQuestOn, GRANDRESET, GRBonusSTR, GRBonusAGI, GRBonusVIT, GRBonusENE, GRBonusCMD, AutoReset) VALUES (132, 55522, 0, 5, 200, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 )');
//         const data = pool.request().query('SELECT * FROM dbo.Character');
//         data.then(res1 => {
//             return res.json(res1.recordsets[0]);
//         })
        
//     } catch (e) {
//         console.log(e);
//     }
// })
// const start = async () => {
//     try {
//         await sequelize.authenticate()
//         await sequelize.sync()

//         app.listen(PORT, () => {
//             console.log(`Server started on port ${PORT}`)
//         }) 
//     } catch (e) {
//         console.log(e)
//     }
// }

// start()