//npm init
//npm install express nodemon body-parser
//post method and request body

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const PORT = 3003;


// app.use(bodyParser.urlencoded({ extended: false })); //form method
// app.use(bodyParser.json());

// app.get("/register",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// })

// app.post("/register", (req, res) => {
//     res.send("Hello"); //submit korle server thake response ashbe
// });

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// });

//output
//Server is running at http://localhost:3003/register
//browser
//form thake submit korle
//server thake output ashbe hello



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3003;


app.use(bodyParser.urlencoded({ extended: false })); //form method
app.use(bodyParser.json());

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/register", (req, res) => {
    const fullName=req.body.fullName;
    const age=req.body.age;
    res.send(`<h2>Your name is ${fullName} and age is ${age}</h2>`)
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


//body-parser jonno form server e send korte parsi and server thake response return paitasi
//output
//Server is running at http://localhost:3003
//browser
//form fill up kore submit korle
//Your name is Famid Khandoker and age is 21  //server thake response korbe