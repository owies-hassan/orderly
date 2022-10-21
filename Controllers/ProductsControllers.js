
const Products=require('../Modules/ProductsModel')
const mongoose = require("mongoose");





const getProducts=async (req,res)=>{
    const page = req.query.p||0 ;
    const perPage = 10;




    try {

        const products=await Products.find({})
            .skip(page*perPage)
            .limit(perPage)

        const len= await Products.find({})
        res.status(200).json({length: len.length,products:products})

        // const pro=await Products.find({})
        // const length=pro.length
        // const filter=pro.filtere(item=>item===name)
        //




    } catch (err) {
       res.status(404).json({msg:err.message})

    }
}

const postProducts= async (req,res)=>{

  const productImage=req.file.filename
    const {name,price,desc,ingredients}=req.body;

    if (!name|| !price|| !desc|| !ingredients){
        res.status(404).json({msg:'missing field'})
        return;
    }
    try {

        const products=await Products.create({name,price,desc,ingredients,productImage})
        res.status(200).json(products)

    }catch (err){
        res.status(401).json({msg:err.message})
        console.log('err can not post')
    }
}

const getSpecialProduct=async (req,res)=>{
    const {name}=req.params;

    try {
        const product=await Products.find({name})




        res.status(200).json({length: product.length,products:product})
    }catch (err){
        console.log('error get product')
        res.status(401).json({msg:err.message})
    }
}

const searchProduct=async (req,res)=>{
    const {name}=req.params;
    const product=await Products.find({name})
    try {
        if (!product.length){
            res.status(404).json({msg:'this products do not found'})
          return;
        }

        res.status(200).json(product)


    }catch (err){
        console.log('error search product')
        res.status(401).json({msg:err.message})
    }
}

const deleteProduct=async (req,res)=>{
    const {id}=req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:'can not delete by id failed'})
    }

    try {
        const product=await Products.findByIdAndDelete(id)
        res.status(200).json(product)
    }catch (err){
        console.log('error delete product')
        res.status(401).json({msg:err.message})
    }
}


const updateProduct=async (req,res)=>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:'failed can not update by id'})
    }

    try {
        const product=await Products.findByIdAndUpdate(id,{...req.body})
        res.status(200).json(product)
    }catch (err){
        console.log('error update product')
        res.status(404).json({msg:err.message})
    }
}




// usersImg update comment
 const commentPost = async (req, res) => {
    // const { id } = req.params;
    // const { value } = req.body;
    //
    // const post = await Products.findById(id);
    //
    // post.comments.push(value);
    //
    // const updatedPost = await Products.findByIdAndUpdate(id, post, { new: true });
    //
    // res.json(updatedPost);

     const { id } = req.params;
     const { value } = req.body;

     const post = await Products.findByIdAndUpdate(id,{...req.body,comments:value});



     res.json(post);
};







module.exports={getProducts,postProducts,getSpecialProduct,deleteProduct,updateProduct,searchProduct,commentPost}