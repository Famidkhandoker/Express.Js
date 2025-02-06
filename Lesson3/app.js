//Router and Routing
const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>I am a get request at home route<h1>");
});

app.get("/register",(req,res)=>{
    res.send("<h1>I am a get request at register route<h1>");
});

app.get("/login",(req,res)=>{
    res.send("<h1>I am a get request at login route<h1>");
});

app.use((req,res)=>{
    res.send("<h1>404!!! Not a vaild url <h1>");
});

module.exports=app;
