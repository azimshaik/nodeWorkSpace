var mongodb = require('mongodb');
var MongoClient = mongodb.Client;
var url = 'mongodb://localhost:27017/sampleUsers';
MongoClient.connect(url, function(err,db){
if(err){
console.log('error connecting mongodb',err);
} else {
console.log('connection established to ',url);
}
db.close();
});

