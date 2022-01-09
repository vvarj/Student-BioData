const express = require('express')
const app=express();
const path = require("path");
let PORT=80;

//for express to load static files
app.use("/static", express.static("static"));

//for views
app.set("view engine", 'hbs');
app.set("views", path.join(__dirname, "views"));

//adding routers
const welcomePage = require("./routes/welcome");
const addPage = require("./routes/addStudent");
const studentList = require("./routes/studentList");


//for routers
app.use("/", welcomePage);
app.use("/add", addPage);
app.use("/list", studentList);


app.listen(PORT,()=>{
    console.log('server connected');
})