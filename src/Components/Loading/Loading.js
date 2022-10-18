import React from 'react';
import {CircularProgress} from "@mui/material";
import './Loading.css'
const Loading = () => {
    return (
        <div className='style-loading'>
            <CircularProgress size='100px' />
        </div>
    );
};

export default Loading;