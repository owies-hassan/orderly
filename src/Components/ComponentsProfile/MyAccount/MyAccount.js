import React, {useEffect, useState} from 'react';
import './MyAccount.css'
import {Button, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import UpdateDataUser from "../UpdateDataUser/UpdateDataUser";
import {useLocation} from "react-router-dom";
const MyAccount = () => {
    const {stateUser}=useSelector(state=>state.SliceUser)
        const[isUpdate,setIsUpdate]=useState(false)
    const location=useLocation()
    const checkPath=location.pathname==='/profile'

    const handleUpdate=()=>{
        setIsUpdate(!isUpdate)
    }
        const styleCheckPath={
        borderLeft:checkPath?'10px solid green':'10px solid #ad221f'
        }
    return (
        <div className='home-profile'>
         <Container>
             {stateUser.length&&(
                 <ul>
                     <li style={styleCheckPath}><span>Name</span> <span>{stateUser[0].name}</span>{checkPath&&<Button onClick={handleUpdate} variant='contained' color='success'>Update</Button>} </li>
                     <li style={styleCheckPath}><span>lastName</span> <span>{stateUser[0].lastName}</span> {checkPath&&<Button onClick={handleUpdate} variant='contained' color='success'>Update</Button>}</li>
                     <li style={styleCheckPath}><span>country</span> <span>{stateUser[0].country}</span> {checkPath&&<Button onClick={handleUpdate} variant='contained' color='success'>Update</Button>}</li>
                     <li style={styleCheckPath}><span>phone</span> <span>{stateUser[0].phone}</span> {checkPath&&<Button onClick={handleUpdate} variant='contained' color='success'>Update</Button>}</li>
                     <li style={styleCheckPath}><span>gender</span> <span>{stateUser[0].gender}</span> {checkPath&&<Button onClick={handleUpdate} variant='contained' color='success'>Update</Button>}</li>
                     <li style={styleCheckPath}><span>date</span> <span>{stateUser[0].updatedAt.split('T')[0]}</span> {checkPath&&<Button onClick={handleUpdate} variant='contained' color='success'>Update</Button>}</li>
                 </ul>
             )}
         </Container>
            {isUpdate&&<UpdateDataUser item={stateUser[0]} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>}
        </div>
    );
};

export default MyAccount;