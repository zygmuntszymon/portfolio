import React, { useEffect } from 'react'
import './styles/main.css'
import snipcodedSRC from '../media/snipcoded-color.png'
import snipcodedSRCmobile from '../media/snipcoded-color-mobile.png'
import imaturaSRC from '../media/imatura-color.png'
import imaturaSRCmobile from '../media/imatura-color-mobile.png'
import AOS from 'aos'
import "aos/dist/aos.css";

const Project = ({ imgSRC, imgSRCmobile, projectSourceCode, projectVisit, title, desc }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <div data-aos="fade-up" className='project'>
            <p className='project-title'>{title}</p>
            <div className='project-img-container'>
                <img src={imgSRC} alt='snipcoded.web.app' />
                <img src={imgSRCmobile} alt='snipcoded.web.app' />
            </div>
            <p className='project-description'>
                {desc}
            </p>
            <div className='project-links'>
                <a href={projectSourceCode} target="_blank"><i class="fa-brands fa-github"></i></a>
                <a href={projectVisit} target="_blank"><i class="fa-solid fa-eye"></i></a>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className='projects' id="projects">
            <p className='projects-header'>MY PROJECTS</p>
            <Project imgSRC={snipcodedSRC} imgSRCmobile={snipcodedSRCmobile} projectSourceCode='' projectVisit='https://snipcoded.web.app/' title="SNIPCODED" desc="Web application allowing you to store your favorite code snippets or notes. Sign In functionality and real-time database connection.
" />
            <Project imgSRC={imaturaSRC} imgSRCmobile={imaturaSRCmobile} projectSourceCode='' projectVisit='https://imatura.web.app/' title="iMATURA" desc="English e-learning website concept for high school graduates." />
        </div >
    )
}

export default Projects