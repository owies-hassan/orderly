import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Container} from "@mui/material";
import './Header.css'
import {NavLink, useLocation} from "react-router-dom";




const Header = () => {
    const location=useLocation();


    return (

        <div className='section-header' style={{backgroundImage: `url("Image/img/slider-bg.jpg")`}}>
            <Container>
                <div className='content-header'>
                    <div className='logo'>
                        <img src='./Image/img/logo.png'/>
                    </div>
                    <div className='pages'>
                        <ul>
                            <NavLink to='/'> <li>Home</li></NavLink>
                            <NavLink to='/Card'> <li>Card</li></NavLink>
                            <NavLink to='/Products'> <li>Products</li></NavLink>
                            <NavLink to='/DashBord'> <li>DashBord</li></NavLink>
                        </ul>
                    </div>
                    <div className='phone-number'>
                        <p>0096170778348</p>
                    </div>
                </div>
            </Container>
            <div className='footer-header'>
                {location.pathname==='/'&&'Home'}
                {location.pathname==='/Card'&&'Card'}
                {location.pathname==='/Products'&&'Products'}
                {location.pathname==='/DashBord'&&'DashBord'}
            </div>

        </div>

    );
};

export default Header;