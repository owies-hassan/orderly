import React, {useEffect, useState} from 'react';
import {Alert, Button, Container, TextField} from "@mui/material";
import ProductsMap from "../../../Components/ProductsMap/ProductsMap";
import {getSearchProducts} from "../../../Store/Slices/SliceProducts";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers, searchUser} from "../../../Store/Slices/SliceUser";
import UsersMap from "../../../Components/UsersMap/UsersMap";
import './DetailsUsers.css'
import Loading from "../../../Components/Loading/Loading";
const DetailsUsers = () => {

    const{StateSearchUser,isError,stateGetAllUsers,loading}=useSelector(state=>state.SliceUser)
    const [search,setSearch]=useState('');


    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(searchUser(search))


    }

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])





    return (

           <>
                <Container>
                   <h3>Details Users</h3>

                   <form className='form' onSubmit={handleSubmit}>
                       <TextField
                           label='search product'
                           fullWidth
                           value={search}
                           onChange={handleChange}
                       />
                       <Button type='submit' size='large' variant='contained' color="error">search</Button>
                   </form>




                   {isError ? <Alert severity="error">{isError}</Alert> : <div className='content-search-user'>
                       {loading?<Loading/>:search.length? StateSearchUser && StateSearchUser.map(item => {
                           return (
                               <UsersMap key={item._id} item={item}/>
                           )
                       }) : stateGetAllUsers && stateGetAllUsers.map(item => {
                           return (
                               <UsersMap key={item._id} item={item}/>
                           )
                       })}

                   </div>
                   }
               </Container>
           </>

    );
};

export default DetailsUsers;