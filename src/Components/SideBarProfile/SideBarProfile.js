import React from 'react';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from '@mui/icons-material/Delete';

import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {useLocation} from "react-router-dom";
const SideBarProfile = ({select,setSelect}) => {
         const location=useLocation()
    const checkPath=location.pathname==='/profile'
    const list =['My Account','Products Bought','Products Deleted',checkPath&&'Change Password']


    const icons=[<PersonIcon/>,<ShoppingBagIcon/>,<DeleteIcon/>,checkPath&&<VpnKeyIcon/>]
    return (

            <div className='side_bar'>
                <img src={'/Image/img/logo.png'}/>
                <ul>

                    {list.map((item,index)=>{
                        return(
                            <li key={index} className='list'>
                             {icons[index]}<span onClick={()=>setSelect(item)}> {item}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>

    );
};

export default SideBarProfile;