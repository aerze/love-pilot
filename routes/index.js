var express = require('express');
var router = express.Router();
var text = require('textbelt');
text.debug(true);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/api', function (req, res, next) {
  console.log(req.body);

  var phone = req.body.phone,
    message = req.body.message,
    opts = {
      fromAddr: 'otto@love-pilot.com',
      fromName: 'love-pilot',
      region: 'us',
      subject: ''
    };

  text.sendText(phone, message, opts, function () {
    res.render('index', { title: 'Love Sent' });
  });





});



module.exports = router;
