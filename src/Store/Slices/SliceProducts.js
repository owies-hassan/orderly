import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

const url='http://localhost:8000/api/products';
const user=JSON.parse(localStorage.getItem('user'))

export const getProducts=createAsyncThunk('getProducts/get',async (page,thunkApi)=>{

const {rejectWithValue}=thunkApi
 if (user.token){
     try {
         const {data} = await axios({
             method: 'GET',
             url: `${url}?p=${page}`,
             headers: {
                 'Content-Type':'application/json',
                 'Authorization':`Bearer ${user.token}`
             }

         })
         return data
     } catch (err) {
         return rejectWithValue(err)
     }
 }
 else {  console.log('no token')}

})

export const getTypesOfProducts = createAsyncThunk('getTypesOfProducts/get', async (name, thunkApi) => {

    const {rejectWithValue}=thunkApi

   if (user.token){
       try {
           const {data} = await axios({
               method: 'get',
               url: `${url}/${name}`,
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${user.token}`
               }

           })
           return data
       } catch (err) {
           return rejectWithValue()
       }
   }
   else {  console.log('no token')}
});

export const getSearchProducts = createAsyncThunk('getSearchProducts/get', async (searchPro, thunkApi) => {

    const {rejectWithValue} = thunkApi
    if (user.token) {
        try {
            const {data} = await axios({
                method: 'get',
                url: `${url}/search/${searchPro}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }

            })

            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    } else {
        console.log('no token')
    }
});


export const deleteProductAdmin = createAsyncThunk('deleteProductAdmin/get', async (id, thunkApi) => {

    const {rejectWithValue}=thunkApi

    if (user.token){
        try {
            const {data} = await axios({
                method: 'Delete',
                url: `${url}/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }

            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
    else {  console.log('no token')}
});

export const updateProductAdmin = createAsyncThunk('updateProductAdmin/get', async ([id,update], thunkApi) => {

    const {rejectWithValue}=thunkApi

    if (user.token){
        try {
            const {data} = await axios({
                method: 'patch',
                url: `${url}/${id}`,
                data:update,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }

            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
    else {  console.log('no token')}
});

export const postProducts = createAsyncThunk('postProducts/post', async (postProduct, thunkApi) => {

    const {rejectWithValue} = thunkApi
    if (user.token) {
        try {
            const {data} = await axios({
                method: 'POST',
                url: `${url}`,
                data:postProduct,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    } else {
        console.log('no token')
    }
});

export const addCommentsUser = createAsyncThunk('CommentsUser/post', async ([id,value], thunkApi) => {

    const {rejectWithValue} = thunkApi
    if (user.token) {
        try {
            const {data} = await axios({
                method: 'post',
                url: `${url}/${id}/comment`,
                value,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }

            })
            return data.comments
        } catch (err) {
            return rejectWithValue(err)
        }
    } else {
        console.log('no token')
    }
});

const sliceProducts=createSlice({
    name:"sliceProducts",
    initialState:{categoryPro:[],products:[],loading:null,isError:null,searchProducts:[],newProduct:[],isEditPro:false,detailsError:''},
    reducers:{},
    extraReducers:{
        [getProducts.pending]:(state,action)=>{
            state.loading=true
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.loading=false
            state.products=action.payload


        },
        [getProducts.rejected]:(state,action)=>{
            state.loading=false
            state.isError=true

        },



        [getTypesOfProducts.pending]:(state,action)=>{
            state.loading=true
        },
        [getTypesOfProducts.fulfilled]:(state,action)=>{
            state.loading=false
             state.isError=false
            state.products=action.payload
            state.categoryPro=action.payload

        },
        [getTypesOfProducts.rejected]:(state,action)=>{
            state.loading=false
            state.isError=true
            state.detailsError=action.payload.response.data.msg

        },


        [getSearchProducts.pending]:(state,action)=>{
            state.loading=true
        },
        [getSearchProducts.fulfilled]:(state,action)=>{
            state.loading=false
            state.searchProducts=action.payload
            state.isError=null

        },
        [getSearchProducts.rejected]:(state,action)=>{
            state.loading=false
            state.isError=action.payload.response.data.msg

        },


        [deleteProductAdmin.pending]:(state,action)=>{

        },
        [deleteProductAdmin.fulfilled]:(state,action)=>{

           state.isError=false
        },
        [deleteProductAdmin.rejected]:(state,action)=>{

            state.isError=true
            state.detailsError=`you can't delete ${action.payload.response.data.msg}`
        },



        [updateProductAdmin.pending]:(state,action)=>{
               state.loading=true;
        },
        [updateProductAdmin.fulfilled]:(state,action)=>{
            state.loading=false;
            state.isError=false;


        },
        [updateProductAdmin.rejected]:(state,action)=>{

            state.loading=false;
            state.isError=true
            state.detailsError=`you can't update ${action.payload.response.data.msg}`

        },


        [postProducts.pending]: (state, action) => {

        },
        [postProducts.fulfilled]: (state, action) => {


            state.newProduct=action.payload
            state.isError=false

        },
        [postProducts.rejected]: (state, action) => {
            state.isError=true
            state.detailsError=`you can't add product ${action.payload.response.data.msg}`
          },

        [addCommentsUser.pending]:(state,action)=>{

        },
        [addCommentsUser.fulfilled]:(state,action)=>{


        },
        [addCommentsUser.rejected]:(state,action)=>{


        },
    },
})

export default sliceProducts.reducer