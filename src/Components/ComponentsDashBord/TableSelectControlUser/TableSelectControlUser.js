import React, {useState} from 'react';
import TableCell from "@mui/material/TableCell";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import './TableSelectControlUser.css'
import {useDispatch, useSelector} from "react-redux";
import {setControllerAdmin, getAllUsers} from "../../../Store/Slices/SliceUser";

const TableSelectControlUser = ({row}) => {
    const [showSelect,setShowSelect]=useState(false)

    const dispatch=useDispatch()
    const handleControlUser=(user)=>{
        setShowSelect(!showSelect)
    }
    const handleSetAdmin = async() => {
            await dispatch(setControllerAdmin([row._id, {isAdmin: true}]))
            setShowSelect(false)
            dispatch(getAllUsers())
    }

    const handleDeleteAdmin = async () => {
       await dispatch(setControllerAdmin([row._id, {isAdmin: false}]))
        setShowSelect(false)
        dispatch(getAllUsers())
    }
    const style={
        color:row.isAdmin ? 'green' : 'red'
    }
    return (
       <>

           <TableCell component="th" scope="row">{row.name}</TableCell>
           <TableCell align="right">{row.email}</TableCell>
           <TableCell align="right">{row.country}</TableCell>
           <TableCell style={style} align="right">{row.isAdmin?'admin':'user'}</TableCell>
           <TableCell align="right">{row.createdAt}</TableCell>
           <TableCell style={{cursor:'pointer'}}   align="right">{<MoreVertIcon onClick={()=>handleControlUser(row.name)}/>}</TableCell>
           {showSelect && <TableCell  style={{borderBottom: 'none',zIndex:'10'}} className='position-absolute' align="right">
               <ul>
                   <li onClick={handleSetAdmin}>Set Admin</li>
                   <li >Set superVisor</li>
                   <li>Block</li>
                   <li onClick={handleDeleteAdmin}>deleteAdmin</li>
               </ul>
           </TableCell>}
       </>
    );
};

export default TableSelectControlUser;