import {useEffect, useState} from "react";
import useTokenUser from "./UseTokenUser";
import {useSelector} from "react-redux";


const useAlert=(data, time)=>{

    const [counter,setCounter]=useState(0)
    const {user}=useTokenUser()

    useEffect(() => {

        if (user&& data.length || data===true){
            const interval = setInterval(() => {
                if (counter !== time) {
                    setCounter(counter + 1)
                }
            },500)

            return () => {
                clearInterval(interval)
            }
        }
    })

    return {counter}
}

export default useAlert