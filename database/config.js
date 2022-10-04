const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'arya_backend_2',
    port: 5432,
    password: 'terserah'
})

module.exports = databaseConfig