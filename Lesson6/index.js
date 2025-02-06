//htttp request

// const express=require("express");
// const app =express();
// const PORT =3001;

// app.get("/",(req,res)=>{
//     res.send("I am home route");
// })

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// });

//output
//http://localhost:3001/
//I am home route


// const express=require("express");
// const app =express();
// const PORT =3001;

// app.get("/",(req,res)=>{
//    const id =req.query.id;
//     //res.send(`student id is :${id}`);
//     res.send(`<h1>student id is :${id}<h1>`);

// })

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// });

//output
//server is running at http://localhost:3001
//browser

//http://localhost:3001/
//student id is :undefined

//http://localhost:3001/?id=101  forntend thake jekono id dile display te show korbe
//student id is :101

//http://localhost:3001/?id=101  forntend thake jekono id dile display te show korbe
//student id is :101

// const express=require("express");
// const app =express();
// const PORT =3001;

// app.get("/",(req,res)=>{
//     //using query parameter
// //    const id =req.query.id;
// //    const name=req.query.name;
//       const {id,name}=req.query;
//     res.send(`<h1>student name is:${name},id is:${id}<h1>`);
// })

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// });

//output
//server is running at http://localhost:3001

//http://localhost:3001/
//student name is:undefined,id is:undefined

//http://localhost:3001/?id=101&name=Famid
//student name is:Famid,id is:101


// const express=require("express");
// const app =express();
// const PORT =3001;

// app.get("/",(req,res)=>{

//  //using route parameter
//  app.get("/userId/:id/userAge/:age",(req,res)=>{
//     const id =req.params.id;
//     const age=req.params.age;
//     res.send(`<h1>student id is:${id},age is:${age}<h1>`);
//  })

// })

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// });

//output
//server is running at http://localhost:3001
//browser
//http://localhost:3001/userId/101/userAge/25
//student id is:101,age is:25


const express=require("express");
const app =express();
const PORT =3002;

 //using route parameter
 app.get("/",(req,res)=>{
   const id=req.header('id');
   const name=req.header('name');
    res.send(`<h1>student id is:${id},name is:${name}<h1>`);

});


app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

//output
//server is running at http://localhost:3002
//browser
//http://localhost:3002/
//student id is:undefined,name is:undefined

//postman e show korbe
