const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.DB_PORT || 3000
// const routes = require('./src/routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use('/', routes)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => console.log(`server is listening to port : ${port}`))