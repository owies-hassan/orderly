import React, {useEffect, useState} from 'react';
import {Alert, Button, Container, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getSearchProducts} from "../../Store/Slices/SliceProducts";
import ProductsMap from "../../Components/ProductsMap/ProductsMap";
import './SearchAndViewProducts.css'
import ValidateSearch from "../../Components/GlobalFunction/ValidateSearch";
import Loading from "../../Components/Loading/Loading";

const SearchAndViewProducts = () => {
    const [search,setSearch]=useState('');
    const{searchProducts,isError,loading}=useSelector(state=>state.sliceProducts)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()


        dispatch(getSearchProducts(ValidateSearch({search})))

    }

    useEffect(()=>{
       if (!search){
           dispatch(getSearchProducts('Burger'))
       }
    },[])


    return (
        <div className='section-search'>

            <Container>
                <form className='form' onSubmit={handleSubmit}>
                    <TextField
                        label='search product'
                        fullWidth
                        value={search}
                        onChange={handleChange}
                    />
                    <Button type='submit' size='large' variant='contained' color="error">search</Button>
                </form>

                {isError ? <Alert severity="error">{isError}</Alert> : <div className='content-search'>

                    {loading?<Loading/>: searchProducts.length && searchProducts.map(item => {
                        return (
                            <ProductsMap key={item._id} item={item}/>
                        )
                    })}
                </div>}

            </Container>

            }
        </div>
    );
};

export default SearchAndViewProducts;