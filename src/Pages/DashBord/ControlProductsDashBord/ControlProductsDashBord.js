


import React, {useEffect, useState} from 'react';
import ProductsMap from "../../../Components/ProductsMap/ProductsMap";
import {useDispatch, useSelector} from "react-redux";
import './AddProducts.css'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {categoryProducts} from "../../../ArrayData";
import {getTypesOfProducts} from "../../../Store/Slices/SliceProducts";

const AddProducts = () => {
    const[val,setVal]=useState('')
    const {products} = useSelector(state => state.sliceProducts);
    const dispatch=useDispatch()


    const handleSelect=   (e)=>{
         setVal(e.target.value)
    }


    useEffect(() => {
            dispatch(getTypesOfProducts(val))
    }, [val])


    return (
        <div className='control-products'>
            <div className='search-category'>
                <FormControl  variant="standard" sx={{ m: 1, minWidth: 320 }}>
                    <InputLabel  id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={val}
                        onChange={handleSelect}
                    >

                        {categoryProducts.map(item=>{
                           return(
                               <MenuItem key={item} value={item}>{item}</MenuItem>
                           )
                        })}


                    </Select>
                </FormControl>
            </div>
            <div className='products'>

                {products && products.map(item => {
                    return (
                        <ProductsMap  key={item._id} item={item}/>
                    )
                })}



            </div>
        </div>
    );
};

export default AddProducts;