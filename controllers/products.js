const Product=require("../models/product");
const NodeCache =require("node-cache");

const myCache = new NodeCache();

module.exports.getAllProducts=async(req,res)=>{
    let product;

    const queryObj={};
    let{company,name,sort,select}=req.query;

    if(company ){
        queryObj.company={$regex:company,$options:"i"}
    }

    if(name ){
        queryObj.name={$regex:name,$options:"i"}
    }
  
   
 
   
    if(sort){
        let sortFix=sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }

    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    if(myCache.has("products")){
        product=JSON.parse(myCache.get("products"));
        res.status(200).json(product);
    }else{
        let product=Product.find(queryObj);
        const data= await product;
    
        myCache.set("products",JSON.stringify(data));
        res.status(200).json(data);
    }
    
  
};

// for update data use
//? after save()
//! myCache.del("products")

