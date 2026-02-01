const jwt = require('jsonwebtoken')

module.exports = async function(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({message: "Access Denied"})
    jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
        if (err) {
            console.log(err)
            return res.status(403).json({message: "Access Denied"})
        }else {
            req.user = user
        }
    })
    next();
}