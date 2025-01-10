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
      whileInView={{ opacity: 1 }}
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
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src='/aboutMe.png'
      />

      <div className=' px-0 md:px-10'>
        <h4 className=' text-xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
        <p className='text-lg leading-[2] tracking-wide'>
          With a passion for crafting transformative digital experiences, I am a full-stack web developer dedicated to delivering innovative, user-centric solutions. My expertise spans React, Next.js, Jenkins, OpenShift, Angular, and PostgreSQL, enabling me to build scalable, high-performance applications that offer seamless and intuitive user interactions.<br />
          In the front-end, I leverage React and Next.js to create dynamic, lightning-fast interfaces, while PostgreSQL ensures robust data management. My proficiency in Jenkins and OpenShift accelerates CI/CD processes, ensuring reliable deployments, and Angular adds versatility to tackle any project challenge.<br />
          A relentless learner, I stay ahead of the curve by integrating modern technologies like TypeScript, Docker, and GraphQL into my workflow. With a focus on both technical excellence and a user-first mindset, I strive to create applications that not only exceed expectations but inspire lasting, positive change.
        </p>
      </div>
    </motion.div>
  )
}

export default About
