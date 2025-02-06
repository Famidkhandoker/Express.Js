const express=require('express');
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("<h1>I am a get request at home route </h1>");
});

router.get("/register",(req,res)=>{
    res.send("<h1>I am a get request at register route </h1>");
});

router.get("/login",(req,res)=>{
    res.send("<h1>I am a get request at login route </h1>");
});

module.exports=router;


//output
//server is running at http://localhost:3000
//browser
////http://localhost:5000/
//I am a get request at home route

//http://localhost:5000/register
//I am a get request at register route

//http://localhost:5000/login
//I am a get request at login route

//http://localhost:5000/fif
//404!!! Not a vaild url

//http://localhost:3000/api/user
//I am a get request at home route

//http://localhost:3000/api/user/register
//I am a get request at register route

//http://localhost:3000/api/user/login
//I am a get request at login route

//http://localhost:3000/api/user/hjrhoj
//404!!! Not a valid url



const express=require('express');
const router=express.Router();

router.get("/register",(req,res)=>{
    res.send("<h1>I am a get request at register route </h1>");
});

router.get("/login",(req,res)=>{
    res.send("<h1>I am a get request at login route </h1>");
});

module.exports=router;

//output
//server is running at http://localhost:3000
//browser
//http://localhost:3000/
//I am a get request at home route

//http://localhost:3000/fihefhf
//404!!! Not a valid url

//http://localhost:3000/api/user
//404!!! Not a valid url

//http://localhost:3000/api/user/register
//I am a get request at register route

//http://localhost:3000/api/user/login
//I am a get request at login route