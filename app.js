const app = require('./server')

app.use('/', require('./src/routes/joyasRoutes'))

module.exports = app