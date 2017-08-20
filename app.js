const express = require('express')
const path = require('path')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const words = require('./phrases.js')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
  expressSession({
    secret: 'Pizza Party',
    resave: false,
    saveUninitialized: true
  })
)
app.engine('mustache', mustacheExpress())

app.get('/', function(req, res) {
  let word = words.words[Math.floor(Math.random() * words.words.length)]
  console.log(word)
  res.render('index.mustache', words)
})

app.listen(3000, function() {
  console.log('Medium pineapple pizza extra cheese')
})
