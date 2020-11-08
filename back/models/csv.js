const mongoose = require('mongoose');

var Csv = mongoose.model('Csv', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});

module.exports = { Csv };