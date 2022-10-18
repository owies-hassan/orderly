


const mongoose=require('mongoose');

const schema=mongoose.Schema;


const products = new schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    desc: {type: String, require: true},
    productImage: {type: String},
    ingredients: {type: String, require: true},

    // comments:{type:mongoose.Schema.Types.ObjectId},

    // comments:[{name:String,location:String}]
    comments:{type :[String],default:[]}


}, {timestamps: true});


const modelProducts=mongoose.model('products',products);

module.exports=modelProducts;