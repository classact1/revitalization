const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//connect to the db before tests run
before(function(done){
  //connect to mongoDB
  mongoose.connect('mongodb://localhost/tests');

  mongoose.connection.once('open', function(){
    console.log('Connection has been made.');
    done();
  }).on('error', function(err){
    console.log('Connection error: ', err);
  });
});

// drop the characters collection before each test
beforeEach(function(done){
  //drop the collection
  mongoose.connection.collections.sections.drop(function(){
    done();
  });
});
