const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja Schema & model
const QuestionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  answers: {
    type: Array,
    required: [true, 'Name field is required']
  },
  description: {
    type: Array,
    required: [true, 'Name field is required']
  }
});

//const Question = mongoose.model('question', QuestionSchema);

module.exports = QuestionSchema;
