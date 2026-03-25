
class serverTimeController {
    async getDate(req, res) {
        const date = new Date()
        return res.json(date)
    }
}

module.exports = new serverTimeController()