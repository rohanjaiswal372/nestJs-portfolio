import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link';

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>

      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x:0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-row items-center'>
        <a href="https://github.com/rohanjaiswal372" className='px-2 text-2xl'>
          <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/rohan-jaiswal-developer/" className='px-2 text-2xl'>
          <FaLinkedin/>
        </a>
        <a href="" className='px-2 text-2xl'>
          <SiGoogledocs/>
        </a>
      </motion.div>

      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x:0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
          className='cursor-pointer'
          network='email' 
          fgColor="gray"
          bgColor='transparent'
          />
         <p className='="uppercase hidden md:inline-flex text-sm text-gray-400'>
          <a href="#contact">
          Get In Touch
          </a>
         </p>
      </motion.div>
    </header>
  )
}

export default Header
