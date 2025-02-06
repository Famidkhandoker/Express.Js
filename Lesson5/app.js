//http response
// const express=require("express");
// const app=express();
// const userRouter=require("./routes/users.route.js");


// app.use("/api/user",userRouter);

// app.use("/register",(req,res)=>{
//     res.send("Hi I am register page");
// })

// app.use("/login",(req,res)=>{
//     res.send("Hi I am login page");
// })

// app.get("/",(req,res)=>{
//     res.send("Hi I am home page");
// });

// app.use((req,res)=>{
//     res.send("<h1>404!!! Not a valid url </h1>");
   
// });
// module.exports=app;


//output
//server is running at http://localhost:3002
//browser

//http://localhost:3002/
//Hi I am home page

//http://localhost:3002/register
//Hi I am register page

//http://localhost:3002/login
//Hi I am login page

//http://localhost:3002/g9eg
//404!!! Not a valid url

//http://localhost:3002/api/user/register
//I am a get request at register route

//http://localhost:3002/api/user/login
//I am a get request at login route




// const express=require("express");
// const app=express();
// const userRouter=require("./routes/users.route.js");


// app.use("/api/user",userRouter);

// app.use("/register",(req,res)=>{
//     res.status(200).json({
//         message:"I am register page",
//         statusCode:200,
//     });
// })

// app.use("/login",(req,res)=>{
//     res.send("Hi I am login page");
// })

// app.get("/",(req,res)=>{
//     res.send("Hi I am home page");
// });

// app.use((req,res)=>{
//     res.send("<h1>404!!! Not a valid url </h1>");
   
// });
// module.exports=app;

//output
//server is running at http://localhost:3002
//browser
//http://localhost:3002/register
//{"message":"I am register page","statusCode":200}




// const express=require("express");
// const app=express();
// const userRouter=require("./routes/users.route.js");


// app.use("/api/user",userRouter);

// app.use("/register",(req,res)=>{
//   res.redirect("/login"); //register page er url dile login page chole jabe
// })

// app.use("/login",(req,res)=>{
//     res.send("Hi I am login page");
// })

// app.get("/",(req,res)=>{
//     res.send("Hi I am home page");
// });

// app.use((req,res)=>{
//     res.send("<h1>404!!! Not a valid url </h1>");
   
// });
// module.exports=app;

//output
//server is running at http://localhost:3002
//browser
//http://localhost:3002/login
//Hi I am login page




// const express=require("express");
// const app=express();
// const userRouter=require("./routes/users.route.js");


// app.use("/api/user",userRouter);

// app.use("/register",(req,res)=>{
//   res.statusCode=200;
//   res.sendFile(__dirname+"/views/register.html");
// });

// app.use("/login",(req,res)=>{
//     res.send("Hi I am login page");
// })

// app.use or app.get duitai use kora jay 

// app.use("/",(req,res)=>{
//     res.statusCode=200;
//     res.sendFile(__dirname+"/views/index.html");
// });

// app.get("/",(req,res)=>{
//     res.statusCode=200;
//     res.sendFile(__dirname+"/views/index.html");
// });

// app.use((req,res)=>{
//     res.send("<h1>404!!! Not a valid url </h1>");
   
// });
// module.exports=app;

//output
//server is running at http://localhost:3004
//browser
//http://localhost:3004/
//I am home page

//http://localhost:3004/register
//I am a register Page


// const express=require("express");
// const app=express();
// const userRouter=require("./routes/users.route.js");


// app.use("/api/user",userRouter);

// app.use("/register",(req,res)=>{
//   res.statusCode=200;
//   res.sendFile(__dirname+"/views/register.html");
// });

// app.use("/login",(req,res)=>{
//    res.cookie("name",'Famid');
//    res.cookie("age","21");
//    res.end();
// })

// app.get("/",(req,res)=>{
//     res.statusCode=200;
//     res.sendFile(__dirname+"/views/index.html");
// });

// app.use((req,res)=>{
//     res.send("<h1>404!!! Not a valid url </h1>");
   
// });
// module.exports=app;

//output
//server is running at http://localhost:3005
//browser
//http://localhost:3005/login
//inspect  e giye application e giye cookies ee
//age 21
//name Famid


// const express=require("express");
// const app=express();
// const userRouter=require("./routes/users.route.js");


// app.use("/api/user",userRouter);

// app.use("/register",(req,res)=>{
//   res.statusCode=200;
//   res.sendFile(__dirname+"/views/register.html");
// });

// app.use("/login",(req,res)=>{
//    res.clearCookie("name");
//    res.end();
// })

// app.get("/",(req,res)=>{
//     res.statusCode=200;
//     res.sendFile(__dirname+"/views/index.html");
// });

// app.use((req,res)=>{
//     res.send("<h1>404!!! Not a valid url </h1>");
   
// });
// module.exports=app;
 
//output
//server is running at http://localhost:3005
//browser
//http://localhost:3005/login
//inspect  e giye application e giye cookies ee
//age 21


const express=require("express");
const app=express();
const userRouter=require("./routes/users.route.js");


app.use("/api/user",userRouter);

app.use("/register",(req,res)=>{
  res.statusCode=200;
  res.sendFile(__dirname+"/views/register.html");
});

app.use("/login",(req,res)=>{
   res.clearCookie("name");
   res.append("id","130000");
   res.end();
})

app.get("/",(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/views/index.html");
});

app.use((req,res)=>{
    res.send("<h1>404!!! Not a valid url </h1>");
   
});
module.exports=app;

//output
//server is running at http://localhost:3005
//browser
//http://localhost:3006/login
//inspect giye network login e header
//id:130000
