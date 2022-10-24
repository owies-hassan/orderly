
const express=require('express');

const router=express.Router();

const {postRegister,postLogin,getRegisters, searchUser,getUser, updateUser,setControllerAdmin}=require('../Controllers/UserControllers')
const {checkAdmin, verifyToken} = require("../MiddleWare/Token");






router.post('/register',postRegister);

router.post('/login',postLogin)






router.use(verifyToken)
router.get('/register',getRegisters)
router.get('/search/:name',searchUser)
router.get('/:email',getUser)
router.patch('/update/:id',updateUser)
router.use(checkAdmin)

router.patch('/setAdmin/:id',setControllerAdmin)




module.exports=router;



