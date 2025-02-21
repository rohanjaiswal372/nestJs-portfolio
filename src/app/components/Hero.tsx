import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Software Engineer..!",
      "Experienced in designing sleek, responsive websites.",
      "Skilled at enhancing code for efficiency and scalability.",
      "Creative with a keen focus on design.",
    ],
    loop: true,
    delaySpeed: 4000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      {/* <BackgroundCircles /> */}
      <Image
        src="/dp6.jpeg"
        className="object-contain rounded-full h-[200px] w-auto sm:h-[200px] md:h-[400px] lg:h-[400px]"
        width={350}
        height={350}
        alt="Profile Image"
      />
      <div className='z-20'>
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl uppercase text-[#800020] pb-2 pl-3 tracking-[5px] sm:tracking-[10px] md:tracking-[12px] lg:tracking-[15px]">
          ROHAN JAISWAL
        </h2>
        {/* <h2 className='text-sm uppercase text-[#800020] pb-2 tracking-[15px]'>Software Engineer</h2> */}
        <h1 className="text-2xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold scroll-px-10 pt-4 pb-4">
          <span className="mr-3 text-[#333333]">{text}</span>
          <Cursor cursorColor="#f7ABABAB" />
        </h1>

        <div className="pt-5 flex flex-wrap justify-center gap-4">
          <Link href="#about" className='w-40 md:w-56 lg:w-70'>
            <button className="heroButton w-full px-6 py-3 ml-0 text-xs sm:text-sm md:text-base lg:text-lg">
              About
            </button>
          </Link>
          <Link href="#experience" className='w-40 md:w-56 lg:w-70'>
            <button className="heroButton w-full px-6 py-3 ml-0 text-xs sm:text-sm md:text-base lg:text-lg">
              Experience
            </button>
          </Link>
          <Link href="#skills" className='w-40 md:w-56 lg:w-70'>
            <button className="heroButton w-full px-6 py-3 ml-0 text-xs sm:text-sm md:text-base lg:text-lg">
              Skills
            </button>
          </Link>
          <Link href="#contact" className='w-40 md:w-56 lg:w-70'>
            <button className="heroButton w-full px-6 py-3 ml-0 text-xs sm:text-sm md:text-base lg:text-lg">
              Contact Me
            </button>

          </Link>
        </div>



      </div>
    </div>
  )
}

export default Hero
