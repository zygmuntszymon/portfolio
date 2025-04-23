"use client";
import React, { useEffect } from 'react';
import styles from './style.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroimage from '../../public/images/bg2.jpg';
import Image from 'next/image';
import Link from 'next/link';

const MotionLink = motion.create(Link);

export default function Page() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);

  const fullText = "HI, I'M SZYMON";

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "100vw"]);

  return (
    <div className={styles.hero}>
      <motion.div className={styles.textLine}>
        {fullText.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.05,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
          >
            {char}
          </motion.span>
        ))}
        <br />
        <MotionLink
          href="about"
          className={styles.button}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            stiffness: 100,
            damping: 15
          }}
        >
          <PerspectiveText text="Who am i?" />
        </MotionLink>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={styles.heroImageWrapper}
      >
        <Image
          src={heroimage}
          alt="Hero Image"
          className={styles.heroImage}
          priority
        />
      </motion.div>
    </div>
  );
}

function PerspectiveText({ text }) {
  return (
    <div className={styles.perspectiveText}>
      <p>{text}</p>
      <p>{text}</p>
    </div>
  )
}
