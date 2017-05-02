const assert = require('assert');
const Section = require('../models/section');

//describe tests
describe('Saving records', function(){

  var testSection;

  //create record to be tested before each test
  beforeEach(function(done){
    testSection = new Section({
      name: 'Ocena stanu formalno-prawnego',
      questions: []
    });
    testSection.save().then(function(){
      done();
    });
  });

  //create tests
  it('Saves a record to the database', function(done){
    testSection.save().then(function(){
      assert(testSection.isNew === false);
      done();
    });
  });

  it('Adds question to the section', function(done){
    Section.findOne({_id: testSection._id}).then(function(result){
      result.questions.push({
        name: 'Sprawy własnościowe',
        answers: ['Uporządkowane', 'Nieuporządkowane'],
        description: [
          'Budynek posiada jednego lub kilku właścicieli, który posiadają do niego pełne prawa. Nie toczą się wobec niego sprawy sądowe dot. ustalenia własności.',
          'Budynek nie posiada jednego lub kilku właścicieli, który posiadają do niego pełne prawa, osoby trzecie mają w stosunku do niego roszczenia. Toczą się wobec niego sprawy sądowe dot. ustalenia własności.'
        ]
      });
      result.save().then(function(){
        Section.findOne({_id: testSection._id}).then(function(result){
          assert(result.questions.length === 1);
          done();
        });
      });
    });
  });

});
