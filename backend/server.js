import express from 'express'
import data from '../Techno/src/data.js'
const app=express();

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})

app.get('/api/category',(req,res)=>{
    res.send(data.category)
})

app.get('/',(req,res)=>{
    res.send('server is ready')
})

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server at https://localhost:${port}`)
})

