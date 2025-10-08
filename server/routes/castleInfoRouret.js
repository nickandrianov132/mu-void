const Router = require('express')
const castleInfoController = require('../controllers/castleInfoController')
const router = new Router()


router.get('/', castleInfoController.getCastleInfo)


module.exports = router
