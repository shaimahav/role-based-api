const pool=require('../config/db')
const productQueries=require('../query/products')
const productsRepositories=require('../repositories/products')
const ErrorResponse=require('../utils/errorResponse')
const asyncHandler=require('../middleware/asyncHandler')
const getAllProducts=asyncHandler(async (req,res,next)=>{
   
     const products=await productsRepositories.getAllProducts() 
    // console.log(products) 
    res.status(200).json({success:true,data:products});
  
})
const getProductById=asyncHandler(async (req,res,next)=>{
   const id=req.params.id
   const product=await productsRepositories.getProductById(id);
        if(product&&product.length)
        {
            return  res.status(200).json({success:true,data:product})
        }
        else{
            next(new ErrorResponse(`product with id:${id} does not exist`,404))
        }
     
})
const updateProduct=asyncHandler(async (req,res,next)=>{
    const id=req.params.id
    const { product_name,price,offer_price,image }=req.body
    try{
        const courseExist=await productsRepositories.checkCourseExistById(id)
        if(courseExist)
        {
            const result=await productsRepositories.updateProduct(product_name,price,offer_price,image,id)
            res.status(200).json({message:"Updated successfully"})
        }
        else{
            next(new ErrorResponse(`product with id${id} doesn't exist`,404))
        }
    }
    catch(error){
        next(error)}
})
const createProduct=asyncHandler(async (req,res,next)=>{
    const { product_name,price,offer_price,image }=req.body
    const created=await productsRepositories.createProduct(product_name,price,offer_price,image)
    if(created){
        res.status(201).json({success:true,data:{message:"Successfully created product"}})
    }
})
const deleteProduct=asyncHandler(async (req,res,next)=>{
    const id=req.params.id
  
    const courseExist=await productsRepositories.checkCourseExistById(id)
    if(courseExist){
        const result=await productsRepositories.deleteProduct(id)
        res.status(200).json({message:"Deleted Successfully"})
    }
    else{
        next(new ErrorResponse(`product with ${id} doesnt exist`,404))
    }
  
})
module.exports={
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
}