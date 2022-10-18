import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTypesOfProducts, postProducts, updateProductAdmin} from "../../../Store/Slices/SliceProducts";
import {Alert, Button, Container, TextField} from "@mui/material";
import './AddProducts.css'
import FormAddProducts from "../../../Components/ComponentsDashBord/FormAddProducts/FormAddProducts";
const AddProducts = () => {
const {newProduct}=useSelector(state=>state.sliceProducts)

    return(

         <div className='content-addProduct'>
            <Container>
                <h3 style={{fontSize:'30px'}} className='title'>Add Products</h3>

                <FormAddProducts/>
                {newProduct.name? <div className='content-products-map'>
                    <div className='img'>
                        <img src={`http://localhost:8000/public/${newProduct.productImage}`}/>
                    </div>
                    <div className='info'>
                        <p className='name-product'>{newProduct.name}</p>
                        <p className='des-product'>{newProduct.ingredients}</p>
                        <p className='price-product'>{newProduct.price}</p>
                    </div>
                </div>:<Alert  severity="error" className='style-alert'>
                    no new Product
                </Alert>}
            </Container>
         </div>

    )

};

export default AddProducts;