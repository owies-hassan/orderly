import React, {Fragment, useEffect, useState} from 'react';
import './ProductsMap.css'
import {Button, TextField} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postOrders} from "../../Store/Slices/SliceOrder";
import {
    addCommentsUser,
    deleteProductAdmin,
    getTypesOfProducts,
    updateProductAdmin
} from "../../Store/Slices/SliceProducts";

import UpdateProducts from "../ComponentsDashBord/UpdateProducts/UpdateProducts";
import {motion} from "framer-motion";


const ProductsMap = ({item}) => {
    const dispatch=useDispatch()
    const[isUpdate,setIsUpdate]=useState(false)
    const[comment,setComment]=useState('')
    const location=useLocation()
    const handleChange=(e)=>{
        setComment(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const handleOrder=()=>{
        dispatch(postOrders(item))
    }
    const handleDeleteByAdmin = async (id) => {
       await dispatch(deleteProductAdmin(id))
        dispatch(getTypesOfProducts(item.name))
    }
    const handleUpdateByAdmin=(id)=>{

        setIsUpdate(!isUpdate)
    }

    //testing comment
    const handleComment= async (id)=>{

        const data=  `oijohjohio`
        await dispatch(addCommentsUser([id,'asdasd']))




    }
const styleProduct={

    hover:{
        scale:1.1,
        boxShadow:  'rgba(0, 0, 0, 0.22) 0px 15px 12px'
    },

}
    return (
        <Fragment>

            <motion.div className='content-products-map' variants={styleProduct}  whileHover='hover' >
                <div className='img'>
                    <img src={`http://localhost:8000/public/${item.productImage}`}/>
                </div>
                <div className='info' style={{position:'relative'}}>
                    <div className='update-product'>
                        {isUpdate&& <UpdateProducts item={item} setIsUpdate={setIsUpdate} isUpdate={isUpdate}/>}
                    </div>
                    <p className='name-product'>{item.name}</p>
                    <p className='des-product'>{item.ingredients}</p>
                    <p className='price-product'>{item.price}</p>
                    {location.pathname!=='/DashBord/controlProducts'?
                        <Button className='order' onClick={handleOrder} variant='contained' color="error" >order now</Button>:
                        <div className='edit_remove'>
                            <Button onClick={()=>handleDeleteByAdmin(item._id)} variant='contained' color="error" >Delete</Button>
                            <Button onClick={()=>handleUpdateByAdmin(item._id)} variant='contained' color="success" >Edit</Button>
                        </div>
                    }
                </div>
            </motion.div>


            {location.pathname==='/Products'&&<div>
                <form onSubmit={handleSubmit}>
                    <TextField placeholder={item._id} fullWidth value={comment} label='your comment' onChange={handleChange} />
                    <Button onClick={()=>handleComment(item._id)} type='submit' variant='contained'color='error'>Post</Button>
                </form>
                {item.comments?<p>{item.comments}</p>:''}
            </div>}

        </Fragment>
    );
};

export default ProductsMap;