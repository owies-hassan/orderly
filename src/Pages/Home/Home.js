import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../../Store/Slices/SliceProducts";
import './Home.css'
import ProductsMap from "../../ProductsMap/ProductsMap";
import {Container} from "@mui/material";
const Home = () => {
    const dispatch=useDispatch()
     const {dataProducts}=useSelector(state=>state.SliceProducts)
    const [products,setProducts]=useState([]);
    const domain=process.env.REACT_APP_AUTH0_DOMAIN
    useEffect(()=>{
        dispatch(fetchProducts())

    },[dispatch])

    useEffect(()=>{
        setProducts(dataProducts)

    },[dataProducts])

    const selectProducts = (type) => {
        let filteredProducts = dataProducts.filter(item => item.kind === type)
        if (type==='All'){
            setProducts(dataProducts)
        }else {
            setProducts(filteredProducts)
        }
    };


console.log(products)
    return (
        <div className='content-home'>

           <div className='content-products'>
               <ul>
                   <li><button onClick={()=>selectProducts('All')}>All</button></li>
                   <li><button onClick={()=>selectProducts('pizza')}>Pizza</button></li>
                   <li><button onClick={()=>selectProducts('purger')}>purger</button></li>
                   <li><button onClick={()=>selectProducts('patetas')}>patetas</button></li>
               </ul>
           </div>
            <Container>
          <div className='products'>

                {products && products.map(item => {
                    return (
                        <ProductsMap  key={item.name} name={item.kind} img={item.img} price={item.price} des={item.des}/>
                    )
                })}

          </div>
            </Container>
        </div>
    );
};

export default Home;