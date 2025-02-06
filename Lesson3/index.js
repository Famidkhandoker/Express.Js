const app=require('./app');
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

//output
//server is running at http://localhost:5000
//browser
//http://localhost:5000/
//I am a get request at home route

//http://localhost:5000/register
//I am a get request at register route

//http://localhost:5000/login
//I am a get request at login route

//http://localhost:5000/fif
//404!!! Not a vaild url


