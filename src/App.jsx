import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Sections/Hero"
import TechnicalProficiency from "./Sections/TechnicalProficiency"
import About from "./Sections/About"
import ContactMe from "./Sections/ContactMe"
import Footer from "./Sections/Footer"
import Projects from "./Sections/Projects"

function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <TechnicalProficiency />
    <About />
    <Projects />
    <ContactMe />
    <Footer />
    </>
  )
}

export default App
