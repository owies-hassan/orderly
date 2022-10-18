
require('dotenv').config()
const jwt=require('jsonwebtoken')
const User=require('../Modules/UserModel')
const createToken=(_id,isAdmin)=>{
  return jwt.sign({_id,isAdmin},process.env.SECRET)
}

const verifyToken = async (req, res,next) => {


  const {authorization}=req.headers;

  if (!authorization) {
   return  res.status(404).status({msg: 'no auth'})
  }
  const token = authorization.split(' ')[1];

  try {
    const {_id,isAdmin} = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({_id})
    req.isAdmin=await User.findOne({isAdmin})


    next()
  } catch (err) {
    res.status(401).json({msg:'error no token'})
  }
}

const checkAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
     res.status(404).json({msg: `can't access here you are not admin`})
    return;
  }else {
    next()
  }
}


module.exports={createToken,verifyToken,checkAdmin}