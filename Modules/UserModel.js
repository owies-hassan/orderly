
const mongoose=require('mongoose');

const schema=mongoose.Schema;

const user=new schema({
    name:{type:String,require:true},
    lastName:{type:String,require:true},
    gender:{type:String,require:true},
    country:{type:String,require:true},
    phone:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    imgProfile:{type:String},
    imgBgProfile:{type:String},
    productsBought:{type:[String]},
    isAdmin:{type:Boolean},


},{timestamps:true})

const modelUser=mongoose.model('Users',user);


module.exports=modelUser;