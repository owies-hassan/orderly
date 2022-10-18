import React from 'react';

import '../ProductsMap/ProductsMap.css'
import {Alert, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {deleteOrders, getOrders} from "../../Store/Slices/SliceOrder";
import './OrdersMap.css'
import useAlert from "../../Hooks/useAlert";

const OrdersMap = ({item,checkPath}) => {
    const dispatch=useDispatch()
    const handleDelete=async ()=>{
       await dispatch(deleteOrders(item._id))
        dispatch(getOrders())
    }

    return (
        <div className=' content-products-map'>
                <div className='img'>
                    <img src={`http://localhost:8000/public/${item.productImage}`}/>
                </div>
                <div className='info'>
                    <p className='name-product'>{item.name}</p>
                    <p className='des-product'>{item.ingredients}</p>
                <p className='price-product'>{item.price}</p>
                    {checkPath&&<Button onClick={handleDelete} variant='contained' color='error'>Delete</Button>}
            </div>

        </div>

    );
};

export default OrdersMap;