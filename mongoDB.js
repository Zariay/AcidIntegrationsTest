// JavaScript source code
var url = 'mongodb://127.0.0.1:8080/test';

co(function*() {
  const db = yield MongoClient.connect(url);
  console.log("Connected successfully to server");
  
  yield insertDocuments(db, null);
  yield findDocuments(db, null);
  yield indexCollection(db, null);
  yield aggregateDocuments(db, null);

  db.close();
}).catch(err => console.log(err));