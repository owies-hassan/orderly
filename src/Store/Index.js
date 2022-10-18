

import sliceProducts from './Slices/SliceProducts'
import SliceUser from "./Slices/SliceUser";
import SliceOrder from "./Slices/SliceOrder";
import {configureStore} from "@reduxjs/toolkit";


export const store=configureStore({reducer:{sliceProducts,SliceUser,SliceOrder}})