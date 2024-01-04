'use client';
import { useLayoutEffect, useRef } from "react";
import styles from '../../app/page.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Picture1 from '../../../public/medias/1.jpg';
import Picture2 from '../../../public/medias/2.jpg';
import Picture3 from '../../../public/medias/3.jpg';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger) 
const word = "with gsap";

export default function Index() {
    const container = useRef(null);
    const images = [Picture1, Picture2, Picture3];
    const lettersRef = useRef([])
    const imagesRef = useRef([])
    const title1 = useRef(null);
    useLayoutEffect( () => {
        const context = gsap.context( () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
            .to(title1.current, {y: -50}, 0)
            .to(imagesRef.current[1], {y: -150}, 0)
            .to(imagesRef.current[2], {y: -255}, 0)
            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, {
                    top: Math.floor(Math.random() * -75) - 25,
                }, 0)
            })
            
        })
        return () => context.revert();
    }, [])

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <h1 ref={title1}>Parallax</h1>
                <h1 >Scroll</h1>
                <div className={styles.word}>
                    <p>
                        {
                            word.split("").map((letter, i) => {
                                return <span key={`l_${i}`} ref={el => lettersRef.current[i] = el}>{letter}</span>
                            })
                        }
                    </p>
                </div>
            </div>
            <div className={styles.images}>
                {
                    images.map( (image, i) => {
                        return <div key={`i_${i}`} ref={el => imagesRef.current[i] = el} className={styles.imageContainer}>
                            <Image 
                                src={image}
                                placeholder="blur"
                                alt="image"
                                fill
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
