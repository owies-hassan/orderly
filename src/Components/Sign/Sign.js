import React from 'react';
import './Sign.css'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../Store/Slices/Auth";
const Sign = () => {
    const dispatch=useDispatch()
    return (
        <div className='sign'>
            <div className='content-sign'>
                <button onClick={()=>dispatch(login())}>sign in</button>
            </div>
        </div>
    );
};

export default Sign;