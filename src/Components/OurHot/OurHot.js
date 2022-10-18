import React from 'react';

import './OurHot.css'
import {Container} from "@mui/material";
const OurHot = () => {
    return (
        <div className='section-outHot' style={{background:`url(../Image/2.jpg)`}}>
           <Container>
              <div className='content-outHot'>
                  <div className='part-1'>
                      <div className='img'>
                          <img src='/Image/combo-1.jpg'/>
                      </div>
                      <h1 className='title bg-title'>Deal of <span className='style-span'>Day</span></h1>
                      <div className='part-price' style={{background:'#c4251c'}}>
                          <p className='only'>only</p>
                          <p className='price'>50 $</p>
                      </div>
                  </div>
                  <div className='part-1' >
                      <div className='img'>
                          <img src='/Image/combo-2.jpg'/>
                      </div>
                      <h1 className='title '>Humburg <span className='style-span'>Day</span></h1>
                      <div className='part-price' style={{background:'#f8b92e'}}>
                          <p className='only'>only</p>
                          <p className='price'>50 $</p>
                      </div>
                  </div>
              </div>
           </Container>
        </div>
    );
};

export default OurHot;