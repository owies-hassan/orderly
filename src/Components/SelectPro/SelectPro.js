import React from 'react';

import {clearOrdersUser} from "../../Store/Slices/SliceOrder";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import './SelectPro.css'
const SelectPro = ({sections,icon,setSelectProfile,selectProfile}) => {
    const dispatch=useDispatch()
    const history=useNavigate();

    const handleLogOut=()=>{
        localStorage.removeItem('user')
        dispatch(clearOrdersUser())
        history('/login')
        setSelectProfile(false)
    }
    const handleFun=(item)=>{
        if (item==='profile'){
            setSelectProfile(false)
          history('/profile')

        }
        else if (item==='Log Out'){
           handleLogOut()
        }

    }

    const styleSelect={
        hidden:{
            height:0,
            opacity:0
        },
        visible:{
            height:122,
            opacity:1,
            transition:{duration:0.3}
        },

    }
    return (
        <motion.div variants={styleSelect} initial='hidden' animate='visible' className='select-profile'>
            {sections.map((item,index)=>{
                return(
                    <div key={item} onClick={()=>handleFun(item)} className='select'>{icon&&icon[index]}<span>{item}</span></div>
                )
            })}
        </motion.div>
    );
};

export default SelectPro;