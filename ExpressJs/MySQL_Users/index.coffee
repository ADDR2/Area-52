express = require 'express'
app = express()
bodyParser = require 'body-parser'
multer = require 'multer'
upload = multer()
mysql = require 'mysql'

db_config =
  host: 'localhost',
  user: 'max',
  password: 'root',
  database: 'ExpressTest'

connection = null

handleDisconnect = ->
  connection = mysql.createConnection db_config
  connection.connect((err) ->

    if err
      console.log 'error when connecting to db:', err
      setTimeout handleDisconnect, 2000
    else
      console.log "You are now connected..."
    true
  )

  connection.on('error', (err) ->
    console.log 'db error', err
    handleDisconnect()
    true
  )

  true

handleDisconnect()

app.use(bodyParser.json(
  limit: '50mb'
))

app.use(bodyParser.urlencoded(
  extended: true,
  limit: '50mb'
))

app.get('/User/listAll', upload.array(), (req, res) ->
  connection.query("SELECT * FROM User ORDER BY Name asc",
  (err, rows, fields) ->
    if err
      console.log err
      res.send(
        status: 500,
        result: 'Error executing query, error: ' + err
      )
    else if rows.length > 0
      res.send(
        status: 200,
        result: rows
      )
    else
      res.send(
        status: 203,
        result: 'No users in database'
      )
  )
  true
)

app.get('/User/:id', upload.array(), (req, res) ->
  connection.query("SELECT * FROM User WHERE Id = ?", [req.params.id],
  (err, rows, fields) ->
    if err
      console.log err
      res.send(
        status: 500,
        result: 'Error executing query, error: ' + err
      )
    else if rows.length > 0
      res.send(
        status: 200,
        result: rows
      )
    else
      res.send(
        status: 203,
        result: 'No user with that Id'
      )
  )
  true
)

app.put('/User/:id', upload.array(), (req, res) ->
  connection.query("UPDATE User SET Name = ?, Last_Name = ? WHERE Id = ?",
  [req.body.name, req.body.lastname, req.params.id],
  (err, rows, fields) ->
    if err
      console.log err
      res.send(
        status: 500,
        result: 'Error executing query, error: ' + err
      )
    else if rows.affectedRows
      res.send(
        status: 200,
        result: rows
      )
    else
      res.send(
        status: 203,
        result: 'No user with that Id'
      )
  )
  true
)

app.post('/User', upload.array(), (req, res) ->
  connection.query("INSERT INTO User (Name, Last_Name) values (?, ?)",
  [req.body.name, req.body.lastname],
  (err, rows, fields) ->
    if err
      console.log err
      res.send(
        status: 500,
        result: 'Error executing query, error: ' + err
      )
    else if rows.affectedRows
      res.send(
        status: 200,
        result: rows
      )
    else
      res.send(
        status: 203,
        result: 'Unexpected error'
      )
  )
  true
)

app.delete('/User/:id', upload.array(), (req, res) ->
  connection.query("DELETE FROM User WHERE Id = ?",
  [req.params.id],
  (err, rows, fields) ->
    if err
      console.log err
      res.send(
        status: 500,
        result: 'Error executing query, error: ' + err
      )
    else if rows.affectedRows
      res.send(
        status: 200,
        result: rows
      )
    else
      res.send(
        status: 203,
        result: 'No user with that Id'
      )
  )
  true
)

app.listen(3000, ->
  console.log 'Example app listening on port 3000!'
)
