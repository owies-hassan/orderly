
const User=require('../Modules/UserModel')
const bcrypt=require('bcrypt')
const {createToken} = require("../MiddleWare/Token");
const validator=require('validator')

const postRegister=async (req,res)=>{
    const {name,email,password,lastName,country,phone,gender}=req.body

    if (!name || !email|| !password|| !lastName|| !country|| !phone|| !gender){
        res.status(404).json({msg:'missing failed',success:false})
        return;
    }
    if (!validator.isEmail(email)){
        res.status(404).json({msg:'this email not valid',success:false})
        return;

    }
    if (!validator.isStrongPassword(password)){
        res.status(404).json({msg:'password must be strong',success:false})
        return;
    }


    const user=await User.findOne({email});

    if (user){
        res.status(404).json({msg:'this email already  exist',success:false})

        return;
    }

    try {
        const hashPassword=await bcrypt.hash(password,12);

        const user=await User.create({name,email,lastName,country,phone,gender,password:hashPassword})
        const token=createToken(user._id,user.isAdmin)
        res.status(200).json({name,email,lastName,country,phone,gender,password,token})

    }catch (err){

        res.status(404).json({msg:'error post',success:false})

    }


}

const postLogin=async (req,res)=>{

    const {name,email,password}=req.body;
    if (!name|| !email || !password ){
        res.status(404).json({msg:'missing field',success:"false"});
        return;
    }

    const user=await User.findOne({email})

    if (!user){
        res.status(404).json({msg:'this email do not found',success:false})
    }

    try{


        if (await bcrypt.compare(password,user.password)){
            const token=createToken(user._id,user.isAdmin)
            res.status(200).json({token,email,name})
        }
        else {
            res.status(404).json({msg:'wrong password',success:false})
        }
    }
    catch (err){}


}

const getRegisters=async (req,res)=>{

   try {
       const user=await User.find({});
       res.status(200).json(user)
   }catch (err){
       console.log(err)
   }
}


const searchUser=async (req,res)=>{
    const {name}=req.params;

    try {
        const user= await User.find({name})
        if (!user.length){
            res.status(401).json({msg:'this name do not found'})
           return;
        }
        res.status(200).json(user)

    }catch (err){
        res.status(404).json({msg:err.message})
    }
}

const getUser=async (req,res)=>{
    const {email}=req.params
    try {
        const user=await User.find({email})
        res.status(200).json(user)

    }catch (err){
        res.status(402).json({msg:err.message})
    }
}

const updateUser=async (req,res)=>{

    const {id}=req.params;

    try {
        const user=await User.findByIdAndUpdate(id,{...req.body})
        res.status(200).json(user)

    }catch (err){
        res.status(404).json({msg:err.message})
    }
}




module.exports={postLogin,postRegister,getRegisters,searchUser,getUser,updateUser}