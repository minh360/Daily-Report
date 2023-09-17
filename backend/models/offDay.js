const mongoose = require('mongoose')
const { Schema } = mongoose;
const offDaySchema = new Schema({
    name: String,
    date: String,
    note: String,
});
module.exports = mongoose.model('offDays', offDaySchema);