


const mongoose=require('mongoose')
const schema=mongoose.Schema


const order=new schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    productImage: {type: String, require: true},
    ingredients: {type: String, require: true},
    res_id:{type:mongoose.Schema.Types.ObjectId, require: true},

},{timestamps:true})

const modelOrder=mongoose.model('order',order)

module.exports=modelOrder;