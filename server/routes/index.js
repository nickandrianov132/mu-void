const Router = require('express')
const router = new Router()
const characterRouter = require('./characterRouter')
const userRouter = require('./userRouter')
const onlineRouter = require('./onlineRouter')

router.use('/character', characterRouter)
router.use('/user', userRouter)
router.use('/online', onlineRouter)

module.exports = router