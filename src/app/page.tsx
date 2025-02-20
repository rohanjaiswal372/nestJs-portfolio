"use client";
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

export default function Home() {
  return (
    <div className='main h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Header />
      <section id="hero" className='snap-center bg-gradient-to-b from-[#E7DEFF] to-white'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className='snap-center bg-gradient-to-b from-[#deffe8] to-white'>
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      {/* <section id="projects" className='snap-start'>
        <Projects />
      </section> */}
      {/* Contact Me */}
      <section id="contact" className='snap-start bg-gradient-to-b from-[#fffbde] to-white'>
        <ContactMe />
      </section>
    </div>
  )
}
