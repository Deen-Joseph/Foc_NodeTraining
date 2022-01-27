const express = require("express")
const app = express()

app.get('/', function (req, res) {
    console.log("hope")
    res.send('Hello World!')
  })


  app.get('/player/:kitno/goals/:goals', function (req, res) {
    console.log("params")
    res.send(req.params)
  })


  app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })
  app.listen(3000)