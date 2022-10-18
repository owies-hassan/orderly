import React from 'react';
import Card from "../../Card/Card";
import Profile from "../../Profile/Profile";
import {useParams} from "react-router-dom";
import './PageUserProfile.css'
const PageUserProfile = () => {
    const {id,email}=useParams()

    return (
        <div className='admin-profile-user'>
            <Profile id={id} email={email}/>
        </div>
    );
};

export default PageUserProfile;