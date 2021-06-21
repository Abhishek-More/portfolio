import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.heading}>
      <h1>
        I'm <span style={{color: '#FF213D '}} href="https://google.com">Abhishek More</span>
        , a<br /> 
        computer engineering major <br /> 
        at <a href="public/favicon.ico">
          <span style={{color: '#FF213D'}}>Texas A&M University</span>
        </a>
      </h1>
      <iframe src='https://drive.google.com/file/d/16lTpaM7JtuoVnd7Bhenr5tTnvY-y-VYf/view?usp=sharing'></iframe>
    </div>
  )
}
