'use client';
import styles from './style.module.scss';
import img from '../../../public/images/bg.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            new LocomotiveScroll();
        })();
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h1>WHO AM I?</h1>
                    <p>
                        I'm a <strong>web developer</strong> from Nowy Sącz, Poland, currently based in Kraków. I focus on building websites that are not only functional but also inspiring and engaging.
                        I strive to create <strong>exceptional user experiences</strong> that blend design with performance.
                    </p>
                    <p>
                        Currently, I’m pursuing a degree in <strong>Computer Science</strong> at <strong>WSB-NLU</strong>, where I'm constantly expanding my skills and exploring new technologies.
                    </p>


                    <motion.div
                        className={styles.heroImageMobile}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src={img}
                            alt="Hero Image"
                            className={styles.heroImage}
                            priority
                        />
                    </motion.div>

                    <p>
                        I work with a variety of technologies, including:
                    </p>
                    <div className={styles.techStack}>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>TailwindCSS</li>
                        <li>SCSS</li>
                    </div>
                    <p>
                        I'm very <strong>open to collaboration</strong> and always looking for exciting new projects. If you're interested in working together, feel free to <u><Link href="contact">get in touch!</Link></u>
                    </p>
                    <Link href="/projects" className={styles.projectLink}>
                        See my work
                    </Link>
                </motion.div>

                <motion.div
                    className={styles.heroImageWrapper}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                >
                    <Image
                        src={img}
                        alt="Hero Image"
                        className={styles.heroImage}
                        priority
                    />
                </motion.div>
            </div>
        </div>
    );
}