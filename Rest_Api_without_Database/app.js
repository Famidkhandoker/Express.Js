const express =require("express");
const cors =require("cors");
const bodyParser=require("body-parser");
// const users=require("./models/users.model");
const usersRouter =require(".routes/users.route");

const app =express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use("/users",usersRouter);

// app.get("/users",(req,res)=>{
//     res.status(200).json({users});//http://localhost:4000/users  //output show korbe     
// });
//or using another folder routes

//home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html"); //http://localhost:4000/ //Welcome to REST API Server
});

//route not found error
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found"});//http://localhost:4000/tywe  // browser:{"message":"route not found"}
});

//server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"something broke"
    });
});

module.exports=app;