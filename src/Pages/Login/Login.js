import React, {useEffect, useState} from 'react';
import {Alert, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import '../Register/Register.css'
import {useDispatch, useSelector} from "react-redux";
import {postLoginUser} from "../../Store/Slices/SliceUser";
import useTokenUser from "../../Hooks/UseTokenUser";
import {NavLink, useNavigate} from "react-router-dom";
const Login = () => {
    const dispatch= useDispatch()
    const [value, setValue] = useState({
        name: '',
        email: '',
        password: '',
    })
    const {user}=useTokenUser()
    const history=useNavigate()
    const {isError,loading}=useSelector(state=>state.SliceUser)


    const handleChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const data = {
            name: value.name,
            email: value.email,
            password: value.password,
        }
       await dispatch(postLoginUser(data))


    }

    useEffect(() => {

        if (user) {

            history('/')
                window.location.reload();


        }

    }, [dispatch, user])
    return (
        <div className='section-register'>

            <form  onSubmit={handleSubmit} className='content-register'>
                <h1 style={{textAlign: 'center'}}>Login</h1>

                <TextField type='text' label=' name' value={value.name} name='name' onChange={handleChange}/>
                <TextField type='email' label=' email' value={value.email} name='email' onChange={handleChange}/>
                <TextField type='password' label=' password' value={value.password} name='password' onChange={handleChange}/>
                <Button type='submit' variant='contained' color='error'>{loading?'loading...':'Login'}</Button>
                <NavLink className='router' to={'/register'}>Register</NavLink>
                {isError&& <Alert severity="error">{isError}</Alert>}

            </form>


        </div>
    );
};

export default Login;