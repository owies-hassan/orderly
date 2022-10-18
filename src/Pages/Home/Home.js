import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Home.css'

import {Container} from "@mui/material";
import {getProducts, getTypesOfProducts} from "../../Store/Slices/SliceProducts";
import ProductsMap from "../../Components/ProductsMap/ProductsMap";
import CustomPagination from "../../Components/CustomPagination/CustomPagination";
import Loading from "../../Components/Loading/Loading";
import SwiperProducts from "../../Components/SwiperProducts/SwiperProducts";
import OurHot from "../../Components/OurHot/OurHot";
import useTokenUser from "../../Hooks/UseTokenUser";


const Home = () => {
    const dispatch = useDispatch()
    const {products,loading} = useSelector(state => state.sliceProducts)
    const[category,setCategory]=useState({list:["All","Pizza", "Burger", "Potato", "Steak", "Salad", "Pasta", "Dessert", "Fish"]})
    const [active,setActive]=useState('All')
    const[page,setPage]=useState(0)
    const selectProduct = (type) => {
        if (type === 'All') {
            dispatch(getProducts())
        } else {
            dispatch(getTypesOfProducts(type))
        }
        setActive(type)
    };
    const {user}=useTokenUser()


    useEffect(() => {
      if (user){
          dispatch(getProducts(page))
      }
    }, [page, dispatch])



    return (
        <div className='content-home'>
            <SwiperProducts/>

                <Container>
                    <div className='content-products'>
                        <h2>Our Products</h2>
                        <ul>
                            {category.list.map((item,index)=>{
                                return(
                                    <li className={`${active===item?'active':'inactive'}`} key={item} onClick={()=>selectProduct(item,index)}>{item}</li>
                                )
                            })}

                        </ul>
                    </div>

                    <div className='products'>

                        {loading ? <Loading/> : products.products && products.products.map(item => {
                            return (
                                <ProductsMap key={item._id} item={item}/>
                            )
                        })


                        }
                    </div>
                    {products.length>20&& <CustomPagination setPage={setPage} />}


                </Container>


            <OurHot/>
        </div>
    );
};

export default Home;