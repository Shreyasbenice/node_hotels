const express= require('express')
const Router = express.Router()
const Person = require('../models/person')

// get method
Router.get('/',async(req,res)=>{
    try{
      const data = await Person.find();
      console.log('data saved')
      res.json(data);
    }catch(err){
      console.log(err);
      res.json(err);
    }
  })

// post method
Router.post('/',async(req,res)=>{

    try{
      // data recived is store and filteres by body parser req.body has that data
    const data = req.body
    
    // now create a newperson model 
    const newp = new Person(data);
    
    // save to database
    const response = await newp.save();
    console.log('data saved')
    res.json(response);
    }
   catch(err){
    console.log(err);
    res.json(err);
   }
  }
  )

// worktype
Router.get('/:worktype', async (req, res) => {
    try {
      const worktype = req.params.worktype;
      if (['chef', 'waiter', 'manager'].includes(worktype)) {
        const response = await Person.find({ work: worktype });
        console.log('response found');
        res.json(response);
      } else {
        console.log("Invalid worktype");
        res.status(400).json({ error: "Invalid worktype" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

Router.put('/:id',async(req,res)=>{
  try{
    const personID= req.params.id;
    const updatedata = req.body;

    const response= await Person.findByIdAndUpdate(personID,updatedata,{
      new: true,
      runValidators:true,
    });
    if(!response){
      return res.json("person not found");
    };
  
    

  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})
Router.delete('/:id',async(req,res)=>{
  try{
  const personID=req.params.id;

  const response= await Person.findByIdAndDelete(personID);
  if(!response){
    return res.json("person not found");
  }
  console.log("data deleted");
  res.json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json(err);
  }
})

 module.exports = Router;