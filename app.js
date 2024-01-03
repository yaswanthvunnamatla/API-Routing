const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/about', (req, res) => {
  res.send('About Page')
})
module.exports = app
