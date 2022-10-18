import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {getUser, updateUser} from "../../../Store/Slices/SliceUser";
import {Button, TextField} from "@mui/material";
import {getTypesOfProducts, updateProductAdmin} from "../../../Store/Slices/SliceProducts";

const UpdateProducts = ({item,setIsUpdate,isUpdate}) => {

    const dispatch=useDispatch()
    const nameRef = useRef()
    const priceRef = useRef()
    const ingredientsRef = useRef()

    const handleClose = () => {
        setIsUpdate(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const updateData = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            ingredients: ingredientsRef.current.value,

        }

        await dispatch(updateProductAdmin([item._id,updateData]))
        dispatch(getTypesOfProducts(item.name))


        setIsUpdate(!isUpdate)
    }
    return (

            <div className='update-data-user'>
                <span onClick={handleClose} className='close'>x</span>
                <form onSubmit={handleSubmit}>
                    <TextField  type='text' defaultValue={item.name} inputRef={nameRef} placeholder='update category product' />
                    <TextField type='number' defaultValue={item.price} inputRef={priceRef} placeholder='update price' />
                    <TextField type='text' defaultValue={item.ingredients} inputRef={ingredientsRef} placeholder='update description' />
                    <Button type='submit' variant='contained' color='error'>Update</Button>
                </form>
        </div>
    );
};

export default UpdateProducts;