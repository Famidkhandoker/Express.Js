const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3002;

app.use(bodyParser.urlencoded({ extended: false })); //form method 
app.use(bodyParser.json());   // body-parser means file thake server e data jabe and server thake data response korbe

app.post("/user", (req, res) => {
    const name = req.body.name;
    res.send(`Welcome ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

//output
//Server is running at http://localhost:3002
//browser
//Cannot GET /
//postman use
//Welcome undefined
{
  "name":"Famid Khandoker"
}
Welcome Famid Khandoker


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name}.you are ${age}.`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

//postman use
//{
//    "name":"Famid Khandoker",
//    "age":21
//}
//Welcome Famid Khandoker.you are 21.