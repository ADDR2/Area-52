var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var base64 = require('node-base64-image');
var fs = require('file-system');

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/UploadImage', upload.array(), function(req, res) {
  console.log("Received");
  var base64Data = req.body.Data.replace(/^data:image\/jpg;base64,/, "");
  binaryData = new Buffer(base64Data, 'base64').toString('binary');

  require("fs").writeFile('Image.jpg', binaryData, 'binary', function(ferr) {
      if (ferr) {
          console.log("Error saving file in server, error: " + ferr);
          res.send({
              status: 501,
              result: 'Error saving file in server, error: ' + ferr
          });
      } else {
          res.send({
              status: 201
          });
      }
  });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
