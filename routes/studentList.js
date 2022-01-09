const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    res.render('studentList.hbs');
  })


  module.exports =router;