const mongoose=require('mongoose');

const ProductSchema= new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:[true,"price must be provided"],
        },
        featured:{
            type:Boolean,
            default:false,
        },
        rating:{
            type:Number,
            default:4.9,
        },
        createdAt:{
            type:Date,
            default:Date.now(),
        },
        company:{
            type:String,
            enum:{
                values:["apple","mi","samsung","HP"],
                message:`{value} is not supported`,
            }
        }
});

const Product=mongoose.model("Product",ProductSchema);

module.exports=Product;