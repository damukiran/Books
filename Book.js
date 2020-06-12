var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
    title: {
        type:String
    },
    author: {
        type:String 
    }, numberPages: {
        type:String
    },
     publisher: {
        type:String
    }
},{versionKey:false});
var SomeModel = mongoose.model('Books', SomeModelSchema );

module.exports=SomeModel