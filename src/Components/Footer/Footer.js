import React from 'react';
import {Container} from "@mui/material";
import './Footer.css'
import {NavLink} from "react-router-dom";
const Footer = () => {
    return (
        <div className='section-footer' style={{background:`url(../Image/4.png)`}}>
            <div className='overlay'></div>
            <Container>
                <div className='content-footer'>
                    <div className='part-1'>
                        <h2 className='text-white'>Contact Info</h2>
                        <div className='location'>
                            <p className='link'>(1800) 574 9687</p>
                            <a  href='https://mailto:owies.h.hassan@gmail.com' target='_blank' className='text-gray margin '>owies.h.hassan@gmail.com</a>
                            <a href='http://official-portfolio-owies.surge.sh' target='_blank' className='text-gray'>official-portfolio-owies.surge.sh</a>
                        </div>
                    </div>
                    <div className='part-2 '>
                        <img src='../Image/logo-small.png'/>
                        <p className='text-gray'>Just Burgers</p>
                        <p className='text-gray'>256, baker Street, Suit Building</p>
                        <p className='text-gray'>New Youk, 524</p>
                    </div>
                    <div className='part-3'>

                        <p className='text-white'>Opening Hour</p>
                        <div className='location'>
                            <p className='text-gray'><span>Tuesday- Saturday</span><span>8 AM – 5 PM</span></p>
                            <p className='text-gray'>  <span>Sunday</span><span>12 AM – 8 PM</span></p>
                            <p className='text-gray'><span>Monday</span><span>OFF</span></p>

                        </div>
                    </div>
                </div>

                <div className='copyRight'>
                    <span className='text-gray'>© Copyright 2020 owies hassan</span>
                </div>
            </Container>
        </div>
    );
};

export default Footer;