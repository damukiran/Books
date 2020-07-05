const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 2020
 require("./Book")
var ObjectId = require('mongodb').ObjectID;
//const url ="mongodb://damukiran:damu3383@cluster0-shard-00-00-2wakd.mongodb.net:27017/bookservice"
const url = "mongodb://devchurchviteadmin:$Churchvite12345@13.126.33.219:27017/churchvitedev"
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const Book = mongoose.model("Books")
mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to the database our successfully.')
})
app.get('/books', (req, res) => {
   var input = req.query
    Book.find({}).exec(function (err, data) {
        console.log(data)
        res.send(data)
    })
})
app.post('/', (req, res) => {
    var input = req.body
    var newBook = {
        title: input.title,
        author: input.author,
        numberPages: input.numberPages,
        publisher: input.publisher
    }
    var book = new Book(newBook)
    book.save().then(() => {
        console.log("data saved")
        res.send("data saved")
    }).catch((err) => {
        if (err) { throw err }
    })
})
app.listen(port, () => {
    console.log("server running  with port no " + port)
})
