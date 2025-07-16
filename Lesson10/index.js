//.env file //means private information user for admin or software developer 
//npm init
//npm install express

// const express =require('express');
// const app=express();
// const PORT=3000;


// app.get("/",(req,res)=>{
//     res.send("Hello I am home Route");
// });

// app.listen(PORT,()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// });


//server is running at http://localhost:3000
//browser
//http://localhost:3000/
//Hello I am home Route


//using dotenv file
//npm install dotenv


require('dotenv').config();
const express =require('express');
const app=express();
const PORT=process.env.PORT||3000;//run korbe process.env.PORT error hole 3000 e run korbe port.


app.get("/",(req,res)=>{
    res.send("Hello I am home Route");
});

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

//server is running at http://localhost:3001
//browser
//http://localhost:3001/
//Hello I am home Route

//.env file ke git ignore korte hobe jate kew accress korte na pare only developer using this file