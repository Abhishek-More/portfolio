import React from 'react'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import '../styles/Home.module.css'

const CustomCursor = () => {

    useEffect(() => {
      let mouseCursor = document.querySelector("#cursor");
      let links = document.getElementsByTagName('a');

      //allows for all links to make custom cursor dialate
      for(let i = 0;i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
          mouseCursor.style.transform = 'scale(2)';
          links[i].style.transform = 'opacity(0.5)'
        })

        links[i].addEventListener('mouseleave', () => {
          mouseCursor.style.transform = 'scale(1)';
          links[i].style.transform = 'opacity(1)'
        })
      }

      //Disables cursor on mobile
      document.addEventListener('touchstart', () => {
        mouseCursor.style.visibility = 'hidden';
      })

      //Allows custom cursor to follow mouse
      document.addEventListener('mousemove', (e) => {
        mouseCursor.style.border = '2px solid white';
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
      });

      //TODO: attempt at click animation
      document.addEventListener('click', () => {
        mouseCursor.classList.add("expand");
      })

      return () => {
        document.removeEventListener('mousemove', cursor);
      }
    })

    return (
        <div className={styles.cursor} id='cursor'></div>
    )
}

export default CustomCursor
