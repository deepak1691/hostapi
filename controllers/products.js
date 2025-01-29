const Product=require("../models/product");

module.exports.getAllProducts=async(req,res)=>{
    const queryObj={};
    let{company,name,sort,select}=req.query;

    if(company ){
        queryObj.company={$regex:company,$options:"i"}
    }

    if(name ){
        queryObj.name={$regex:name,$options:"i"}
    }
  
   
 
    let apiData=Product.find(queryObj);
    if(sort){
        let sortFix=sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }

    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    const data= await apiData;
    
  
    
    res.status(200).json({data});
};


