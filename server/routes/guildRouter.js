const Router = require('express')
const guildController = require('../controllers/guildController')
const router = new Router()

// const dk = require('../utiles/defaultClass')

router.get('/', guildController.getGuildsInfo)




module.exports = router