import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{
      opacity: 0
    }}
    transition={{
      duration: 1.5
    }}
    whileInView={{ opacity:1}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center' 
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img 
      initial={{
        x: -200,
        opacity: 0
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{ opacity:1, x: 0}}
      viewport={{ once: true}}
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      src='/profile1.jpg'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
        <p className='text-sm'>
        I specialize in crafting exceptional applications in collaboration with remarkable individuals. By leveraging cutting-edge technologies and working closely with a dynamic team, I develop innovative, user-centric solutions that seamlessly integrate into the clients' workflows. My focus is on creating scalable, robust applications that are intuitive, agile, and tailored to exceed expectations.
          </p>
      </div>
    </motion.div>
  )
}

export default About
