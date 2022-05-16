import React, { useEffect, useState } from 'react'
import './styles/main.css'

const Navbar = () => {

    const [mobile, setMobile] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [bgChange, setBgChange] = useState(false)

    const openMenu = () => {
        if (!mobileMenu) {
            setMobileMenu(true)
        }
        else setMobileMenu(false)
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1100) {
            setMobileMenu(false)
            setMobile(true)
        } else {
            setMobileMenu(false)
            setMobile(false)
        }
    })
    window.addEventListener('load', () => {
        if (window.innerWidth < 1100) {
            setMobile(true)
            setMobileMenu(false)
        } else {
            setMobile(false)
            setMobileMenu(false)
        }
    })

    document.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setBgChange(true)
        } else {
            setBgChange(false)
        }
    })

    useEffect(() => {
        if (window.innerWidth < 1100) {
            setMobile(true)
            setMobileMenu(false)
        } else {
            setMobile(false)
            setMobileMenu(false)
        }
    }, []);

    return (
        <div className={!bgChange ? 'navbar' : 'navbar transparent'}>
            <div className='navbar-container'>
                {!mobile ? <div className='navbar-buttons'>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact' id='contact-btn'>Contact</a>
                </div>
                    :
                    <div className='navbar-hamburger-box' onClick={() => setMobileMenu(!mobileMenu)}>
                        <span className={!mobileMenu ? 'navbar-hamburger' : 'navbar-hamburger active'}>
                        </span>
                    </div>
                }
            </div>
            <div className={mobileMenu ? 'mobile-menu opened' : 'mobile-menu closed'}>
                <a href='#about' className={mobileMenu ? 'a visible' : 'a invisible'} onClick={() => { setMobileMenu(false) }}>ABOUT</a>
                <a href='#projects' className={mobileMenu ? 'a visible' : 'a invisible'} onClick={() => { setMobileMenu(false) }}>PROJECTS</a>
                <a href='#contact' className={mobileMenu ? 'a visible' : 'a invisible'} onClick={() => { setMobileMenu(false) }}>CONTACT</a>
            </div>
        </div>
    )




}

export default Navbar