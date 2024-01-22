// main.js

const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

router.get('/', async(req, res) => {
  try {
    const data = await Business.find({});
    res.render('index', {data});
  } catch (error){
    console.log(error);
  }
});

router.get('/login', async(req,res)=>{
  try {
    res.render('login');
  } catch(error){
    console.log(error);
    }
});

router.get('/profile', async(req,res)=>{
  try {
    res.render('profile');
  } catch(error){
    console.log(error);
    }
});

router.get('/register', async (req,res)=>{
  try {
    res.render('register');
  } catch(error){
    console.log(error);
    }
});

/*
router.post('/register', async (req, res) =>{
  const newBusiness = new Business({
      Email : req.body.inputEmail4, 
      Password : req.body.inputPassword4,
      Name : req.body.businessTitle,
      Description : req.body.BusinessDescriptionTextArea,
      Address : req.body.inputAddress,
      Link : req.body.link
  });
}) 
*/


module.exports = router;
