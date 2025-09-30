const express=require('express')
const productsController=require('../controller/products')
const router=express.Router()
const {verifyTokenHandler,verifyRoles}=require('../middleware/jwtHandler')
router.get('/', productsController.getAllProducts);
router.get('/',productsController.getProductById);
router.post('/', [verifyTokenHandler, verifyRoles(['admin'])], productsController.createProduct);

router.route('/:id').all( [verifyTokenHandler, verifyRoles(['admin'])]).put(productsController.updateProduct).delete(productsController.deleteProduct)
module.exports=router