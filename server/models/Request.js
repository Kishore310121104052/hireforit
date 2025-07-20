const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
