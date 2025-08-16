const Router = require('express')
const router = new Router()
const onlineController = require('../controllers/onlineController')

router.get('/', onlineController.getOnline)


module.exports = router
