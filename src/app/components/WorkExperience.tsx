import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'


function WorkExperience() {
  const experience = [
    {
      "name": " Discover Financial Services, IL",
      "title": "Full Stack Developer",
      "logo": "/discover-logo.svg",
      "technology": [],
      "startDate": "Oct 2023",
      "endDate": "current",
      "responsibilities": [
        "Developed and maintained scalable web applications using Node.js and NestJS for backend services, ensuring efficient data processing and integration with various Disney platforms",
        "Built dynamic, user-friendly interfaces with React.js, implementing responsive designs to optimize the user experience across a wide range of devices",
        "Designed and managed robust PostgreSQL databases, optimizing queries and schema to support complex data structures and improve performance",
      ],
    },
    {
      "name": "The Walt Disney Company, CA",
      "title": "Full Stack Developer",
      "logo": "/disney.png",
      "technology": [],
      "startDate": "Nov 2020",
      "endDate": "Feb 2023",
      "responsibilities": [
        "Spearheaded the development of enterprise application software using Node JS (9.2), React JS(18.2), Nest JS(9.2), Angular JS 14, PHP  and PostgreSQL",
        "Performed full stack development to include back-end web services  and front-end User Interface. Write clean code, take full responsibility for technical delivery and solved challenging data set problem",
        "Developed Angular applications using Angular Universal for server-side rendering",
      ],
    },
    {
      "name": "ION Media Networks, FL",
      "title": "Web Developer",
      "logo": "/ion.png",
      "technology": [],
      "startDate": "Aug 2018",
      "endDate": "May 2020",
      "responsibilities": [
        "Strategic development, enhancements and refactoring of existing critical components in JavaScript, Angular, Vue JS, Python, PHP, and Node.js applications",
        "Detailed knowledge of Microsoft SQL Server technology and how to Administer, create, upgrade, maintain, and customize manually and using SQL Queries",
        "Responsible for integration and setup of Web Properties, Google Tag Manager, Google Analytics, Google Dashboard and other tools",
      ],
    },
    {
      "name": "CAT Technology Inc, NJ",
      "title": "Web Developer",
      "logo": "/cat.png",
      "technology": [],
      "startDate": "Nov 2017",
      "endDate": "Aug 2018",
      "responsibilities": [
        "Designed exceptional UI designs, determined back-end display; designed styling colors and interface; in-corporate best practices for technical SEO and optimized website navigation",
        "Collaborate with designers, product managers, and others in delivering large and critical projects that support high-profile, designed consumer products, services, and sites",
        "Involved in application design, site architecture design, using Laravel, React, PHP, CSS, JavaScript and HTML and developing application frameworks/platforms in a Microservices Architecture",
      ],
    },
    {
      "name": "Esprit Business Solution., India",
      "title": "Web Developer",
      "logo": "/espirit.svg",
      "technology": [],
      "startDate": "Aug 2014",
      "endDate": "Jan 2016",
      "responsibilities": [
        "Develop custom modules using the Drupal API for extending Drupal functionality",
        "Heavily used HTML5 and CSS3 and applied CSS frameworks such as Bootstrap",
        "Create and configure views for building content list pages, navigation systems via menus",
      ],
    }
  ]

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      transition={{
        duration: 1.5
      }}
      whileInView={{ opacity: 1 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>

      <h3 className="absolute top-20 sm:top-20 md:top-24 uppercase tracking-[10px] sm:tracking-[15px] md:tracking-[20px] text-gray-500 text-xl sm:text-2xl md:text-3xl">
        experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory scrollbar-hide'>
        {
          experience.map((details, key) => <ExperienceCard key={key} details={details} />)
        }
      </div>
    </motion.div>
  )
}

export default WorkExperience
