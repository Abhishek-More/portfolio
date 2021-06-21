import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useEffect } from 'react';

export default function Home() {


  useEffect(() => {
    let mouseCursor = document.querySelector(".cursor");
    let links = document.querySelectorAll('.link');
    window.addEventListener('mousemove', cursor);

    function cursor(e) {
    }
   
    return () => {
    }
  })



  return (
    <div>
      <div className={styles.heading}>
        <h1>
          I'm <span style={{color: '#FF213D '}} href="https://google.com">Abhishek More</span>
          , a<br /> 
          computer engineering major <br /> 
          at <a href="public/favicon.ico">
            <span style={{color: '#FF213D'}}>Texas A&M University</span>
          </a>
        </h1>
      </div>
      <div className={styles.links}>
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}> 
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
    </div>
  )
}

// <iframe src='https://drive.google.com/file/d/16lTpaM7JtuoVnd7Bhenr5tTnvY-y-VYf/view?usp=sharing'></iframe>
