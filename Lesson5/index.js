const app=require('./app');
const PORT=3006;
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});