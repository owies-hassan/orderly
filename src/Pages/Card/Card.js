import React, {useEffect} from 'react';


import {Alert, Button, Container} from "@mui/material";
import OrdersMap from "../../Components/OrdersMap/OrdersMap";
import {useDispatch, useSelector} from "react-redux";
import useTokenUser from "../../Hooks/UseTokenUser";
import {deleteAllOrders, findAdminOrder, getOrders} from "../../Store/Slices/SliceOrder";
import useAlert from "../../Hooks/useAlert";
import './Card.css'
import {useLocation, useParams} from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
const Card = () => {

    const {id}=useParams()
    const {getOrdersUser,isDelete,loading}=useSelector(state=>state.SliceOrder)
    const dispatch=useDispatch()
    const {user}=useTokenUser()
    const location=useLocation()
   const checkPath=location.pathname==='/Card'
    const {counter}=useAlert(isDelete,6)

    const handleDeleteAllPro=async ()=>{
        const id=getOrdersUser[0].res_id
        await dispatch(deleteAllOrders(id))
        await dispatch(getOrders())

    }


    let total=0
    getOrdersUser.map(item=>total+=item.price)

    useEffect(() => {
        if (user) {
            if (id) {
                dispatch(findAdminOrder(id))
            } else {
                dispatch(getOrders())
            }
        }
    }, [id])
    return (
      <>
          {loading?<Loading/>:<Container  >
              {checkPath&&  <p className='total'>{total}$</p>}
              {isDelete && counter <5 &&
              <div className='alert-message'>
                  <Alert variant="filled" severity="success" className='style-alert'>
                      delete was success
                  </Alert>

              </div>}

              <div className=' section-card content-search'>
                  {getOrdersUser.length ? (<>
                          {getOrdersUser.length > 1 &&checkPath&&
                          <Button onClick={handleDeleteAllPro} variant='contained' color='error'>Delete All Products</Button>}
                          {getOrdersUser.map(item => {
                              return (
                                  <OrdersMap checkPath={checkPath} key={item._id} item={item}/>
                              )
                          })}
                      </>)
                      : <Alert severity='error'>there is no products</Alert>}
              </div>

          </Container>
          }
      </>
    );
};

export default Card;