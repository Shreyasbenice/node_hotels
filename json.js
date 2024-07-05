const jsonstring ='{"name":"john","age":22,"city":"ny"}';
const jsonobject= JSON.parse(jsonstring);//jsonstring to object
console.log(jsonobject);
const objecttoconvert={
    name:"alice",
    age:23
};
const json =JSON.stringify(objecttoconvert);
console.log(json);