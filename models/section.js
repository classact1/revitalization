const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = require('./question');

const SectionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  questions: [QuestionSchema]
});

const Section = mongoose.model('section', SectionSchema);

module.exports = Section;
