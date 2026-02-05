const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
// const { testGetOrder } = require('../controllers/paypalController')


router.post('/registration', userController.createAccount)
router.post('/regainquestion', userController.regainAccountQuestion)
router.post('/regainanswer', userController.regainAccountAnswer)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/auth/accountcharacters', authMiddleware, userController.getAccountCharacters)
router.get('/auth/accountinfo', authMiddleware, userController.getAccountInfo)
router.post('/auth/accountcharacters/reset', authMiddleware, userController.makeAccountCharacterReset)
router.post('/auth/accountcharacters/grandreset', authMiddleware, userController.makeAccountCharacterGrandReset)
router.get('/voteTOPG', userController.userVoteTOPG)
router.get('/voteExtremetop100', userController.userVoteExtremetop100)
router.get('/voteTop100arena', userController.userVoteTop100arena)
router.get('/voteArenaTop100', userController.userVoteArenaTop100)
router.post('/voteMUOGG', userController.userVoteMUOGG)
// router.get('/voteGamesTop100', userController.userVoteGamesTop100)
router.post('/buyVip', userController.buyVip)
router.post('/cryptocloud-insert-invoice', userController.insertCryptoInvoice)
router.post('/cryptocloud-callback', userController.cryptoCloudPayment)
// router.post('/paypal-orders', testGetOrder)
// router.post('/paypal-orders/:orderID/capture')



module.exports = router
