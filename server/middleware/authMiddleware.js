const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer asdaU1wdaWEFEfdsESFE3ASw3F...
        if (!token) {
        //   return  res.status(401).json({message: "Не авторизован"})
          return  next(ApiError.forbidden("Log-in please!"))
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decoded);
        req.user = decoded
        next()
    } catch (e) {
        // next(ApiError.badRequest("Something went wrong..."))
        res.status(401).json({message: "Не авторизован"})
    }
};