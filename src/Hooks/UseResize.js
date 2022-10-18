import {useEffect, useState} from 'react';

const useResize = (winWidth) => {
    const[width,setWidth]=useState(winWidth);

    const resize=()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',resize)

        return ()=>{
            window.removeEventListener('resize',resize)
        }


    },[width])

    return {width};
};

export default useResize;