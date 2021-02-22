import express from 'express';
import mongoose from 'mongoose';
import data from '../Techno/src/data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
const app=express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/Techno', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});
// app.get('/api/products',(req,res)=>{
//     res.send(data.products)
// })

app.get('/api/category',(req,res)=>{
    res.send(data.category)
})
// userRouter,productRouter
app.use('/api/users' , userRouter);
app.use('/api/products' ,productRouter);

app.get('/',(req,res)=>{
    res.send('server is ready')
})

app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server at https://localhost:${port}`)
})

