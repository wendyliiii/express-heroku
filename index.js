const express = require('express')
const app = express()
const router =  = express.Router();

const port = process.env.PORT || 3000

// app.get('/homework', function(req, res) {
//     res.json({ "name": "李涵寧",
//   "email": "hanning@raphael.clinic" });
 
// });
router.get('/', function(req, res) {
  res.send('home page!');
});

router.get('/homework', function(req, res) {
   res.json({ "name": "李涵寧",
  "email": "hanning@raphael.clinic" });
});

//app.use('/homework', router);
app.use('/', router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
