

const Order=require('../Modules/OrderModel')




const postOrder = async (req, res) => {
    const {name, price, ingredients, productImage} = req.body;

    try {
        const res_id = req.user._id;

        const order = await Order.create({name, price, ingredients, productImage, res_id})

        res.status(200).json(order)


    } catch (err) {
        console.log(err.message)
    }

}
const getOrder = async (req, res) => {

    try {
        const res_id = req.user;
        const order = await Order.find({res_id})
        res.status(200).json(order)

    } catch (err) {
        console.log(err.message)
    }

}
const getOrders=async (req,res)=>{


    try {
        const orders=await Order.find({});
        res.status(200).json(orders)
    }catch (err){
        res.status(404).json({msg:'can not fetch all orders'})
    }

}
const deleteOrder = async (req, res) => {
    const {id} = req.params;
    const order = await Order.findByIdAndDelete(id)
    res.status(200).json(order)
    try {

    } catch (err) {
        res.status(404).json({msg: 'can not delete this product'})
    }
}
const deleteAllOrders = async (req, res) => {
    const {id} = req.params;
    const order = await Order.deleteMany({id})
    res.status(200).json(order)
    try {

    } catch (err) {
        res.status(404).json({msg: 'can not delete this product'})
    }
}

const findAdminOrderUser=async (req,res)=>{
    const {res_id}=req.params
          const order=await Order.find({res_id})
    res.status(200).json(order)
    try {

    }catch (err){
        res.status(404).json({msg:'no product admin'})
    }
}


module.exports={postOrder,getOrder,deleteOrder,deleteAllOrders,getOrders,findAdminOrderUser}