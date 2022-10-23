
const express=require('express');

const router=express.Router();

const {postRegister,postLogin,getRegisters, searchUser,getUser, updateUser,setControllerAdmin}=require('../Controllers/UserControllers')
const {checkAdmin, verifyToken} = require("../MiddleWare/Token");



router.patch('/update/:id',updateUser)


router.post('/register',postRegister);
router.get('/register',getRegisters)
router.post('/login',postLogin)
router.get('/search/:name',searchUser)


router.get('/:email',getUser)

router.use(verifyToken)
router.use(checkAdmin)
router.patch('/setAdmin/:id',setControllerAdmin)
module.exports=router;



