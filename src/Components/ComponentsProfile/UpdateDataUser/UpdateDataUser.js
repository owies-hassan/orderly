import React, {useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";
import './UpdateDataUser.css'
import {getUser, updateUser} from "../../../Store/Slices/SliceUser";
import {useDispatch} from "react-redux";
const UpdateDataUser = ({item,setIsUpdate,isUpdate}) => {
    const[profileImg,setProfileImg]=useState('')
    const dispatch=useDispatch()

    const nameRef=useRef()
    const lastNameRef=useRef()
    const countryRef=useRef()
    const phoneRef=useRef()
    const photoProfileRef=useRef()

    const handleChangeProfile=(e)=>{
        setProfileImg(e.target.files[0])
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()

        const updateData= {
            name:nameRef.current.value,
            lastName:lastNameRef.current.value,
            country:countryRef.current.value,
            phone:phoneRef.current.value,

        }


        await dispatch(updateUser([item._id,updateData]))

         dispatch(getUser(item.email))
        setIsUpdate(!isUpdate)
    }
      const handleClose=()=>{
        setIsUpdate(false)
      }

    return (
        <div className='update-data-user'>
            <span onClick={handleClose} className='close'>x</span>
          <form onSubmit={handleSubmit}>
              <TextField  type='text' defaultValue={item.name} inputRef={nameRef} placeholder='update your Name' />
              <TextField type='text' defaultValue={item.lastName} inputRef={lastNameRef} placeholder='update your last Name' />
              <TextField type='text' defaultValue={item.country} inputRef={countryRef} placeholder='update your country' />
              <TextField type='number' defaultValue={item.phone} inputRef={phoneRef} placeholder='update your phone' />
              {/*<TextField label='your image profile' name='imgProfile' type='file' inputRef={photoProfileRef} onChange={handleChangeProfile}/>*/}
              <Button type='submit' variant='contained' color='error'>Update</Button>
          </form>
        </div>
    );
};

export default UpdateDataUser;