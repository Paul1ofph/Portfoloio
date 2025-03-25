import React from 'react'
import Hero from "../Sections/Hero"
import TechnicalProficiency from "../Sections/TechnicalProficiency"
import About from "../Sections/About"
import ContactMe from "../Sections/ContactMe"
import Footer from "../Sections/Footer"
import Projects from "../Sections/Projects"

const HomePage = () => {
  return (
    <>
    <Hero />
    <TechnicalProficiency />
    <About />
    <Projects />
    <ContactMe />
    <Footer />
    </>
  )
}

export default HomePage