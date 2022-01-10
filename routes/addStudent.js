const express = require('express');
const router = express.Router();
const studentRec = require('../database/studentRecord');


router.get('/', (req, res) => {

    res.render('addStudent.hbs');
  })


  router.post('/', async (req, res) => {

   console.log(req.body);

    if(req.files!=null&&req.body.name!=''&&req.body.email!=''&&req.body.phone!=''&&req.body.degree!=''){
      //console.log(req.files.formfile);
      let student = new studentRec(req.body);
      console.log(student._id);
      await student.save();
     
      let image=req.files.formfile;
  
      image.mv('./static/images/'+student._id+'.jpg',(err,done)=>{
        if(!err){
            res.send('file uploaded');
        }
        else{
          res.send('cant save this file');
        }
      })
    }else{
      res.send('please fill all details')
    }
   

   //res.render('addStudent.hbs');

  })


  module.exports =router;