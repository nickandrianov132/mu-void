const Router = require('express')
const router = new Router()
const serverTimeController = require('../controllers/serverTimeController')

router.get('/', serverTimeController.getDate)


module.exports = router
