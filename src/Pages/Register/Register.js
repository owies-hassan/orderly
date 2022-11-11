import React, {useEffect, useState} from 'react';
import {Box, Button, FormControl, InputLabel, Select, TextField, MenuItem, Container, Alert} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Register.css'
import {useDispatch, useSelector} from "react-redux";
import {postRegisterUser} from "../../Store/Slices/SliceUser";
import {NavLink, useNavigate} from "react-router-dom";
import useTokenUser from "../../Hooks/UseTokenUser";

const Register = () => {
    const history=useNavigate()
    const dispatch=useDispatch()
    const {user}=useTokenUser()

    const [value, setValue] = useState({
        name: '',
        lastName: '',
        email: '',
        country: '',
        password: '',
        phone: '',
        gender: ''
    })
    const [gender, setGender] = React.useState('');

    const {isError,loading}=useSelector(state=>state.SliceUser)

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }
    const handleSubmit =async (e) => {
        e.preventDefault()
        const data = {
            name: value.name,
            lastName: value.lastName,
            email: value.email,
            country: value.country,
            password: value.password,
            phone: value.phone,
            gender: gender
        }
        await dispatch(postRegisterUser(data))

    }

    const handleSelect = (e) => {
        setGender(e.target.value)
    };


    useEffect(() => {

        if (user) {

            history('/')
            window.location.reload();
        }

    }, [dispatch, user])

    return (

        <div className='section-register'>

            <form onSubmit={handleSubmit} className='content-register'>
                <h1 style={{textAlign: 'center'}}>Register</h1>

                <div className='style-input'>
                    <TextField type='text' label=' name' value={value.name} name='name' onChange={handleChange}/>
                    <TextField type='text' label='last name' value={value.lastName} name='lastName' onChange={handleChange}/>
                </div>

                <div className='style-input'>
                    <TextField type='text' label='country ' value={value.country} name='country' onChange={handleChange}/>
                    <TextField type='number' label=' number phone' value={value.phone} name='phone' onChange={handleChange}/>
                </div>
                <FormControl>
                    <InputLabel>gender</InputLabel>
                    <Select

                        id="demo-simple-select"
                        value={gender}
                        label="gender"
                        onChange={handleSelect}
                    >
                        <MenuItem value={'male'}>male</MenuItem>
                        <MenuItem value={'female'}>female</MenuItem>
                    </Select>
                </FormControl>
                <TextField type='email' label=' email' value={value.email} name='email' onChange={handleChange}/>
                <TextField type='password' label=' password' value={value.password} name='password'
                           onChange={handleChange}/>
                <Button type='submit' variant='contained' color='error' >{loading ? 'loading...' : 'Register'}</Button>
                <NavLink className='router' to={'/login'}>Login</NavLink>
                {isError&& <Alert severity="error">{isError}</Alert>}


            </form>


        </div>
    );
};

export default Register;

