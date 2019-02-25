// JavaScript source code
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:8080/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("cubeProperties", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});