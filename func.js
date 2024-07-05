// console.log("server file is running");
// function add(a,b){
//     return a+b;
// }
// var add =(a,b)=>a+b;
// var result= add(1,4);
// console.log(result);
// (function(){
//     console.log("shreyas");
// })();

const add=function(a,b,z){
    var result= a+b;
    console.log("result"+ " "+result);
    z();
}
add(2,3, ()=>console.log("calling callback function"));
age =24;
module.exports={
    age,
    add
}