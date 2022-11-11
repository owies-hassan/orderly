import React, {useEffect, useState} from 'react';
import './Profile.css'
import '../SearchAndViewProducts/SearchAndViewProducts.css'
import SideBarProfile from "../../Components/SideBarProfile/SideBarProfile";
import MyAccount from "../../Components/ComponentsProfile/MyAccount/MyAccount";
import ProductsBought from "../../Components/ComponentsProfile/ProductsBought/ProductsBought";
import ProductsDeleted from "../../Components/ComponentsProfile/ProductsDeleted/ProductsDeleted";
import ChangePassword from "../../Components/ComponentsProfile/ChangePassword/ChangePassword";
import {useDispatch, useSelector} from "react-redux";
import useTokenUser from "../../Hooks/UseTokenUser";
import {getUser} from "../../Store/Slices/SliceUser";
import Loading from "../../Components/Loading/Loading";

const Profile = ({id,email}) => {

    const [select,setSelect]=useState('My Account')

    const {stateUser,loading}=useSelector(state=>state.SliceUser)

    const dispatch=useDispatch()
    const {user}=useTokenUser()
    const handleSelectImgProfile=(e)=>{
        setSelect(e.target.files[0])
    }

    useEffect(() => {
        if (user) {
           if (id||email){
               dispatch(getUser(email))
           }else {
               dispatch(getUser(user.email))
           }
        }
    }, [dispatch])


    return (
        <div className='section-profile'>
            {loading?<Loading/>:<>

                <div className='header'>
                    <div className='bg-img'>
                        <img src='/Image/bg-image.jpg'/>
                    </div>
                    <div className='personal-img'>
                        <img src='/Image/user.png'/>
                    </div>
                </div>
                {stateUser.length && <div className='info-user'>
                    <p>{stateUser[0].name}</p>
                    <p>{stateUser[0].email}</p>
                </div>
                }

                <div className='main-profile'>

                    {select==='My Account'&& <MyAccount/>}



                </div>
            </>}
        </div>
    );
};

export default Profile;