// JavaScript source code
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:8080/myDB";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});