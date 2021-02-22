import express from 'express'
import data from '../Techno/src/data.js'
const app=express();

app.get('/api/products/:id',(req,res)=>{
    const id=req.params.id
    const product=data.products.find((x)=> x._id===id)

    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({message:'product not found'})
    }
})

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
    console.log(`server at http://localhost:${port}`)
})

