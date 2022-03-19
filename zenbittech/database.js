const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'bektemir',
    password: 'bektemir98',
    database: 'messages'
})