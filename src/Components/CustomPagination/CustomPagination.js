import React from 'react';
import {Pagination} from "@mui/material";

const CustomePagination = ({setPage}) => {
    const handleChange=()=>{

    }
    return (
        <div>
            <Pagination count={10} color="primary" onChange={handleChange} />
        </div>
    );
};

export default CustomePagination;