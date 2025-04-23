'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './style.module.scss';
import { FaPhoneSquare } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { IoMail } from "react-icons/io5";

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerDelay = 0.10;

export default function ContactPage() {
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const hasInjection = (text) => {
    return /<script|<\/script|javascript:/gi.test(text);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');

    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      return setError('Please fill out all fields.');
    }

    if (!validateEmail(email)) {
      return setError('Invalid email address.');
    }

    if (hasInjection(name) || hasInjection(message)) {
      return setError('Input contains invalid characters.');
    }

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setModalOpen(true);
      form.current.reset();
    })
    .catch((err) => {
      console.error(err);
      setError("Something went wrong. Please try again.");
    });
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className={styles.contact}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in touch :)
      </motion.h1>

      <form ref={form} onSubmit={sendEmail}>
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: staggerDelay * 1 }}
        >
          <input type="text" name="name" placeholder="Full name" required />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: staggerDelay * 2 }}
        >
          <input type="email" name="email" placeholder="E-mail address" required />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: staggerDelay * 3 }}
        >
          <textarea name="message" placeholder="Your question goes here..." required />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: staggerDelay * 4 }}
        >
          <button type="submit">Let’s do it!</button>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className={styles.error}>{error}</p>
          </motion.div>
        )}

        <motion.div
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: staggerDelay * 5 }}
        >
          <div className={styles.separator}>
            <span className={styles.line}></span>
            <span className={styles.or}>OR</span>
            <span className={styles.line}></span>
          </div>
        </motion.div>
      </form>

      <motion.div
        className={styles.contactLinks}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { 
              staggerChildren: staggerDelay,
              delayChildren: staggerDelay * 6
            }
          }
        }}
      >
        <motion.a
          variants={fadeInVariants}
          href="mailto:szymonzygmuntszem@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMail /> szymonzygmuntszem@gmail.com
        </motion.a>

        <motion.a
          variants={fadeInVariants}
          href="tel:+48123456789"
        >
          <FaPhoneSquare /> +48 123 456 789
        </motion.a>

        <motion.a
          variants={fadeInVariants}
          href="https://www.linkedin.com/in/szymon-zygmunt-1a166a240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoLinkedinSquare /> LinkedIn
        </motion.a>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <p>Thank you! Your message has been sent. 🚀</p>
              <button onClick={closeModal}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}