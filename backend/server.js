import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import useRoute from './routes/userRoutes';
import productRoute from './routes/productRoutes';
import bodyParser from 'body-parser';

dotenv.config();
const mongodburl = config.MONGODB_URL;
mongoose.connect(mongodburl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users",useRoute);
app.use("/api/products",productRoute);

// app.get("/api/products",(req,res)=>{
//     res.send(data.products);
// });

// app.get("/api/products/:id",(req,res)=>{
//     const productId = req.params.id;
//     const product =data.products.find(x=>x.id === productId);
//     if(product)
//         res.send(product);
//     else
//         res.status(404).send({msg:"Product Not Found"})
// });

app.listen(5000,()=> {console.log("Server started")});
