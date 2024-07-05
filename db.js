// connection between node and mongodb
const mongoose = require('mongoose');
// mongodb connection url
const mongoUrl ='mongodb://localhost:27017/hotels'
// setup connection
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;

db.on('connected', ()=>{
    console.log('connected to server')
});
db.on('disconnected', ()=>{
    console.log('disconnected to server')
});
module.exports=db;