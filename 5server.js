const express = require('express')
const app = express()
const db=require('./db');

// bodyparser is middle which extracts data in required format from user
const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body

// importing personRoutes
const personRoutes= require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');

// const Menu=require('./models/menu');
const { error } = require('console');
app.use('/person',personRoutes);

app.use('/menu',menuRoutes);


// HOMEPAGE
app.get('/', function (req, res) {
  res.send('Hello Welcome to my hotel')
})

app.listen(3000);



// PERSON POST
// app.post('/person',async(req,res)=>{

//   try{
//     // data recived is store and filteres by body parser req.body has that data
//   const data = req.body
  
//   // now create a newperson model 
//   const newp = new Person(data);
  
//   // save to database
//   const response = await newp.save();
//   console.log('data saved')
//   res.json(response);
//   }
//  catch(err){
//   console.log(error);
//   res.json(error);
//  }
// }
// )

// PERSON GET
// app.get('/person',async(req,res)=>{
//   try{
//     const data = await Person.find();
//     console.log('data saved')
//     res.json(data);
//   }catch{
//     console.log(err);
//     res.json(error);
//   }
// })

// PARAMETRISED API CALLS
// app.get('/person/:worktype',async(req,res)=>{
//   try{ 
//   const worktype=req.params.worktype;
//   if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
//     const response = await Person.find({work: worktype});
//     console.log('response found');
//     res.json(response);
//   }
//   else{
//     console.log("error");
//     res.json(err);
//   }
// }
//   catch(err){
//     console.log(err);
//     res.json(error);
//   }
// }
// )


// MENU POST
// app.post('/menu',async(req,res)=>{
//   try{
//   const data = req.body;
//   const nmenu = new Menu(data);
//   const response1= await nmenu.save();
//   console.log('data saved');
//   res.json(response1);

// }catch(err){
//   console.log(err);
//   res.json(error);
// }
// })

// MENU GET
// app.get('/menu',async(req,res)=>{
//   try{
//     const data = await Menu.find();
//     console.log('data saved')
//     res.json(data);
//   }catch{
//     console.log(err);
//     res.json(error);
//   }
// })

 //port number

// app.get('/chick',(req,res)=>{
//     res.send('get me chicken')
// })

// app.post('/menu',(req,res)=>{
//   res.send('response got')
// })













