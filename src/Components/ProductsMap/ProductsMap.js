import React from 'react';
import './ProductsMap.css'
import {useDispatch, useSelector} from "react-redux";
import {postProducts} from "../../Store/Slices/SliceCard";

const ProductsMap = ({price,name,des,img}) => {


    const dispatch=useDispatch()
    return (
        <div className='content-products-map'>
            <img src={img}/>
            <p className='name-product'>{name}</p>

            <p className='des-product'>{des}</p>
            <p className='price-product'>{price}</p>
            <button onClick={()=>dispatch(postProducts({price,name,des,img}))} className='order-now'>order now</button>
        </div>
    );
};

export default ProductsMap;