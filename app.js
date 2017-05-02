const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./controller/todoController');
const routes = require('./routes/api');
const mongoose = require('mongoose');

var app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/revit');

//use ES6 global promises
mongoose.Promise = global.Promise;

//static files
app.use(express.static('./public'));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: false
}));

//use routes middleware on /api route
app.use('/api', routes);

//fire controller
todoController(app);

//middleware for error handling
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
})

//listen for request
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
