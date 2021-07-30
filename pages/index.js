import CustomCursor from '../components/customCursor'
import styles from '../styles/Home.module.css'
import '../styles/Home.module.css'
import React from 'react'
import { useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
  })

  return (
    <div className={styles.main}>
      <head>
        <title>Abhishek More</title>
      </head>
      <div className={styles.heading}>
        <h1>
          I'm <a className={styles.headerlink} href="https://www.linkedin.com/in/abhishek-more-linked" target="_blank" rel="noopener noreferrer">
            <span>Abhishek More</span>
          </a>
          , an 
          aspiring <a className={styles.headerlink} href="https://github.com/Abhishek-More">
            <span>software engineer</span>
          </a> and <a className={styles.headerlink}href="https://tamuhack.com/" target="_blank" rel="noopener noreferrer">
            <span>hackathon enthusiast</span>
          </a>
        </h1>
      </div>
      <div className={styles.links}>
          <a href="https://firebasestorage.googleapis.com/v0/b/asciify-a4fba.appspot.com/o/Abhishek%20More%20Resume.pdf?alt=media&token=42c58f7b-2d69-442d-a27a-7f676d5d87ca" target="_blank" rel="noopener noreferrer" className={styles.link}> 
            <h3>Resume &rarr;</h3>
          </a>
          <a href="https://github.com/Abhishek-More" target="_blank" rel="noopener noreferrer" className={styles.link}> 
            <h3>Github &rarr;</h3>
          </a>
          <a href="https://www.linkedin.com/in/abhishek-more-linked" target="_blank" rel="noopener noreferrer" className={styles.link}> 
            <h3>LinkedIn &rarr;</h3>
          </a>
          <a href="https://devpost.com/AbhishekMore" target="_blank" rel="noopener noreferrer" className={styles.link}> 
            <h3>Devpost &rarr;</h3>
          </a>
      </div>
      <CustomCursor />
    </div>
  )
}

// <iframe src='https://drive.google.com/file/d/16lTpaM7JtuoVnd7Bhenr5tTnvY-y-VYf/view?usp=sharing'></iframe>
