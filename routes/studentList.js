const express = require('express');
const router = express.Router();
const studentRecord = require('../database/studentRecord');

router.get('/', async (req, res) => {
     
  let studentList = await studentRecord.find();
  console.log(studentList);
    res.render('studentList.hbs',{studentList});
  })


  module.exports =router;