const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration', userController.createAccount)
router.post('/regainquestion', userController.regainAccountQuestion)
router.post('/regainanswer', userController.regainAccountAnswer)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/auth/accountcharacters', authMiddleware, userController.getAccountCharacters)
router.get('/auth/accountinfo', authMiddleware, userController.getAccountInfo)
router.post('/auth/accountcharacters/reset', authMiddleware, userController.makeAccountCharacterReset)
router.post('/auth/accountcharacters/grandreset', authMiddleware, userController.makeAccountCharacterGrandReset)
router.post('/voteTOPG', userController.userVoteTOPG)



module.exports = router
