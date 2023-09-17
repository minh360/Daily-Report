const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const serveStatic = require('serve-static')
const path = require('path')
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const jsonParser = bodyParser.json();
const port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://minhtrai23112001:minh360@cluster0.j666y1u.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;
const router = require('./router')
const dayjs = require("dayjs");

db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
app.use(cors())
app.use(jsonParser);
app.use('/', router);
app.use('/', serveStatic(path.join(__dirname, '/public')))
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})
var server = require("http").Server(app)

server.listen(port)