import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Skilled in crafting elegant, responsive websites.",
      "Proficient in optimizing efficient, scalable code.",
      "Innovative with meticulous attention to design.",
    ],
    loop: true,
    delaySpeed: 4000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      {/* <BackgroundCircles /> */}
      <Image
        src="/profile.png"
        className="relative rounded-full mx-auto object-cover h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px]"
        width={500}
        height={500}
        alt="Profile Image"
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-[#800020] pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold scroll-px-10 pt-5 pb-5'>
          <span className='mr-3 text-[#333333]'>{text}</span>
          <Cursor cursorColor='#f7ABABAB' />
        </h1>
        <div className='pt-5 flex flex-wrap justify-center gap-4'>
          <Link href="#about">
            <button className='heroButton px-6 py-3 text-sm sm:text-base'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton px-6 py-3 text-sm sm:text-base'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton px-6 py-3 text-sm sm:text-base'>Skills</button>
          </Link>
          <Link href="#contact">
            <button className='heroButton px-6 py-3 text-sm sm:text-base'>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
