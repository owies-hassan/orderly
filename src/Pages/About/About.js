


import React from 'react';
import './About.css'
import {Container} from "@mui/material";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
const About = () => {
    return (
        <div className='section-about'>
         <Container>
             <div className='out-fast-food'>
                 <div className='part-1'>
                     <h1 className='title'>Some Words About Us
                         & Our Fast Food</h1>
                     <p className='para'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
                         corporate strategy foster collaborative thinking to further the overall value proposition. Organically
                         grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                         <br/>
                         Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                         going forward, a new normal that has evolved from generation X is on the runway heading towards a
                         streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
                         offshoring. strategies to ensure proactive domination. At the end of the day, going forward,
                         a new normal that has evolved
                         from generation X is on the runway heading towards a streamlined cloud solution</p>
                 </div>
                 <div className='part-2'>
                     <img className='img-1' src='../Image/about-1.jpg'/>
                     <img  className='img-2' src='../Image/about-2.jpg'/>
                 </div>
             </div>
         </Container>
             <div className='gallery'>
           <Container>
            <div className='flex'>
                <div className='part-1'>
                    <div className='img'>
                        <img src='../Image/service-5.jpg'/>
                    </div>
                    <div className='desc'>
                        <h3 className='title'>Take Care of Quality</h3>
                        <p className='para'>apitalize on low hanging fruit to identify a ballpark
                            value added activity to beta test.
                            Override the digital divide with additional clickthroughs.</p>
                    </div>
                </div>

                <div className='part-1'>
                    <div className='img'>
                        <img src='../Image/service-6.jpg'/>
                    </div>
                    <div className='desc'>
                        <h3 className='title'>Take Care of Quality</h3>
                        <p className='para'>apitalize on low hanging fruit to identify a ballpark
                            value added activity to beta test.
                            Override the digital divide with additional clickthroughs.</p>
                    </div>
                </div>

                <div className='part-1'>
                    <div className='img'>
                        <img src='../Image/service-7.jpg'/>
                    </div>
                    <div className='desc'>
                        <h3 className='title'>Take Care of Quality</h3>
                        <p className='para'>apitalize on low hanging fruit to identify a ballpark
                            value added activity to beta test.
                            Override the digital divide with additional clickthroughs.</p>
                    </div>
                </div>
            </div>
           </Container>

             </div>


                <div className='great-taste' style={{background:'url(../Image/12.jpg)'}}>
                    <div className='info'>
                        <p className='title'>Big Taste <br/><span className='title m-left'> Great Taste</span></p>
                        <p className='para'>Nam sollicitudin tincidunt dolor. Nunc sed feugiat tortor.<br/>
                            In auctor odio odio, ut auctor enim tempus.</p>

                    </div>

                    <div className="request-loader">
                        <PlayCircleFilledWhiteIcon className='svg outer' color='error'/>
                    </div>



            </div>

        </div>
    );
};

export default About;