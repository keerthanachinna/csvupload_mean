const express = require('express');
const router = express.Router();
const user =require('../models/user');

router.post('/add',(req,res)=>{
    let listarray=req.body.Sheet1;
//   var User=new User({
//     fullName:req.body.fullName,
//     email:req.body.email,
//    password :req.body.password
//   })  
    user.save(listarray,(err,docs)=>{
if(!err){
    return res.send(docs)
}else{
    console.log("User data not save "+err)
}
    })
})

router.get('/list',(req,res)=>{
    user.find((err,doc)=>{
        if(!err){
            return res.send(docs)
        }else{
            console.log("User data not save "+err)
        }  
    })
  })
  