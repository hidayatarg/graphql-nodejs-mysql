const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '192.168.1.40',
        port: 3306,
        user: 'user',
        password: 'user',
        database: 'mydb'
    }
});

module.exports = { knex };