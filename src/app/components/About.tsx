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
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row  max-w-7xl px-10 md:justify-evenly mx-auto items-center'
    >
      <h3 className="absolute top-16 sm:top-20 md:top-24 uppercase tracking-[10px] sm:tracking-[15px] md:tracking-[20px] text-gray-500 text-xl sm:text-2xl md:text-3xl">
        About
      </h3>

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
        className="mt-24 md:mt-0 flex-shrink-0 w-36 h-36 sm:w-40 sm:h-40 md:w-[350px] md:h-[500px] xl:w-[500px] xl:h-[600px] rounded-full object-cover md:rounded-lg"
        src="/aboutMe.png"
      />


      <div className='px-0 md:px-10 mt-3 md:mt-0'>
        <h4 className='text-xs sm:text-sm md:text-xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <p className='text-xs sm:text-sm md:text-lg   leading-[1.4] sm:leading-[1.8] md:leading-[2] tracking-wide'>
          My portfolio serves as a concise representation of my skills, showcasing my proficiency in both front-end and back-end development. I have built this portfolio using React alongside the Next.js framework, complemented by Tailwind CSS to deliver a sleek and responsive design. The goal was not only to demonstrate my technical abilities but also to highlight my capability to create visually appealing, user-friendly web apps, incorporating dynamic animations that enhance the user experience.
          However, this portfolio only scratches the surface of my capabilities. I am well-versed in full-stack development, with extensive experience working with both front-end and back-end technologies. On the backend, I specialize in frameworks like Next.js, Express.js, and Nest.js, all of which enable me to create robust, scalable apps. Additionally, I have a solid foundation in multiple programming languages, including Python, PHP, Ruby, and Java, allowing me to adapt to various project requirements and client needs.
          In terms of database management, I have hands-on experience working with relational and non-relational databases, including MySQL, PostgreSQL, and MS SQL, ensuring that I can implement efficient, secure, and high-performance database solutions tailored to project specifications.
          This portfolio is just a glimpse into my potential. My passion for coding, problem-solving, and continuous learning drives me to stay on top of the latest technologies, frameworks, and best practices to deliver high-quality solutions.
        </p>
      </div>

    </motion.div>
  )
}

export default About
