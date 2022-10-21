
const express=require('express');

const router=express.Router();

const {postRegister,postLogin,getRegisters, searchUser,getUser, updateUser,setControllerAdmin}=require('../Controllers/UserControllers')
const {verifyToken} = require("../MiddleWare/Token");
const uploadImgUser=require('../MiddleWare/uploadImgUser')


router.patch('/update/:id',updateUser)
router.patch('/setAdmin/:id',setControllerAdmin)

router.post('/register',postRegister);
router.get('/register',getRegisters)
router.post('/login',postLogin)
router.get('/search/:name',searchUser)


router.get('/:email',getUser)


module.exports=router;



