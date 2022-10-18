



const express=require('express')
const router=express.Router()
const {postOrder,getOrder,deleteOrder, deleteAllOrders,getOrders,findAdminOrderUser}=require('../Controllers/OrderControllers')
const {verifyToken} = require("../MiddleWare/Token");


router.use(verifyToken)

router.post('/', postOrder)
router.get('/', getOrder)
router.get('/all',getOrders)
router.delete('/:id', deleteOrder)
router.delete('/deleteAll/:id', deleteAllOrders)

router.get('/findAdminOrder/:res_id',findAdminOrderUser)

module.exports=router;



// {
//     "name": "pasta",
//     "ingredients": "Our flavors & ingredients to build our local burgers.",
//     "price": 220,
//     "productImage": "pasta2.jpg",
//
// }