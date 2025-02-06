// const express=require("express");
// const app=express();
// const userRouter=require("./routes/users.route");

// //app.use(userRouter);
// app.use("/api/user",userRouter);
// app.use((req,res)=>{
//     res.send("<h1>404!!! Not a valid url <h1>");
//     app.use(userRouter);
// });
// module.exports=app;



const express=require("express");
const app=express();
const userRouter=require("./routes/users.route.js");


app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.send("<h1>I am a get request at home route </h1>");
});

app.use((req,res)=>{
    res.send("<h1>404!!! Not a valid url </h1>");
   
});
module.exports=app;



