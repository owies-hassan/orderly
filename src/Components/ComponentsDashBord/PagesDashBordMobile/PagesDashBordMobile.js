import React from 'react';
import {NavLink} from "react-router-dom";
import './PagesDashBordMobile.css'
const PagesDashBordMobile = ({closeNav}) => {
    return (
        <div className='pagesDbMobile'>
            <NavLink onClick={closeNav} to='/DashBord/home'>Home</NavLink>
            <NavLink onClick={closeNav} to='/DashBord/controlProducts'>Products</NavLink>
            <NavLink onClick={closeNav} to='/DashBord/addProducts'>Add Products</NavLink>
            <NavLink onClick={closeNav} to='/DashBord/detailsUsers'>Users</NavLink>
        </div>
    );
};

export default PagesDashBordMobile;