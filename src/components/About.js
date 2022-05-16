import React, { useEffect } from 'react'
import './styles/main.css'
import pic from '../media/pic.png'
import AOS from 'aos'

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div className='about' id="about">
            <div className='about-container'>
                {/* <p className='about-sign'>	&lt;about&gt;</p> */}
                <p className='about-container-content-text' data-aos="fade-right">
                    I'm 19 years old web developer based in Nowy Sącz, Poland. Passionated about web technologies. Skilled in HTML, CSS/SCSS, JavaScript/ReactJS
                </p>
                <div className='about-technologies' data-aos="fade-left">
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3"></i>
                </div>
                <p className='bg-text'>ABOUT<br></br>ABOUT<br></br>ABOUT<br></br></p>
                {/* <p className='about-sign'>	&lt;about/&gt;</p> */}
            </div>
        </div >
    )
}

export default About