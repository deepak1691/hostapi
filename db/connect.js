require('dotenv').config({ path: '../.env' });

const mongoose=require('mongoose');

const connectDB=async()=>{
   try {
    await mongoose.connect(process.env.MONGODB_URL,{
        useNewURLParser:true,
        useUnifiedTopology:true,
    });

   } catch (error) {
        console.log(error);
   }
};

module.exports=connectDB;