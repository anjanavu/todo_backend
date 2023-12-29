const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addSchema = new Schema({
   description: {
      type: String,
      required: true
    },
    status: {
      type: Boolean
    }
  });
  
  const todo = mongoose.model('lists', addSchema);
  
  module.exports = todo;