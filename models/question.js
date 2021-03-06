const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AnswerSchema = require('./question');

//create ninja Schema & model
const QuestionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  answers: [AnswerSchema],
  counts: {
    type: Boolean
  }
});

//const Question = mongoose.model('question', QuestionSchema);

module.exports = QuestionSchema;
