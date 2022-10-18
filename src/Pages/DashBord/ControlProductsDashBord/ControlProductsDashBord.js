


import React, {useEffect, useState} from 'react';
import ProductsMap from "../../../Components/ProductsMap/ProductsMap";
import {useDispatch, useSelector} from "react-redux";
import './ControlProductsDashBord.css'
import {Alert, Container, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {categoryProducts} from "../../../ArrayData";
import {getTypesOfProducts} from "../../../Store/Slices/SliceProducts";
import Loading from "../../../Components/Loading/Loading";

const ControlProductsDashBord = () => {
    const[val,setVal]=useState('')
    const {products,loading,isError,detailsError} = useSelector(state => state.sliceProducts);
    const dispatch=useDispatch()


    const handleSelect=   (e)=>{
         setVal(e.target.value)
    }


    useEffect(() => {
            dispatch(getTypesOfProducts(val))
    }, [val])




    return (
        <div className='control-products' >
            {loading?<Loading/>: <Container>
                <h3 style={{fontSize:'30px'}} className='title'>Add Products</h3>
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


                {detailsError&& <Alert variant="filled" severity="error" className='style-alert'>
                   {detailsError}
                </Alert>}
                <div className='products'>

                    {products.length && products.products.map(item => {
                        return (
                            <ProductsMap  key={item._id} item={item}/>
                        )
                    })}



                </div>
            </Container>}
        </div>
    );
};

export default ControlProductsDashBord;