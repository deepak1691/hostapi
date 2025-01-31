require('dotenv').config({path:"./.env"});


const express=require('express');
const app=express();
const connectDB=require("./db/connect");
let port=process.env.port ||8080;

const cors = require('cors');
// Allow requests from your frontend
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


const product_routes=require("./routes/products");

app.get("/",(req,res)=>{
    res.send("helllo");
});

// middleware 
app.use("/api/products",product_routes);

const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port,()=>{
            console.log("connected sucessfully");
        })
    } catch (error) {
        console.log(error.message);
    }
}

start();

