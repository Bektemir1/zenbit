const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'your-username',
    password: 'your-password',
    database: 'your database'
})