import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_links}>
                    <div>
                        <Link href="/">Homepage</Link>
                        <Link href="/about">About</Link>
                    </div>
                    <div>
                        <Link href="/projects">Projects</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <p>Szymon Zygmunt &copy;</p>
            </div>

        </footer>
    )
}

export default Footer