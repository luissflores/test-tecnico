const mongoose = require('mongoose');

const TaskSchecma = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  completed: {
    required: true,
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
})

module.exports = new mongoose.model('Tasks', TaskSchecma);