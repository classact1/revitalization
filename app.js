const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./controller/todoController');
const routes = require('./routes/api');
const mongoose = require('mongoose');

var app = express();

//for hot-reloads
var webpackDevHelper = require('./index.dev.js');

//connect to mongodb
mongoose.connect('mongodb://classact:twojastara666@ds163667.mlab.com:63667/revitalization');

//use ES6 global promises
mongoose.Promise = global.Promise;

//static files
app.use(express.static('./public'));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
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

if (process.env.NODE_ENV !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT: Turning on WebPack Middleware...');
    webpackDevHelper.useWebpackMiddleware(app);
} else {
    console.log('PRODUCTION ENVIRONMENT');

    //Production needs physical files! (built via separate process)
    //app.use('/js', express.static(__dirname + '/public/js'));
}

//listen for request
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});
