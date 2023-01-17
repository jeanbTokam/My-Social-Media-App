const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://tokam:@jb.gpgoi.mongodb.net/Social-media-app?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true});

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo db connection successfull')
})

connection.on('error' , ()=>{
    console.log('Mongo db connection error')
})

module.exports = mongoose