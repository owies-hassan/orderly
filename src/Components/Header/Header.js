//
//
//
// import React, {useCallback, useEffect, useMemo, useState} from 'react';
// import {Button, Container} from "@mui/material";
//
// import {NavLink, useLocation, useNavigate} from "react-router-dom";
// import useTokenUser from "../../Hooks/UseTokenUser";
// import {useDispatch, useSelector} from "react-redux";
// import {clearOrdersUser} from "../../Store/Slices/SliceOrder";
// import SelectPro from "../SelectPro/SelectPro";
// import PersonIcon from '@mui/icons-material/Person';
// import LoginIcon from '@mui/icons-material/Login';
// import './Header.css'
// import useResize from "../../Hooks/UseResize";
// import MenuIcon from '@mui/icons-material/Menu';
// import {motion} from "framer-motion";
// import PagesDashBordMobile from "../ComponentsDashBord/PagesDashBordMobile/PagesDashBordMobile";
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// const Header = () => {
//     const location = useLocation();
//     const {user} = useTokenUser();
//     const history = useNavigate();
//
//     const [selectProfile, setSelectProfile] = useState(false)
//     const [selPagesDashBord, setSelPagesDashBord] = useState(false)
//
//     const[styleFixed,setStylFixed]=useState('static')
//     const{width}=useResize(window.innerWidth)
//     const modeMobile=width<=912
//    const[showMenu,setShowMenu]=useState(false)
// const dispatch=useDispatch()
//
//
//     const handleRegister = () => {
//         if (!user) {
//             history('/register')
//
//         }
//     }
//     const handleLogin = () => {
//         if (!user) {
//             history('/login')
//
//         }
//     }
//     const handleMenuFun = () => {
//         setShowMenu(!showMenu)
//     }
//     useEffect(() => {
//
//
//         document.onscroll = () => {
//             if (window.scrollY > 50) {
//                 setStylFixed('position-fixed')
//             } else if (window.scrollY < 50) {
//                 setStylFixed('static')
//             }
//         }
//
//
//     }, [location.pathname, styleFixed])
//     const handleLogOut = () => {
//         localStorage.removeItem('user')
//         dispatch(clearOrdersUser())
//         history('/login')
//         setSelectProfile(false)
//     }
//     const closeNav=()=>{
//         if (modeMobile){
//             setShowMenu(false)
//         }
//     }
//     const handlePagesDashBord=()=>{
//         setSelPagesDashBord(!selPagesDashBord)
//     }
//     useEffect(()=>{
//         if (width>912){
//             setShowMenu(true)
//         }else {
//             setShowMenu(false)
//         }
//     },[width])
//
//     const styleNav={
//         hidden:{
//             height:modeMobile&&0,
//             transition:{duration:0.6}
//         },
//         visible:{
//             height:modeMobile? '100%':'80px',
//             transition:{duration:0.6,easeIn:true}
//         },
//
//     }
//
//     return (
//
//
//         <nav>
//                 <div className={styleFixed}>
//                     {modeMobile&&<MenuIcon sx={{ color: 'white' }} style={{padding:'10px'}} onClick={handleMenuFun}/>}
//                     {showMenu&&  <motion.div variants={styleNav} initial='hidden' animate='visible' className='section-header'>
//                         <div className='content-header'>
//                             <div className='logo'>
//                                 <img className='heightImg' src='../Image/img/logo.png'/>
//                             </div>
//                             <div className='pages'>
//                                 <ul >
//                                     <NavLink onClick={closeNav} to='/'>Home</NavLink>
//                                     <NavLink  onClick={closeNav} to='/Card'>Card</NavLink>
//                                     <NavLink onClick={closeNav} to='/Products'>Products</NavLink>
//                                     <NavLink onClick={closeNav} to='/contact'>Contact</NavLink>
//                                     <NavLink onClick={closeNav} to='/about'>about</NavLink>
//
//                                     {!modeMobile?
//                                         <>
//                                             <NavLink className='parent_pgDashBordMobile' to='/DashBord/Home'  onClick={handlePagesDashBord}>DashBord</NavLink>
//
//                                             <li style={{position: 'Relative'}}><img onClick={() => setSelectProfile(!selectProfile)} className='img-profile' src='../Image/img/user.png'/>
//                                                 {selectProfile && <SelectPro icon={[<PersonIcon/>, <LoginIcon/>]} sections={['profile', 'Log in']} setSelectProfile={setSelectProfile}/>}
//                                             </li>
//                                         </>
//                                         :
//                                         <>
//                                             <li className='parent_pgDashBordMobile'  onClick={handlePagesDashBord}>{selPagesDashBord?<KeyboardArrowDownIcon/>:<KeyboardArrowRightIcon/> }DashBord {selPagesDashBord&&<PagesDashBordMobile closeNav={closeNav}/>}</li>
//
//                                             <NavLink  onClick={closeNav} to='/profile'><li>Profile</li></NavLink>
//                                        <li onClick={handleLogOut}>Log out</li>
//                                             <li>dark mode</li>
//                                         </>
//
//                                     }
//
//                                 </ul>
//                             </div>
//
//                         </div>
//
//
//
//
//                         <div className='footer-header'>
//                             {/*{location.pathname==='/'&&'Home'}*/}
//                             {/*{location.pathname==='/Card'&&'Card'}*/}
//                             {/*{location.pathname==='/Products'&&'Products'}*/}
//
//                             {user == null && (
//                                 <div className='register-login-btn'>
//                                     <Button onClick={handleRegister} variant='contained' color='error'>Register</Button>
//                                     <Button onClick={handleLogin} variant='contained' color='error'>Login</Button>
//
//                                 </div>
//                             )}
//
//
//                         </div>
//
//                     </motion.div>}
//
//             </div>
//         </nav>
//     );
// };
//
// export default Header;
//
//




