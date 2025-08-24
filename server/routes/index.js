const Router = require('express')
const router = new Router()
const characterRouter = require('./characterRouter')
const userRouter = require('./userRouter')
const onlineRouter = require('./onlineRouter')
const guildRouter = require('./guildRouter')

router.use('/character', characterRouter)
router.use('/guild', guildRouter)
router.use('/user', userRouter)
router.use('/online', onlineRouter)

module.exports = router