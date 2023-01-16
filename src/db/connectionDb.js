require('dotenv').config()

const { Pool } = require('pg')
const format = require('pg-format')

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 5432,
    allowExitOnIdle: true
}

)
module.exports = { pool, format }