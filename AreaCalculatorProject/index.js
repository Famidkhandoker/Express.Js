const express=require('express');
const bodyParsar=require('body-parser');
const app=express();
const PORT=3000;

app.use(bodyParsar.urlencoded({extended:false}));
app.use(bodyParsar.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});


app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");
});


app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html");
});

app.post("/circle",(req,res)=>{
    const radius=req.body.radius; //input e name shate mil rakhte hobe radius
      
    const area=Math.PI*radius*radius;
    res.send(`<h2>Area of Circle is:${area}</h2>`);
});

app.post("/triangle",(req,res)=>{
    const height=req.body.height; //input e name shate mil rakhte hobe height
    const base=req.body.base;     ////input e name shate mil rakhte hobe base
    const area=0.5*base*height;
    res.send(`<h2>Area of Triangle is:${area}</h2>`);
});

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

//output
//server is running at http://localhost:3000
//browser
//http://localhost:3000/
//Circle Calculator
//Triangle Calculator
//Home Page

//http://localhost:3000/circle
//Circle Calculator
// Triangle Calculator
// Circle Page
// Radius: 5
// Calculate
//Area of Circle is:78.53981633974483

//http://localhost:3000/triangle
// Circle Calculator
// Triangle Calculator
// Triangle Page
// Base: 5
// Height: 5
// Calculate
//Area of Triangle is:12.5