var url = require('./config.js');
var parseFunc = require('./parse.js')
var mongodb = require('mongodb');
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));


//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.


var url = url.URL,urlProtected = 'mongodb://rusticman:password@ds031835.mlab.com:31835/rusticdb';


// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', urlProtected);

var collection = db.collection('shorturl');

app.get('/',function(req,res){
  res.send('with ya in just a mo')
})

//this is for url with one param
app.get('/:first', function (req,res) {
var str1 = req.params.first;
if(!parseInt(str1,10)){//if param is not a number, it returns error
  res.json({error: 'Not a valid number.'})
}
else{
  str1 = parseInt(str1,10);
 collection.findOne({number:str1},function(err,doc){//param is number and searches database
    if(err){
      throw err;

    }
    else if(!doc){//if number not in database, returns this error
      console.log('Number is not in database.')
      res.json({error: 'Number is not in database.'});
    }
    else{
      res.redirect(doc.url);//if number in database, it redirects the browser to correct url
    }
  })
}
});

parseFunc(app,db,collection);//function for new url docs to be inserted



  }
});
app.listen(app.get('port'),function(){
  console.log('listening on port: '+app.get('port'))
})
