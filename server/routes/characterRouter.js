const Router = require('express')
const characterController = require('../controllers/characterController')
const router = new Router()

// const dk = require('../utiles/defaultClass')

router.get('/', characterController.getCharacter)
router.get('/sorted', characterController.getSortedCharacter)
router.get('/top3', characterController.getTop5Character)
router.get('/:id', characterController.getOneCharacter)
router.post('/createCharacter', characterController.createCharacter)



module.exports = router