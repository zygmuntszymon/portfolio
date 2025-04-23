'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../../public/images/logo.png';
import Link from 'next/link';
import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const MotionLink = motion.create(Link);

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ['About', 'Projects', 'Contact'];

    return (
        <>
            <motion.header
                className={styles.header}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.6, 0.05, 0.01, 0.9],
                    delay: 0.2
                }}
            >
                <div className={styles.header_container}>
                    <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
                        <Image src={logo} alt="Logo" width={100} height={50} />
                    </Link>

                    <div
                        className={styles.bars_wrapper}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className={`${styles.bars} ${menuOpen ? styles.open : ''}`} />
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.fullscreenMenu}
                        initial={{
                            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                            opacity: 0
                        }}
                        animate={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                            opacity: 1
                        }}
                        exit={{
                            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.6, 0.05, 0.01, 0.9]
                        }}
                    >
                        <div className={styles.menuItems}>
                            {navItems.map((item, index) => (
                                <MotionLink
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className={styles.menuLink}
                                    onClick={() => setMenuOpen(false)}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.4 + index * 0.15,
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }}
                                >
                                    {item}
                                </MotionLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
