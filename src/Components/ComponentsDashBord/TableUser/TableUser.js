import React, {useEffect} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector} from "react-redux";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useTokenUser from "../../../Hooks/UseTokenUser";
import TableSelectControlUser from "../TableSelectControlUser/TableSelectControlUser";


const TableUser = () => {
     const {stateGetAllUsers}=useSelector(state=>state.SliceUser)


    const {user}=useTokenUser()


    return (
        <div className='table-users'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{fontSize:'20px'}}>Name</TableCell>
                            <TableCell style={{fontSize:'20px'}}align="right">Email</TableCell>
                            <TableCell style={{fontSize:'20px'}}align="right">Country</TableCell>
                            <TableCell style={{fontSize:'20px'}}align="right">Date</TableCell>
                            <TableCell style={{fontSize:'20px'}} align="right">Control</TableCell>
                        </TableRow>
                    </TableHead>
                    {user && (
                        <TableBody >
                            {stateGetAllUsers.map((row) => (
                                <TableRow
                                    style={{position:"relative"}}
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableSelectControlUser row={row}/>
                                </TableRow>
                            ))}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
        </div>
    );
};

export default TableUser;