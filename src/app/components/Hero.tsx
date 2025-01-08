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
        src="/profile.jpeg"
        className="relative rounded-full mx-auto object-cover h-50 w-42"
        width={400}
        height={400}
        alt=""
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-[#800020] pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-4xl font-semibold scroll-px-10 pt-5 pb-5'>
          <span className='mr-3 text-[#333333]'>{text}</span>
          <Cursor cursorColor='#f7ABABAB' />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
