import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const url='http://localhost:8000/api/users';
const user=JSON.parse(localStorage.getItem('user'))

export const postRegisterUser=createAsyncThunk('postRegisterUser/post',async (dataUser,thunkApi)=>{

    const {rejectWithValue}=thunkApi
    try {
        const {data}= await axios({
            method: 'POST',
            url: `${url}/register`,
            data: dataUser,
            headers:{
                'Content-Type': 'application/json',
            }
        });
    // .response.data.msg
        return data
    }catch (err){
        return rejectWithValue(err)

    }
})
export const postLoginUser=createAsyncThunk('postLoginUser/post',async (dataUser,thunkApi)=>{

    const {rejectWithValue}=thunkApi
    try {
        const {data}= await axios({
            method: 'POST',
            url: `${url}/login`,
            data: dataUser,
            headers:{
                'Content-Type': 'application/json',
            }
        });
        return data
    }catch (err){
      return rejectWithValue(err)



    }
})
export const getAllUsers=createAsyncThunk('postLoginUser/get',async (_,thunkApi)=>{

    const {rejectWithValue}=thunkApi
   if (user){
       try {
           const {data}= await axios({
               method: 'get',
               url: `${url}/register`,
               headers:{
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${user.token}`
               }
           });
           return data
       }catch (err){
           return rejectWithValue(err)



       }
   }
})
export const getUser=createAsyncThunk('getUser/get',async (email,thunkApi)=>{

    const {rejectWithValue}=thunkApi
    if (user){
        try {
            const {data}= await axios({
                method: 'GET',
                url:`${url}/${email}`,
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return data
        }catch (err){
            return rejectWithValue(err)



        }
    }
})
export const searchUser=createAsyncThunk('searchUser/get',async (name,thunkApi)=>{

    const {rejectWithValue}=thunkApi
    if (user){
        try {
            const {data}= await axios({
                method: 'get',
                url: `${url}/search/${name}`,
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return data
        }catch (err){
            return rejectWithValue(err)



        }
    }
})
export const updateUser=createAsyncThunk('updateUser/patch',async ([id,updateData],thunkApi)=>{

    const {rejectWithValue}=thunkApi
    if (user){
        try {
            const {data}= await axios({
                method: 'patch',
                url:`${url}/update/${id}`,
                data:updateData,
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return data
        }catch (err){
            return rejectWithValue(err)



        }
    }
})

export const postContact=createAsyncThunk('postContact/post',async (dataContact,thunkApi)=>{

    const {rejectWithValue}=thunkApi
    try {
        const {data}= await axios({
            method: 'POST',
            url: `http://localhost:8000/send`,
            data: dataContact,

        });
        return data
    }catch (err){
        return rejectWithValue(err)



    }
})


const SliceUser = createSlice({
    name: 'sliceUser',
    initialState: {stateUpdate:[],loading:false,isError:null,dataUser:[],successUser:null,stateGetAllUsers:[],StateSearchUser:[],stateUser:[]},
    reducers: {},
    extraReducers: {
        [postRegisterUser.pending]: (state, action) => {
            state.loading=true;
            state.isError=null;
        },
        [postRegisterUser.fulfilled]: (state, action) => {
            state.loading=false;
            state.dataUser=action.payload
            state.successUser=true
            localStorage.setItem('user',JSON.stringify(action.payload))

        },
        [postRegisterUser.rejected]: (state, action) => {
            state.loading=false;

            state.isError=action.payload.response.data.msg
        },



        [postLoginUser.pending]: (state, action) => {
            state.loading=true;
            state.isError=null;
        },
        [postLoginUser.fulfilled]: (state, action) => {
            state.loading=false;
            state.dataUser=action.payload
            state.successUser=true
            localStorage.setItem('user',JSON.stringify(action.payload))


        },
        [postLoginUser.rejected]: (state, action) => {
            state.loading=false;
            state.isError=action.payload.response.data.msg

        },



        [getAllUsers.pending]: (state, action) => {
           state.loading=true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.stateGetAllUsers=action.payload
            state.loading=false
        },
        [getAllUsers.rejected]: (state, action) => {

            state.loading=false
        },




        [searchUser.pending]: (state, action) => {
            state.loading=true
        },
        [searchUser.fulfilled]: (state, action) => {


            state.loading=false
            state.StateSearchUser=action.payload
            state.isError=null

        },
        [searchUser.rejected]: (state, action) => {
            state.loading=false
            state.isError=action.payload.response.data.msg
        },


        [getUser.pending]: (state, action) => {
            state.loading=true
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading=false
            state.stateUser=action.payload

        },
        [getUser.rejected]: (state, action) => {
            state.loading=false
            state.isError=action.payload.response.data.msg

        },



        [updateUser.pending]: (state, action) => {
            state.loading=true
        },
        [updateUser.fulfilled]: (state, action) => {


        },
        [updateUser.rejected]: (state, action) => {
            state.loading=false
            state.isError=action.payload.response.data.msg

        },


        [postContact.pending]: (state, action) => {
            state.loading=true
        },
        [postContact.fulfilled]: (state, action) => {


        },
        [postContact.rejected]: (state, action) => {
            state.loading=false


        },
    }
})

export default SliceUser.reducer;