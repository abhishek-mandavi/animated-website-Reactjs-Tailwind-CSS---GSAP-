import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from './AnimatedTitle.jsx'

const About = () => {

  useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            },
        });
        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });
  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <p className='font-general text-sm uppercase md:text-[10px]'>
               WELCOME TO APEX LEGENDS 
            </p>

            <AnimatedTitle title="Experience the beginning with Apex Legends"
             containerClass="mt-5 !text-black text-center"
            />

            {/* <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
              The Game of Games begins
            </div>  */}

            <div className='about-subtext'>
              <p>Beyond Battle Royale</p>
              <p className='text-gray-500'>
                Show 'em what you're made of in Apex Legends, a free-to-play hero shooter where contenders from across the Frontier team up to battle for glory, fame, and fortune.
              </p>
            </div>
        </div> 
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img
                    src="img/about.webp"
                    alt="Background"
                    className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default About
