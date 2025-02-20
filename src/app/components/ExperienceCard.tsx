import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function ExperienceCard(props: any) {
  return (
    <article className='flex flex-col text-center items-center rounded-lg space-y-7 flex-shrink-0 
  w-[600px] md:w-[700px] xl:w-[1000px] xl:h-[600px] snap-center p-10 cursor-pointer
  transition-opacity duration-200 overflow-hidden bg-[#f7f9fc]/60'>

      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-12 h-22 rounded-full md:w-[120px] md:h-[160px] object-contain object-center'
        src={props.details.logo}
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-xs sm:text-sm md:text-2xl font-light pb-3'>
          {props.details.name}
        </h4>
        <p className='text-xs sm:text-sm md:text-md font-bold mt-1'>
          {props.details.title}
        </p>

        <p className='uppercase py-2 text-grey-300 duration font-semibold text-xs sm:text-sm'>
          Started work at {props.details.startDate} - {props.details.endDate === 'current' ? 'Current' : 'Ended ' + props.details.endDate}
        </p>

        <ul className='space-y-2 ml-5 text-xs sm:text-sm'>
          {props.details.responsibilities ?
            props.details.responsibilities.map((el: any, key: any) => <li key={key}>{el}</li>)
            : ""
          }
        </ul>
      </div>
    </article>


  )
}

export default ExperienceCard
