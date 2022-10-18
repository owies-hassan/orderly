import React from 'react';
import './Card.css'
import {useSelector} from "react-redux";
import ProductsMap from "../../ProductsMap/ProductsMap";
import {Container} from "@mui/material";
const Card = () => {
    const {productsBuy}=useSelector(state=>state.SliceCard)

    return (
      <Container>
          <div className='products-bought'>
              {productsBuy.length ? productsBuy.map(item => {
                  return (
                      <ProductsMap key={item.name} name={item.kind} img={item.img} price={item.price} des={item.des}/>

                  )
              }) : 'there is no order'}
          </div>
      </Container>
    );
};

export default Card;