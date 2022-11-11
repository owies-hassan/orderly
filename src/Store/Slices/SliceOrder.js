import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

    const url='https://owies-ecommerce-api.fly.dev/api/order'

// const url='http://localhost:8000/api/order'
const user=JSON.parse(localStorage.getItem('user'))
export const postOrders = createAsyncThunk('postOrder/post', async (orderPro,thunkApi) => {
    const {rejectWithValue}=thunkApi
    if (user.token) {
        try {
             const {data}=await axios({
                 method:'POST',
                 url:url,
                 data:orderPro,
                 headers:{
                     'Content-Type':'application/json',
                     Authorization:`Bearer ${user.token}`
                 }

             })
            return data
        } catch (err) {
               return rejectWithValue(err)
        }
    }
})
export const getOrders = createAsyncThunk('getOrder/get', async (_,thunkApi) => {
    const {rejectWithValue}=thunkApi
    if (user.token) {
        try {
            const {data}=await axios({
                method:'GET',
                url:url,
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${user.token}`
                }

            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
})
export const deleteOrders = createAsyncThunk('deleteOrder/delete', async (id,thunkApi) => {
    const {rejectWithValue}=thunkApi
    if (user.token) {
        try {
            const {data}=await axios({
                method:'DELETE',
                url:`${url}/${id}`,
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${user.token}`
                }

            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
})
export const deleteAllOrders = createAsyncThunk('deleteOrder/delete', async (id,thunkApi) => {
    const {rejectWithValue}=thunkApi
    if (user.token) {
        try {
            const {data}=await axios({
                method:'DELETE',
                url:`${url}/deleteAll/${id}`,
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${user.token}`
                }

            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
})

export const getAllOrders = createAsyncThunk('deleteOrder/delete', async (_,thunkApi) => {
    const {rejectWithValue}=thunkApi
    if (user.token) {
        try {
            const {data}=await axios({
                method:'get',
                url:`${url}/all`,
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${user.token}`
                }

            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
})

export const findAdminOrder = createAsyncThunk('findAdminOrder/get', async (id,thunkApi) => {
    const {rejectWithValue}=thunkApi
    if (user.token) {
        try {
            const {data}=await axios({
                method:'GET',
                url:`${url}/findAdminOrder/${id}`,
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${user.token}`
                }

            })
            return data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
})



const SliceOrder = createSlice({
    name: "SliceOrder",
    initialState: {postOrderUser:[],isError:null,isDelete:false,loading:false,getOrdersUser:[],allOrders:[]},
    reducers: {
        clearOrdersUser:(state,action)=>{
            state.getOrdersUser=[];
        }
    },
    extraReducers: {
        [postOrders.pending]:(state,action)=>{
            state.loading=true
        },
        [postOrders.fulfilled]:(state,action)=>{
            state.postOrderUser=action.payload
            state.isDelete=false

        },
        [postOrders.rejected]:(state,action)=>{
            state.isError=true
        },


        [getOrders.pending]:(state,action)=>{
            state.loading=true
        },
        [getOrders.fulfilled]:(state,action)=>{
            state.getOrdersUser=action.payload
            state.loading=false
        },
        [getOrders.rejected]:(state,action)=>{
            state.isError=true
            state.loading=false
        },


        [deleteOrders.pending]:(state,action)=>{

        },
        [deleteOrders.fulfilled]:(state,action)=>{


        },
        [deleteOrders.rejected]:(state,action)=>{},



        [deleteAllOrders.pending]:(state,action)=>{
        },
        [deleteAllOrders.fulfilled]:(state,action)=>{

            state.isDelete=true;

        },
        [deleteAllOrders.rejected]:(state,action)=>{},



        [getAllOrders.pending]:(state,action)=>{
            state.loading=true
        },
        [getAllOrders.fulfilled]:(state,action)=>{
           state.allOrders=action.payload
            state.loading=false

        },
        [getAllOrders.rejected]:(state,action)=>{
            state.loading=false
        },



        [findAdminOrder.pending]:(state,action)=>{
        },
        [findAdminOrder.fulfilled]:(state,action)=>{

            state.getOrdersUser=action.payload

        },
        [findAdminOrder.rejected]:(state,action)=>{

        },

    }
})


export default SliceOrder.reducer;
export  const {clearOrdersUser}=SliceOrder.actions