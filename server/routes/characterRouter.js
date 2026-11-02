const Router = require('express')
const characterController = require('../controllers/characterController')
const router = new Router()

// const dk = require('../utiles/defaultClass')
// const invent = characterController.getCharInventory()
// console.log(invent);
router.get('/', characterController.getCharacter)
router.get('/sorted', characterController.getSortedCharacter)
router.get('/top3', characterController.getTop5Character)
router.get('/resets', async (req, res) => {
    try {
        const charName = req.query.name; // Получаем имя из ?name=...

        if (!charName) {
            return res.status(400).send("0");
        }

        console.log(`[DLL] Запрос ресетов для персонажа: ${charName}`);

        // Тут ваш существующий код запроса к базе данных Mu Online, например:
        // const character = await db.query('SELECT Resets FROM Character WHERE Name = ?', [charName]);
        // const resets = character.Resets;
        
        const resets = 15; // Временная заглушка для теста

        // DLL принимает только чистый текст/строку с числом
        res.send(resets.toString()); 
    } catch (error) {
        console.error(error);
        res.status(500).send("0");
    }
});
router.get('/:id', characterController.getOneCharacter)
router.get('/inventory/:id', characterController.getCharInventory)
router.post('/createCharacter', characterController.createCharacter)



module.exports = router

// std::string url = "http://127.0.0.1:7000/api/character/ + charName;