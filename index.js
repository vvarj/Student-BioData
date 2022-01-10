const express = require('express')
const app=express();
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const database=require('./database/connection');
let PORT=80;

database();
//for express to load static files
app.use("/static", express.static("static"));

//for views
app.set("view engine", 'hbs');
app.set("views", path.join(__dirname, "views"));

///body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

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