import React from 'react';
import {Pagination} from "@mui/material";
import {useSelector} from "react-redux";
import './CustomPagination.css'
const CustomPagination = ({setPage}) => {
    const {products} = useSelector(state => state.sliceProducts)

    const handleChange=(page)=>{
       setPage(page)

        window.scrollTo({ top: 400, behavior: 'smooth'})
    }
    return (
        <div className='pagination-style'>
            {/*<Pagination count={5} color="primary" onChange={(e)=>handleChange(e.target.textContent)} />*/}

            <Pagination count={products.length&&Math.ceil(products.length/10)} color="primary" onChange={(e)=>handleChange(e.target.textContent)} />
        </div>
    );
};

export default CustomPagination;