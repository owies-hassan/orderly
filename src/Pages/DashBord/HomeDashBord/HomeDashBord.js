import React, {useEffect} from 'react';
import './HomeDashBord.css'
import {Container} from "@mui/material";

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../../../Store/Slices/SliceOrder";
import {getProducts} from "../../../Store/Slices/SliceProducts";
import TableUser from "../../../Components/ComponentsDashBord/TableUser/TableUser";
import {getAllUsers} from "../../../Store/Slices/SliceUser";
import Loading from "../../../Components/Loading/Loading";

const HomeDashBord = () => {


    const dispatch = useDispatch();
    const {allOrders,loading:loadingOrder} = useSelector(state => state.SliceOrder)
    const {products,loading:loadingProducts} = useSelector(state => state.sliceProducts)
    const {loading:loadingUser} = useSelector(state => state.SliceUser)


    let total = 0;

    if (allOrders) {
        allOrders.map(item => {
            total += item.price
        })
    }

    useEffect(() => {
        dispatch(getAllOrders())
        dispatch(getProducts())
        dispatch(getAllUsers())
    }, [dispatch])

    const name=['sales','orders','products']
    const icon=[<MonetizationOnIcon />,<MedicalServicesIcon/>,<Inventory2Icon/>]
    const details=[total,allOrders.length,products.length]

    return (
      <div className='section-db-home'>
          {loadingUser&&loadingProducts&&loadingOrder?<Loading/>:<Container>
              <h3 style={{fontSize:'30px'}} className='title'>DashBord</h3>
              <div className='content-homeDashBord'>
                  {name.map((item,index)=>{
                      return (
                          <div key={index} className='info'>
                              <div className={`style-${item}`} >{icon[index]}</div>
                              <div className='details'>
                                  <p>{`total ${item}`}</p>
                                  <p>{item==='sales'?`${details[index]}$`:details[index]}</p>
                              </div>
                          </div>
                      )
                  })}
              </div>
              <div className='images'>
                  <div className='img-1'>
                      <h2>Product statistics</h2>
                      <img src='/Image/static.png'/>
                  </div>
                  <div className='img-1'>
                      <h2>Product sales</h2>
                      <img src='/Image/product.png'/>
                  </div>
              </div>
              <TableUser/>
          </Container>}
      </div>
    );
};

export default HomeDashBord;