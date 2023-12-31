import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity:1}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img 
            initial={{ y:-300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity:1, y: 0}}
            viewport={{ once: true }}
            src="https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-2048x1001.png" alt="" />

            <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span>
                UPS clone
              </h4>

              <p className='text-lg text-center md:text-left'>
              Disney Media and Entertainment Distribution (DMED) is one of The Walt Disney Company's five major business segments consisting of Disney's streaming services. As a comprehensive developer, my duties involved creating a decentralized repository application for data storage
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
Projects