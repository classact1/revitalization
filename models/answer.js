const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create answer schema
const AnswerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  points: {
    type: Number
  },
  description: {
    type: String,
    required: [true, 'Description field is required']
  }
});

module.exports = AnswerSchema;
