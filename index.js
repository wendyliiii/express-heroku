const express = require('express')
const app = express()
//const router =  = express.Router();

const port = process.env.PORT || 3000

app.get('/', function(req, res) {
//    res.json({ "name": "李涵寧",
//  "email": "hanning@raphael.clinic" });
    res.send('test');
});

//app.use('/homework', router);
//module.exports = router;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
