const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String, 
    degree:String

})


module.exports=mongoose.model('studentRecord',studentSchema);