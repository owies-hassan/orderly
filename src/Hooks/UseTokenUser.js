import {useEffect} from "react";
import {getProducts} from "../Store/Slices/SliceProducts";
import {useDispatch} from "react-redux";


const useTokenUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch, user])

    return {user};
}
export default useTokenUser;

