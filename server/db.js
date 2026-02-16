const config = require('./dbconfig')
const sql = require('mssql')

const poolPromise = new sql.connect(config).then(pool => {
    console.log('Connected to MSSQL Server DB')
    return pool
}).catch(err => console.log('Database Connection Failed!:', err))


module.exports = {
    sql, poolPromise
}
