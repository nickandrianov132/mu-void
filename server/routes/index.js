const Router = require('express')
const router = new Router()
const characterRouter = require('./characterRouter')
const userRouter = require('./userRouter')
const onlineRouter = require('./onlineRouter')
const guildRouter = require('./guildRouter')
const serverTimeRouter = require('./serverTimeRouter')
const castleInfoRouter = require('./castleInfoRouret')

router.use('/character', characterRouter)
router.use('/guild', guildRouter)
router.use('/servertime', serverTimeRouter)
router.use('/user', userRouter)
router.use('/online', onlineRouter)
router.use('/castle', castleInfoRouter)

module.exports = router