import React from 'react';
import './SideBar.css'
import CottageIcon from '@mui/icons-material/Cottage';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import {NavLink} from "react-router-dom";
const SideBar = () => {
    const router =['Home','controlProducts','addProducts','detailsUsers']
    const nameRouter=['Home','Products','Ad Products','Users']
    const icons=[<CottageIcon/>,<ShoppingBagIcon/>,<ShoppingCartIcon/>,<PersonIcon/>]
    return (
        <div className='side_bar'>
            <img src={'/Image/logo.png'}/>
            <ul>
                {router.map((item,index)=>{
                    return(
                        <li key={index} className='list'>
                            <NavLink to={`DashBord/${item}`}> {icons[index]}<span> {nameRouter[index]}</span></NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SideBar;