import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Button, Container} from "@mui/material";

import {NavLink, useLocation, useNavigate} from "react-router-dom";
import useTokenUser from "../../Hooks/UseTokenUser";
import {useDispatch, useSelector} from "react-redux";
import {clearOrdersUser} from "../../Store/Slices/SliceOrder";
import SelectPro from "../SelectPro/SelectPro";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import './Header.css'
import useResize from "../../Hooks/UseResize";
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from "framer-motion";
import PagesDashBordMobile from "../ComponentsDashBord/PagesDashBordMobile/PagesDashBordMobile";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
    const location = useLocation();
    const {user} = useTokenUser();
    const history = useNavigate();

    const [selectProfile, setSelectProfile] = useState(false)
    const [selPagesDashBord, setSelPagesDashBord] = useState(false)

    const[styleFixed,setStylFixed]=useState('static')
    const{width}=useResize(window.innerWidth)
    const modeMobile=width<=912
    const[showMenu,setShowMenu]=useState(false)
    const dispatch=useDispatch()


    const handleRegister = () => {
        if (!user) {
            history('/register')

        }
    }
    const handleLogin = () => {
        if (!user) {
            history('/login')

        }
    }
    const handleMenuFun = () => {
        setShowMenu(!showMenu)
    }
    const handleLogOut = () => {
        localStorage.removeItem('user')
        dispatch(clearOrdersUser())
        history('/login')
        setSelectProfile(false)
    }
    const closeNav=()=>{
        if (modeMobile){
            setShowMenu(false)
        }
    }
    const handlePagesDashBord=()=>{
        setSelPagesDashBord(!selPagesDashBord)
    }
    useEffect(() => {


        document.onscroll = () => {
            if (window.scrollY > 50) {
                setStylFixed('position-fixed')
            } else if (window.scrollY < 50) {
                setStylFixed('static')
            }
        }


    }, [location.pathname, styleFixed])

    useEffect(()=>{
        if (width>912){
            setShowMenu(true)
        }else {
            setShowMenu(false)
        }
    },[width])

    const styleNav={
        hidden:{
            height:modeMobile&&0,
            transition:{duration:0.6}
        },
        visible:{
            height:modeMobile? '100%':'80px',
            transition:{duration:0.6,easeIn:true}
        },

    }
    const styleHeader={
        background:styleFixed==='position-fixed'&&!modeMobile?'white':' #8e130ce0',

           colorText:{
               color:styleFixed==='position-fixed'&&!modeMobile?'black':'white'
           }


    }

    return (


        <nav>
            <div className={styleFixed} style={styleHeader}>
                {modeMobile&&<MenuIcon sx={{ color: 'white' }} style={{padding:'10px'}} onClick={handleMenuFun}/>}
                {showMenu&&  <motion.div variants={styleNav} initial='hidden' animate='visible' className='section-header'>
                    <div className='content-header'>
                        <div className='logo'>
                            <img className='heightImg' src='/Image/logo.png'/>
                        </div>
                        <div className='pages'>
                            <ul >
                                <NavLink style={styleHeader.colorText}  onClick={closeNav} to='/'>Home</NavLink>
                               <NavLink  style={styleHeader.colorText} onClick={closeNav} to='/Card'>Card</NavLink>
                                <NavLink style={styleHeader.colorText} onClick={closeNav} to='/Products'>Products</NavLink>
                                <NavLink style={styleHeader.colorText} onClick={closeNav} to='/contact'>Contact</NavLink>
                                <NavLink style={styleHeader.colorText} onClick={closeNav} to='/about'>About</NavLink>

                                {!modeMobile?
                                    <>
                                        <NavLink style={styleHeader.colorText} className='parent_pgDashBordMobile' to='/DashBord/Home'  onClick={handlePagesDashBord}>DashBord</NavLink>


                                    </>
                                    :
                                    <>
                                        <li style={styleHeader.colorText} className='parent_pgDashBordMobile'  onClick={handlePagesDashBord}>{selPagesDashBord?<KeyboardArrowDownIcon/>:<KeyboardArrowRightIcon/> }DashBord {selPagesDashBord&&<PagesDashBordMobile closeNav={closeNav}/>}</li>

                                        <NavLink style={styleHeader.colorText} onClick={closeNav} to='/profile'><li>Profile</li></NavLink>
                                        <li style={styleHeader.colorText} onClick={handleLogOut}>Log out</li>

                                    </>

                                }

                            </ul>
                            {user&&!modeMobile&&  <div style={styleHeader.colorText} className='link-profile' style={{position: 'Relative'}}><img onClick={() => setSelectProfile(!selectProfile)} className='img-profile' src='/Image/user.png'/>
                                {selectProfile && <SelectPro icon={[<PersonIcon/>, <LoginIcon/>]} sections={['profile', 'Log Out']} setSelectProfile={setSelectProfile}/>}
                            </div>}
                        </div>

                    </div>






                </motion.div>}

            </div>
        </nav>
    );
};

export default Header;


