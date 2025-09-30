const getAllProducts='SELECT  product_id,product_name,price,offer_price,image FROM products'
const getProductById='SELECT  product_id,product_name,price,offer_price,image FROM products WHERE product_id=$1'
const updateProduct='UPDATE  products SET product_name=$1,price=$2,offer_price=$3,image=$4 WHERE product_id=$5'
const createProduct='INSERT INTO products(product_name,price,offer_price,image)  VALUES($1,$2,$3,$4)'
const deleteProduct='DELETE FROM products WHERE product_id=$1'
module.exports={
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
}