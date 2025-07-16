//javascript regular expression
//npm init
//npm install express nodemon bpdy-parser

// const express=require("express");
// const app=express();

// app.get("/products/:id",(req,res)=>{
//     res.send(`<h2>ID=${req.params.id}</h2>`);
// });

// app.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });

//output
//server is running at http://localhost:3000
//browser
//http://localhost:3000/products/21
//ID=21

//http://localhost:3000/products/abc
//ID=abc    //character id hote pare na ajonno regular expresson use korte hobe



// const express=require("express");
// const app=express();

// app.get("/products/:id([0-9]+)",(req,res)=>{
//     res.send(`<h2>ID=${req.params.id}</h2>`);
// });

// app.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });

//output
//server is running at http://localhost:3000
//browser
//http://localhost:3000/products/abc
//Cannot GET /products/abc



// const express=require("express");
// const app=express();

// app.get("/products/:id([0-9]+)",(req,res)=>{
//     res.send(`<h2>ID=${req.params.id}</h2>`);
// });

// app.use("*",(req,res)=>{
//     res.status(404).send({    //kono kiso na paile aye message show korbe
//         message:"Not a valid Route",
//     });
// });

// app.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });


//output
//server is running at http://localhost:3000
//browser
//http://localhost:3000/
//{"message":"Not a valid Route"}

//http://localhost:3000/products/11
//ID=11

//http://localhost:3000/products/abc
//{"message":"Not a valid Route"}


// const express=require("express");
// const app=express();

// app.get("/products/:id([0-3]+)",(req,res)=>{ //[0-3]+ means 0-3 projonto joto iccha toto use kor jabe
//     res.send(`<h2>ID=${req.params.id}</h2>`);
// });

// app.use("*",(req,res)=>{
//     res.status(404).send({    //kono kiso na paile aye message show korbe
//         message:"Not a valid Route",
//     });
// });

// app.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });

//browser
//http://localhost:3000/products/123
//ID=123

//http://localhost:3000/products/1234
//{"message":"Not a valid Route"}

//http://localhost:3000/products/123111233131313 //je kono combination use kora jabe(0-3) projonto
                                                //  er upore combination use kora jabe na
//ID=123111233131313



// const express=require("express");
// const app=express();

// app.get("/products/:id([0-9]{3})",(req,res)=>{ //minimum 3 digit use kora jabe
//     res.send(`<h2>ID=${req.params.id}</h2>`);
// });

// app.use("*",(req,res)=>{    //* means while cart
//     res.status(404).send({    
//         message:"Not a valid Route",
//     });
// });

// app.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });

//browser

//http://localhost:3000/products/1
//{"message":"Not a valid Route"}

//http://localhost:3000/products/12
//{"message":"Not a valid Route"}

//http://localhost:3000/products/569  
//ID=569

//http://localhost:3000/products/56936
//{"message":"Not a valid Route"}



// const express=require("express");
// const app=express();

// app.get("/products/:id([0-9]{3})",(req,res)=>{ //minimum 3 digit use kora jabe
//     res.send(`<h2>ID=${req.params.id}</h2>`);
// });

// app.get("/products/:title([a-zA-Z]{3})",(req,res)=>{ //minimum 3 digit use kora jabe
//     res.send(`<h2>title=${req.params.title}</h2>`);
// });

// app.use("*",(req,res)=>{
//     res.status(404).send({    
//         message:"Not a valid Route",
//     });
// });

// app.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });


//browser
//http://localhost:3000/products/iph
//title=iph

//http://localhost:3000/products/iphrgg
//{"message":"Not a valid Route"}



// const express=require("express");
// const app=express();

// app.get("/products/:id([0-9]{3})",(req,res)=>{ //minimum 3 digit use kora jabe
//     res.send(`<h2>ID=${req.params.id}</h2>`);
// });

// app.get("/products/:title([a-zA-Z]+)",(req,res)=>{ //any combination
//     res.send(`<h2>title=${req.params.title}</h2>`);
// });

// app.use("*",(req,res)=>{
//     res.status(404).send({    
//         message:"Not a valid Route",
//     });
// });

// app.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000");
// });


//server is running at http://localhost:3000

//browser
//http://localhost:3000/products/482
//ID=482

//http://localhost:3000/products/48257
//{"message":"Not a valid Route"}

//http://localhost:3000/products/yteote
//title=yteote

//http://localhost:3000/products/313yfffu
//{"message":"Not a valid Route"}

//http://localhost:3000/products/eroyty123
//{"message":"Not a valid Route"}


const express=require("express");
const app=express();

app.get("/products/:id([0-9]{3})",(req,res)=>{ //minimum 3 digit use kora jabe
    res.send(`<h2>ID=${req.params.id}</h2>`);
});

app.get("/products/:title([a-zA-Z0-9]+)",(req,res)=>{ //any combination
    res.send(`<h2>title=${req.params.title}</h2>`);
});

app.use("*",(req,res)=>{
    res.status(404).send({    
        message:"Not a valid Route",
    });
});

app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
});

//browser
//http://localhost:3000/products/123rtu
//title=123rtu

//http://localhost:3000/products/rytr123
//title=rytr123