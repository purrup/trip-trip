// 載入套件及初始設定
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const dbpath = process.env.MONGODB_URI || 'mongodb://localhost/trip-planer'
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const passport = require('./config/passport')
// 跟 mongodb 連線
mongoose.connect(dbpath, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const db = mongoose.connection

// 使用設定
// const whitelist = ['https://triptrip-backend.herokuapp.com', 'https://trip-trip.herokuapp.com']

const corsOptions = {
  // origin: function (origin, callback) {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // },
  origin: [
    'http://localhost:8080',
    'http://localhost:3000',
    'https://triptrip-backend.herokuapp.com',
    'https://trip-trip.herokuapp.com'
  ],
  credentials: true,
  maxAge: 1728000
}
app.use(cors(corsOptions))
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cookieParser())
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://trip-trip.herokuapp.com')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

db.on('error', () => {
  console.log('failed to connect to mongodb!')
})

db.once('open', () => {
  console.log('successfully connected to mongodb!')
})

app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`)
})
