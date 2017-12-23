const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  equipmentId: {
    type: Number,
    required: true,
    index: true
  },
  model: {
    type: String,
    required: true
  },
  characteristics: {
    type: Number,
    required: true,
  },
  Features: {
    type: String,
    required: true,
  },
  Specifications: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Subject', SubjectSchema);

//TODO research types in mongoose