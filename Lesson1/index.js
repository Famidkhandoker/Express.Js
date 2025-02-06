//npm init
//npm install express nodemon

const express=require("express");
const app=express();
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});


//output
//server is running at http://localhost:3000
//browser
//Cannot GET /

//on the other hand

//alada file use app.js

const app=require('./app');
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});


//output
//server is running at http://localhost:3000
//browser
//Cannot GET /