import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function ExperienceCard(props: any) {
  return (
    <article className='flex flex-col text-center items-center rounded-lg space-y-7 flex-shrink-0 
    w-[600px] md:w-[700px] xl:w-[1000px] xl:h-[600px] snap-center p-10 cursor-pointer
    transition-opacity duration-200 overflow-hidden border-2 border-gray-500 hover:border-blue-500 bg-[#c5c2cd]'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-12 h-22 rounded-full xl:w-[120px] xl:h-[160px] object-cover object-center'
        src="/profile.jpeg"
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-2xl name font-light pb-3'>{props.details.name}</ h4>
        <p className=' text-md font-bold mt-1 title'>{props.details.title}</p>
        <div className='flex space-x-2 my-2 technology items-center'>
          <Image className='h-6 w-6 rounded-full' alt="" src="/profile1.jpg" width={20} height={20} />
          <Image className='h-6 w-6 rounded-full' alt="" src="/profile1.jpg" width={20} height={20} />
          <Image className='h-6 w-6 rounded-full' alt="" src="/profile1.jpg" width={20} height={20} />
        </div>
        <p className='uppercase py-2 text-grey-300 duration font-semibold'> Started work at {props.details.startDate} - Ended {props.details.endDate}</p>
        <ul className='space-y-2 ml-5 text-sm responsibilities'>
          {props.details.responsibilities ?
            props.details.responsibilities.map((el: any, key: any) => <li key={key}> {el} </li>)
            : ""
          }
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
