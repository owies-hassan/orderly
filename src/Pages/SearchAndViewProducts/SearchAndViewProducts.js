import React, {useState} from 'react';
import {Button, Container, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getSearchProducts} from "../../Store/Slices/SliceProducts";
import ProductsMap from "../../Components/ProductsMap/ProductsMap";
import './SearchAndViewProducts.css'

const SearchAndViewProducts = () => {
    const [search,setSearch]=useState('');
    const{searchProducts}=useSelector(state=>state.sliceProducts)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(getSearchProducts(search))
        console.log(search)
    }


    return (
        <div className='section-search'>
         <Container>
             <form className='form'>
                 <TextField
                     label='search product'
                     fullWidth
                     value={search}
                     onChange={handleChange}
                 />
                 <Button size='large' onClick={handleSubmit} variant='contained' color="error">search</Button>
             </form>
             <div className='content-search'>

                 {searchProducts && searchProducts.map(item => {
                     return (
                         <ProductsMap  key={item._id} item={item}/>
                     )
                 })}
             </div>
         </Container>
        </div>
    );
};

export default SearchAndViewProducts;