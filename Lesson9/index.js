//javascript regular expression
//npm init
//npm install express nodemon bpdy-parser
const express=require("express");
const app=express();

app.get("/products/:id",(req,res)=>{
    res.send(`<h2>ID=${req.params.id}</h2>`);
});

app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
});

//output
//server is running at http://localhost:3000
//browser
//http://localhost:3000/products/21
//ID=21

//http://localhost:3000/products/abc
//ID=abc    //character id hote pare na ajonno regular expresson use korte hobe