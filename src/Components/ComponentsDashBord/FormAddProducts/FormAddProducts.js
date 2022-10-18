import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postProducts} from "../../../Store/Slices/SliceProducts";
import {Alert, Button, TextField} from "@mui/material";
import './FormAddProducts.css'
const FormAddProducts = () => {
    const[isAdd,setIsAdd]=useState(true)
    const [value, setValue] = useState({name: '', price: '', ingredients:'',desc:''})
    const [fileImg, setFileImg] = useState('')
    const {isError,detailsError}=useSelector(state=>state.sliceProducts)
    const dispatch=useDispatch()


    const handleClose = () => {
        setIsAdd(false)
    }
    const handleChangeImage = (e) => {
        setFileImg(e.target.files[0])
    }
    const handleChangeValues = (e) => {
        setValue({...value, [e.target.name]: e.target.value})


    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data=new FormData();


        data.append("name", value.name)
        data.append("price", value.price)
        data.append("ingredients", value.ingredients)
        data.append("desc", value.desc)
        data.append("productImage", fileImg)

        await dispatch(postProducts(data))
        // dispatch(getTypesOfProducts(item.name))

        setValue({...value,name: '',price: '',ingredients: '',desc: ''})
        setFileImg(" add new image")
    }
    return (

       <>
           {isError&& <Alert variant="filled" severity="error" className='style-alert'>
               {detailsError}
           </Alert>}
           {!isAdd&&<Button style={{marginBottom:'20px'}} onClick={() => setIsAdd(true)} variant='contained' color='success'>Add Product</Button>}

           {isAdd && <div className='add-products'>
               <span onClick={handleClose} className='close'>x</span>
               <form onSubmit={handleSubmit} encType='multipart/form-data'>

                   <TextField fullWidth onChange={handleChangeValues} type='text' value={value.name} name='name'
                              placeholder='name'/>
                   <TextField fullWidth onChange={handleChangeValues} type='number' value={value.price} name='price'
                              placeholder='price'/>
                   <TextField fullWidth onChange={handleChangeValues} type='text' value={value.ingredients} name='ingredients'
                              placeholder='ingredients'/>
                   <TextField fullWidth onChange={handleChangeValues} type='text' value={value.desc} name='desc'
                              placeholder='desc'/>

                   <TextField fullWidth type='file' name='productImage' onChange={handleChangeImage}/>
                   <Button  fullWidth type='submit' variant='contained' color='error'>Add</Button>
               </form>
           </div>}
       </>
    );
};

export default FormAddProducts;