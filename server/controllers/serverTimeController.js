
class serverTimeController {
    async getDate(req, res) {
        const date = new Date()
        console.log(date)
        return res.json(date)
    }
}

module.exports = new serverTimeController()