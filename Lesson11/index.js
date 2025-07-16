//middleware //login page authentication check then access
//npm init -y
//npm install nodemon express
// const express=require('express');
// const app =express();
// const PORT =3000;

// app.get("/",(req,res)=>{
//     res.send("<h1> I am home route</h2>")
// })

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// });

//browser
//http://localhost:3000/
//I am home route


//use middleware means function and use three parameter(req,res,next)

// const express=require('express');
// const app =express();
// const PORT =3000;

// const myMiddleWare=(req,res,next)=>{
//     console.log("Middle Ware function");
// }


// app.get("/",(req,res)=>{
//     console.log("I am home");//don't working because usn't middle ware
//     res.send("<h1> I am home route</h2>")
// })

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// });

//browser
//http://localhost:3000/
//I am home route



// const express=require('express');
// const app =express();
// const PORT =3000;

// const myMiddleWare=(req,res,next)=>{
//     console.log("Middle Ware function");
//     next();
// }


// app.get("/", myMiddleWare,(req,res)=>{
//     console.log("I am home"); 
//     res.send("<h1> I am home route</h2>")
// })

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// });

//terminal
//server is running at http://localhost:3000
//Middle Ware function
//I am home

//browser
//http://localhost:3000/
//I am home route




// const express=require('express');
// const app =express();
// const PORT =3000;

// const myMiddleWare=(req,res,next)=>{
//     console.log("Middle Ware function");
//     req.currentTime=new Date(Date.now());
//     next();
// }


// app.get("/", myMiddleWare,(req,res)=>{
//     console.log("I am home" +req.currentTime);
//     res.send("<h1> I am home route</h2>");
// });

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// });

//terminal
//server is running at http://localhost:3000
//Middle Ware function
//I am homeTue Mar 25 2025 14:52:36 GMT+0600 (Bangladesh Standard Time)

//browser
//http://localhost:3000/
//I am home route





// const express=require('express');
// const app =express();
// const PORT =3000;

// const myMiddleWare=(req,res,next)=>{
//     console.log("Middle Ware function");
//     req.currentTime=new Date(Date.now());
//     next();
// }


// app.get("/", myMiddleWare,(req,res)=>{
//     console.log("I am home" +req.currentTime);
//     res.send("<h1> I am home route</h2>");
// });


// app.get("/about", myMiddleWare,(req,res)=>{
//     console.log("I am about" +req.currentTime);
//     res.send("<h1> I am about route</h2>");
// });


// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// });

//terminal
// server is running at http://localhost:3000
// Middle Ware function
// I am homeTue Mar 25 2025 14:55:57 GMT+0600 (Bangladesh Standard Time)
// Middle Ware function
// I am aboutTue Mar 25 2025 14:56:11 GMT+0600 (Bangladesh Standard Time)

//browser
//http://localhost:3000/
//I am home route
//http://localhost:3000/about
//I am about route



// const express=require('express');
// const app =express();
// const PORT =3000;

// const myMiddleWare=(req,res,next)=>{
//     console.log("Middle Ware function");
//     req.currentTime=new Date(Date.now());
//     next();
// }


// app.get("/", myMiddleWare,(req,res)=>{
//     console.log("I am home" +req.currentTime);
//     res.send("<h1> I am home route</h2>");
// });


// app.get("/about",(req,res)=>{
//     console.log("I am about" +req.currentTime);
//     res.send("<h1> I am about route</h2>");
// });


// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// });

//terminal
//server is running at http://localhost:3000
// Middle Ware function
// I am homeTue Mar 25 2025 14:58:50 GMT+0600 (Bangladesh Standard Time)
// I am about undefined

//browser
//http://localhost:3000/about
//I am about route



//common middleware
// const express=require('express');
// const app =express();
// const PORT =3000;

// const myMiddleWare=(req,res,next)=>{
//     console.log("Middle Ware function");
//     req.currentTime=new Date(Date.now());
//     next();
// }

// app.use(myMiddleWare);//common middleware

// app.get("/",(req,res)=>{
//     console.log("I am home" +req.currentTime);
//     res.send("<h1> I am home route</h2>");
// });


// app.get("/about",(req,res)=>{
//     console.log("I am about" +req.currentTime);
//     res.send("<h1> I am about route</h2>");
// });


// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`)
// });

//terminal
//server is running at http://localhost:3000
// Middle Ware function
// I am homeTue Mar 25 2025 15:02:51 GMT+0600 (Bangladesh Standard Time)
// Middle Ware function
// I am aboutTue Mar 25 2025 15:03:01 GMT+0600 (Bangladesh Standard Time)

//browser
//http://localhost:3000/
//I am home route
//http://localhost:3000/about
//I am about route




const express=require('express');
const app =express();
const PORT =3000;

const myMiddleWare=(req,res,next)=>{
    console.log("Middle Ware function");
    req.currentTime=new Date(Date.now());
    next();
}

app.use(myMiddleWare);//common middleware

app.get("/",(req,res)=>{
    console.log("I am home" +req.currentTime);
    res.send("<h1> I am home route</h2>");
});


app.get("/about",(req,res)=>{
    console.log("I am about" +req.currentTime);
    res.send("<h1> I am about route</h2>");
});

app.use((req,res,next)=>{
    res.send("404 bad url route"); //not working
})


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
});

//terminal
//server is running at http://localhost:3000
//Middle Ware function
//I am homeTue Mar 25 2025 17:33:37 GMT+0600 (Bangladesh Standard Time)
//Middle Ware function
//I am aboutTue Mar 25 2025 17:33:42 GMT+0600 (Bangladesh Standard Time)
//Middle Ware function

//browser
//http://localhost:3000/
//I am home route
//http://localhost:3000/about
//I am about route
//http://localhost:3000/contact
//404 bad url route