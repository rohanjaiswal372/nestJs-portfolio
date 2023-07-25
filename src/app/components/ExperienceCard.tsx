import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
    transition-opacity duration-200 overflow-hidden'>

      <motion.img
      initial={{
        y: -100,
        opacity: 0
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true}}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src="/profile.jpeg"
      />

      <div className='px-0 md:px-10'>      
        <h4 className='text-4xl font-light'>CEO of Disney</h4>
        <p className='font-bold text-2xl mt-1'>CAT Software</p>      
        <div className='flex space-x-2 my-2'>
          <Image className='h-10 w-10 rounded-full' alt="" src="/profile1.jpg" width={40} height={40} />
          <Image className='h-10 w-10 rounded-full' alt="" src="/profile1.jpg" width={40} height={40} />
          <Image className='h-10 w-10 rounded-full' alt="" src="/profile1.jpg" width={40} height={40} />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>

        <p className='uppercase py-5 text-grey-300'> Started work at ... - Ended </p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Spearheaded the development of enterprise application</li>
          <li>Spearheaded the development of enterprise application software using Node JSL</li>
          <li>Spearheaded the development of enterprise application software using Node JS </li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
