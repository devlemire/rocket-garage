require('dotenv').config()
const {
  SERVER_PORT,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  SESSION_SECRET,
  REDIS_HOST,
  REDIS_PORT
} = process.env
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const redis = require('redis')
const RedisStore = require('connect-redis')(session)

const app = express()
app.use(bodyParser.json())

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, expires: 1000 * 60 * 60 * 24 }, // This equals one day
    store: new RedisStore({ host: REDIS_HOST, port: REDIS_PORT })
  })
)

// Auth Routes
app.use('/api/auth', require('./routes/auth-router'))

// Serve Front-end Files
app.use(express.static(`${__dirname}/public/build`))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/public/build/index.html`))
})

function startServer() {
  massive({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    ssl: false,
    poolSize: 10
  })
    .then(instance => {
      console.log('Massive ORM successfully connected to DB.')
      app.set('db', instance)
      app.listen(SERVER_PORT || 3001, () =>
        console.log(`Server listening on port ${SERVER_PORT || 3001}`)
      )
    })
    .catch(err => {
      console.error('Massive ORM could not connect to the DB:', err)
    })
}

startServer()

module.exports = startServer
