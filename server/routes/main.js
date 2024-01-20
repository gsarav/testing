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


module.exports = router;
