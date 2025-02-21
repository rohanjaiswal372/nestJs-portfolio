"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

export default function Home() {
  const [isHeroRendered, setIsHeroRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHeroRendered(true);
    }, 2000); // 2000 milliseconds = 2 seconds
  }, []);

  return (
    <div className='main h-screen snap-y snap-mandatory overflow-scroll z-0'>
      {isHeroRendered && <Header />}
      <section id="hero" className='snap-center bg-gradient-to-b from-[#E7DEFF] to-white'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className='snap-center bg-gradient-to-b from-[#E7DEFF] to-white'>
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
