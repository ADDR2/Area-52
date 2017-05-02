var app, bodyParser, connection, db_config, express, handleDisconnect, multer, mysql, upload;

express = require('express');

app = express();

bodyParser = require('body-parser');

multer = require('multer');

upload = multer();

mysql = require('mysql');

db_config = {
  host: 'localhost',
  user: 'max',
  password: 'root',
  database: 'ExpressTest'
};

connection = null;

handleDisconnect = function() {
  connection = mysql.createConnection(db_config);
  connection.connect(function(err) {
    if (err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    } else {
      console.log("You are now connected...");
    }
    return true;
  });
  connection.on('error', function(err) {
    console.log('db error', err);
    handleDisconnect();
    return true;
  });
  return true;
};

handleDisconnect();

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));

app.get('/User/listAll', upload.array(), function(req, res) {
  connection.query("SELECT * FROM User ORDER BY Name asc", function(err, rows, fields) {
    if (err) {
      console.log(err);
      return res.send({
        status: 500,
        result: 'Error executing query, error: ' + err
      });
    } else if (rows.length > 0) {
      return res.send({
        status: 200,
        result: rows
      });
    } else {
      return res.send({
        status: 203,
        result: 'No users in database'
      });
    }
  });
  return true;
});

app.listen(3000, function() {
  return console.log('Example app listening on port 3000!');
});
