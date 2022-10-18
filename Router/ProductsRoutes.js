const express=require('express');
const router=express.Router();
const {getProducts,postProducts, getSpecialProduct, deleteProduct, updateProduct,searchProduct,commentPost}=require('../Controllers/ProductsControllers')
const {verifyToken,checkAdmin} = require("../MiddleWare/Token");
const upload=require('../MiddleWare/UploadImg')



router.use(verifyToken)

router.get('/', getProducts)

// in home
router.get('/:name', getSpecialProduct)

//in products search


router.get('/search/:name', searchProduct)



router.use(checkAdmin)

router.delete('/:id', deleteProduct)
router.post('/' ,upload,postProducts)


router.patch('/:id', updateProduct)

//testing add comment
router.post('/:id/comment',commentPost)

module.exports = router;