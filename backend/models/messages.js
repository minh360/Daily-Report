const mongoose = require('mongoose')
const { Schema } = mongoose;
const messagesSchema = new Schema({
    name: String,
    message: String,
    date: String,
});
module.exports = mongoose.model('messages', messagesSchema);