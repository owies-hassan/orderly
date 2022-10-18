import React, {useState} from 'react';
import './Contact.css'
import {Container, TextField,Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {postContact} from "../../Store/Slices/SliceUser";

const Contact = () => {
    const[contact,setContact]=useState({name:'',email:'',subject:'',message:''})
const dispatch=useDispatch()

    const handleChange=(e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const data={
            name:contact.name,
            email:contact.email,
            subject:contact.subject,
            message:contact.message,
        }

        await dispatch(postContact(data))
    }
    return (
        <div className='section-contact'>
           <div className='header-contact' style={{background:`url(../Image/17.jpg)`}}></div>

            <Container>
                <div className='content-contact'>

                    <div className='box-contact'>
                        <h1 className='big-title'>We are available<br/>in your city with tasty food</h1>
                        <form className='form-contact' onSubmit={handleSubmit}>
                            <h1 className='title'> We Love To Hear From You</h1>
                            <p className='para'> If it's not too much trouble informed us regarding whether you have an inquiry,
                                need to <br/>leave a remark, or might want additional data about Advotis</p>


                            <div className='flex' >
                                <TextField onChange={handleChange} name={'name'} value={contact.name} className='width-input' placeholder='name'  type='text'/>
                                <TextField onChange={handleChange} name={'email'} value={contact.email} className='width-input' placeholder='email'  type='text'/>
                            </div>
                            <TextField onChange={handleChange} name={'subject'} value={contact.subject} placeholder='subject' fullWidth type='text'/>
                            <TextField onChange={handleChange} name={'message'}  value={contact.message} placeholder='message' fullWidth multiline rows={10} type='text'/>
                            <Button type='submit'  style={{width:'120px'}}  color='error' variant='contained' >Submit</Button>
                        </form>
                    </div>

                    <div  className='sideBar-contact'>
                      <h1 className='big-title-sidebar'>Our Office Address</h1>
                        <div className='part-1'>
                            <h3 className='title-sidebar'>Main Restaurant:</h3>
                            <p className='para-sidebar'>587, Dartmouthi Street, Boston,<br/>Massachusetts 0658, PO Box 16122<br/>United States<br/></p>
                        </div>
                        <div className='part-2'>
                            <h3>Main Restaurant:</h3>
                            <p>587, Dartmouthi Street, Boston,<br/>Massachusetts 0658, PO Box 16122<br/>United States<br/></p>
                        </div>
                        <div className='part-3'>
                            <h3>Main Restaurant:</h3>
                            <p>587, Dartmouthi Street, Boston,<br/>Massachusetts 0658, PO Box 16122<br/>United States<br/></p>
                        </div>
                    </div>

                </div>
            </Container>
            <div className='map'>
                <iframe className='content-map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53194.96475651264!2d35.41276447719554!3d33.56155199334323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ef03ff51e8597%3A0x181e41e3b9ff1086!2z2LXZitiv2Kc!5e0!3m2!1sar!2slb!4v1665976355392!5m2!1sar!2slb"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </div>
    );
};

export default Contact;