const mongoose = require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    username: { type : String , unique : true},
    password: String,
    name: String,
    role: String,
    offDay: String,
    note: Array,
    status: String,
});
module.exports = mongoose.model('users', userSchema);