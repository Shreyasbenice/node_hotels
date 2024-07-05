const express = require('express')
const Router=express.Router();
const Menu=require('../models/menu')

Router.post('/',async(req,res)=>{
    try{
    const data = req.body;
    const nmenu = new Menu(data);
    const response1= await nmenu.save();
    console.log('data saved');
    res.json(response1);
  
  }catch(err){
    console.log(err);
    res.json(error);
  }
  })

Router.get('/',async(req,res)=>{
    try{
      const data = await Menu.find();
      console.log('data saved')
      res.json(data);
    }catch{
      console.log(err);
      res.json(error);
    }
  })

Router.get('/:tastetype',async(req,res)=>{
    try{
        const tastetype=req.params.tastetype;
        if(tastetype=="spicy"||tastetype=="sweet"||tastetype=="sour"){
            const response = await Menu.find({taste:tastetype});
            console.log("resposne found");
            res.json(response)
        }else{
            console.log(err);
            res.json(err);
        }
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})
  
module.exports=Router;