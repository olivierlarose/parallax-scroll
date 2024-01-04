'use client'
import styles from './page.module.scss'
import GSAP from '../components/GSAP';
import FramerMotion from '../components/FramerMotion';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return (
        <main className={styles.main}>
            <GSAP />
            <FramerMotion />
        </main>
    )
}
