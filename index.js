const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('{
  "name": "李涵寧",
  "email": "hanning@raphael.clinic"
}')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
