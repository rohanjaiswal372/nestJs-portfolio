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
      <section id="hero" className='snap-center'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className='snap-center bg-gradient-to-t from-[#800020] to-[#ffcccb]'>
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}
