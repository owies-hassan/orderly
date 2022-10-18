import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {imageProducts} from "../../ArrayData";
import 'swiper/css';
import './SwiperProducts.css'
import {Container} from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';

const SwiperProducts = () => {
    const auto={
        delay:3000,
        disableOnInteraction:true
    };
    return (
     <div className='section-swiper' style={{background:`url(../Image/slider-bg.jpg)`}}>
      <Container>
          <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
              spaceBetween={2}
              slidesPerView={1}

              autoplay={auto}
              loop={true}
              pagination={true}
          >
              {imageProducts.map((item,index)=>{
                  return(

                      <SwiperSlide key={index}>
                          <div className='content-slider'>
                              <div className='image'>
                                  <img className='style-img' src={item.img}/>
                              </div>
                              <div className='info-image'>
                                  <h1>{item.title}</h1>
                                  <p className='para'>{item.paragraph}</p>
                                  <p className='desc'>{item.desc}</p>
                              </div>
                          </div>
                      </SwiperSlide>

                  )
              })}
              ...
          </Swiper>
      </Container>
     </div>
    );
};

export default SwiperProducts;