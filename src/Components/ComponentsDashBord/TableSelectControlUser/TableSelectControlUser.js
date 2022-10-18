import React, {useState} from 'react';
import TableCell from "@mui/material/TableCell";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import './TableSelectControlUser.css'
const TableSelectControlUser = ({row}) => {
    const [showSelect,setShowSelect]=useState(false)
    const handleControlUser=(user)=>{
        setShowSelect(!showSelect)
    }
    return (
       <>
           <TableCell component="th" scope="row">{row.name}</TableCell>
           <TableCell align="right">{row.email}</TableCell>
           <TableCell align="right">{row.country}</TableCell>
           <TableCell align="right">{row.createdAt}</TableCell>
           <TableCell   align="right">{<MoreVertIcon onClick={()=>handleControlUser(row.name)}/>}</TableCell>
           {showSelect && <TableCell style={{borderBottom: 'none'}} className='position-absolute' align="right">
               <ul>
                   <li>Set Admin</li>
                   <li>Set superVisor</li>
                   <li>Block</li>
                   <li>Remove</li>
               </ul>
           </TableCell>}
       </>
    );
};

export default TableSelectControlUser;