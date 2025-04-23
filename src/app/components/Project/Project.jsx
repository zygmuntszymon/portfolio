import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from 'next/link';
const Project = ({ index, src, title, href_github, href_live }) => {
  return (
    <div
      className={styles.project}
    >
      <h2>{title}</h2>
      <Image src={`/images/${src}`} width={1000} height={300} alt='project image' />
      <div>
        <Link href={href_github} target='_blank'><FaGithub size={30}/></Link>
        <Link href={href_live} className={href_live == "#" ? styles.disabled : undefined} target='_blank'><FaGlobe size={30} /></Link>
      </div>
    </div>
  )
}

export default Project