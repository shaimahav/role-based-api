const productQueries=require('../query/products')
const pool=require('../config/db')
const getAllProducts=()=>{
    return new Promise((resolve,reject)=>{
         pool.query(productQueries.getAllProducts,(error,results)=>{
        if(error){
            reject(error)
        }
        else{
            resolve(results.rows)
        }
        
    })
    })
   
}
const getProductById=(id)=>{
    return new Promise((resolve,reject)=>{
        pool.query(productQueries.getProductById,[id],(error,results)=>{
        if(error) {
            reject(error)
        }
        else{
            resolve(results.rows)
        }
    })
    })
}
const createProduct=( product_name,price,offer_price,image )=>{
    return new Promise((resolve,reject)=>{
        pool.query(productQueries.createProduct,[ product_name,price,offer_price,image ],(error,results)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(true)
            }
        })
    })
}
const checkCourseExistById=(id)=>{
     return new Promise((resolve,reject)=>{
        pool.query(productQueries.getProductById,[id],(error,results)=>{
        if(error) {
            reject(false)
        }
        else{
            resolve(results.rows.length)
        }
    })
    })
}
const updateProduct=(product_name,price,offer_price,image,id)=>{
    return new Promise((resolve,reject)=>{
       pool.query(productQueries.updateProduct,[product_name,price,offer_price,image,id],(error,results)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(results.rows)
            }
        })
    })
}
const deleteProduct=(id)=>{
    return new Promise((resolve,reject)=>{
        pool.query(productQueries.deleteProduct,[id],(error,results)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(results.rows)
            }
        })
    })
}

module.exports={
getAllProducts,
getProductById,
createProduct,
checkCourseExistById,
updateProduct,
deleteProduct
}