import React from 'react';
import './UsersMap.css'
import {useNavigate} from "react-router-dom";
const UsersMap = ({item}) => {

const history=useNavigate()

    const detailsUser=(email)=>{

        history(`/DashBord/detailsUsers/profileUser/${item._id}/${item.email}`)
    }
    return (
        <div onClick={()=>detailsUser(item.email)} className='content-details-user'>
                <div className='img'>
                    {/*<img src={`http://localhost:8000/public/${item.productImage}`}/>*/}
                    <img src={'../Image/user.png'}/>
                </div>
            <div className='info'>
                <p className='name-product'>{item.name}</p>
                <p className='des-product'>{item.email}</p>
            </div>

        </div>
    );
};

export default UsersMap;