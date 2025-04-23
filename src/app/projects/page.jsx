'use client'
import styles from './style.module.scss'
import Project from '../components/Project/Project'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function page() {
    const projects = [
        {
            title: "c-czoch",
            href_github: "https://github.com/zygmuntszymon/c-czoch",
            href_live: "https://c-czoch.pl/",
            src: "cczoch.png",
            color: "#333"
        },
        {
            title: "Staff Manager",
            href_github: "https://github.com/zygmuntszymon/StaffManager",
            href_live: "#",
            src: "staffmanager.png",
            color: "#333"
        },
        {
            title: "Begie Design",
            href_github: "#",
            href_live: "#",
            src: "staffmanager.png",
            color: "#333"
        }
    ]

    return (
        <div className={styles.main}>
            <div className={styles.body}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.2,
                            ease: 'easeOut'
                        }}
                    >
                        <Project
                            title={project.title}
                            index={index}
                            text={project.text}
                            src={project.src}
                            href_github={project.href_github}
                            href_live={project.href_live}
                        />
                    </motion.div>
                ))}
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: projects.length * 0.2 + 0.2,
                    ease: 'easeOut'
                }}
            >
                Do you like my projects? <Link href="/contact">Contact me</Link>
            </motion.p>
        </div>
    )
}
