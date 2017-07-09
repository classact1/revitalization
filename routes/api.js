const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const Section = require('../models/section');

//add a new question to the section specified by route parameter
router.post('/question/:section', function(req, res, next){
  //console.log(req.body);
  Section.findOne({name: req.params.section}).then(function(result){
    result.questions.push(req.body);
    result.save().then(function(question){
      res.send(question);
    });
  }).catch(next);
});

//add a new section of questions to the db
router.post('/section', function(req, res, next){
  Section.create(req.body).then(function(section){
    res.send(section);
  }).catch(next);
});

//get all sections from db
router.get('/section', function(req, res, next){
  Section.find({}).then(function(sections){
    res.send(sections);
  });
});

//get question names from db
router.get('/questions', function(req, res, next){
  Section.distinct('questions.name').then(function(questions){
    res.send(questions);
  });
});

module.exports = router;
