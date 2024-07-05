var prompt = require('prompt-sync')();
var a=5;
var b=9;
ans= a+b;
console.log("hello");
console.log(ans);
// object
const person ={
    name: "john",
    age:30,
    isStudent:false,
    hobbies:["reading","runnung","writing"]
};
console.log(person.hobbies);
const ages =[32,33,12,13,29];
const result=ages.filter(checkAge);
function checkAge(ages){
    return ages>=18;
}
console.log(result);
const vay=prompt("plz enter your age");
if(vay<18){
    console.log("not elgible");
} 
else{
    console.log("elgible");
}