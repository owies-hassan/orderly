import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import SerchAndViewProducts from "./Pages/SearchAndViewProducts/SearchAndViewProducts";
import {Alert} from "@mui/material";

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import useTokenUser from "./Hooks/UseTokenUser";
import Card from "./Pages/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Profile from "./Pages/Profile/Profile";
import HomeDashBord from "./Pages/DashBord/HomeDashBord/HomeDashBord";
import AddProducts from "./Pages/DashBord/AddProducts/AddProducts";
import ControlProductsDashBord from "./Pages/DashBord/ControlProductsDashBord/ControlProductsDashBord";
import DetailsUsers from "./Pages/DashBord/DetailsUsers/DetailsUsers";
import SideBar from "./Components/SideBar/SideBar";
import './App.css'
import PageUserProfile from "./Pages/DashBord/PageUserProfile/PageUserProfile";
import useResize from "./Hooks/UseResize";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import {getProducts} from "./Store/Slices/SliceProducts";

function App() {
    const location=useLocation()
    const {user}=useTokenUser()
    const {width}=useResize(window.innerWidth)
    const {successUser}=useSelector(state=>state.SliceUser)
     const [counter,setCounter]=useState(0)
    const checkerPath=location.pathname.includes('/DashBord')
    const checkerWidth=width>912;

    useEffect(() => {

       if (user&&successUser){

           const interval = setInterval(() => {
               if (counter !== 5) {
                   setCounter(counter + 1)
               }
           },500)

           return () => {
               clearInterval(interval)
           }
       }

    })




    return (
      <>
          {counter!==5&&successUser&& <Alert severity="success">This is a success alert — check it out!</Alert>}
          <Header/>
          <div className={checkerPath?'App-dashBord':'App'}>

              {user&&checkerPath&&checkerWidth&&<SideBar/>}

              <Routes>
                  <Route   exact path='/' element={!user?<Login/>:<Home/>}/>


                  <Route  path='/Products' element={!user?<Login/>:<SerchAndViewProducts/>}/>
                  <Route  path='/Card' element={!user?<Login/>:<Card/>}/>
                  <Route exact path='/register' element={<Register/>}/>
                  <Route exact path='/login' element={<Login/>}/>
                  <Route exact path='/profile' element={<Profile/>}/>
                  <Route exact path='/contact' element={<Contact/>}/>
                  <Route exact path='/about' element={<About/>}/>


                 <Route  path='/DashBord/Home' element={!user?<Login/>:<HomeDashBord/>}/>
                 <Route path='/DashBord/controlProducts' element={<ControlProductsDashBord/>}/>
                 <Route path='/DashBord/addProducts' element={<AddProducts/>}/>
                 <Route path='/DashBord/detailsUsers' element={<DetailsUsers/>}/>
                  <Route path='/DashBord/detailsUsers/profileUser/:id/:email' element={<PageUserProfile/>}/>



              </Routes>


          </div>

          <Footer/>
      </>
  );
}

export default App;
