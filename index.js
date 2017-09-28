const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/homework', function(req, res) {
    res.json({ "name": "李涵寧",
   "email": "hanning@raphael.clinic" });
});
app.get('/', function(req, res) {
   res.send('index!');
});

// Express 4 方法
// app.get('/', function(req, res) {
//   res.send('home page!');
// });
// var router =  = express.Router();

// router.get('/homework', function(req, res) {
//    res.json({ "name": "李涵寧",
//   "email": "hanning@raphael.clinic" });
// });
// app.use('/', router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
