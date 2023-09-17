const mongoose = require('mongoose')
const { Schema } = mongoose;
const reportSchema = new Schema({
    name: String,
    date: String,
    card: String,
    person: Number,
    totalBill: Number
});
module.exports = mongoose.model('reports', reportSchema);