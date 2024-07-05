var fs = require('fs');
var os = require('os');
var _ = require('lodash');
// var user= os.userInfo();
// console.log(user);
// console.log(user.username);
console.log("hi");
// fs.appendFile('greetings','hi'+' '+user.username+'\n',
//     ()=>{console.log('file is created')});

const main= require('./func.js');  
var age= main.age;
console.log(age);
var add= main.add(2,7,()=>console.log("calling callback function"));
console.log(add);
var data=["p","p",1,2,1,3,3,45,23,45,"p","p","e","e"];
var filter=_.uniq(data);
console.log(filter);