"use client"
import HeroSection from '/home/elil-wac-012/Documents/W-WEB-502-LIL-2-1-Portfolio-william.penet/portfolio/app/src/components/HeroSection'
import Alternance from './src/components/alternance'
import SchoolProjects from '/home/elil-wac-012/Documents/W-WEB-502-LIL-2-1-Portfolio-william.penet/portfolio/app/src/components/SchoolProjects'
import Skills from '/home/elil-wac-012/Documents/W-WEB-502-LIL-2-1-Portfolio-william.penet/portfolio/app/src/components/Skills'
import About from '/home/elil-wac-012/Documents/W-WEB-502-LIL-2-1-Portfolio-william.penet/portfolio/app/src/components/About'
import ResponsiveCarousel from "/home/elil-wac-012/Documents/W-WEB-502-LIL-2-1-Portfolio-william.penet/portfolio/carousels/Responsive"
import Contact from "./src/components/TitleContact";
import Form from "./src/FormContact";


export default function Home() {
  return (
    <main className="">
      <HeroSection/>

      <About/>

      <br></br>

      <ResponsiveCarousel/>
      <br></br>


      <Alternance/>
      <br></br>
      <Skills/>
      <br></br>
      <SchoolProjects/>
      <br></br>
      <Contact/>
      <Form />

    </main>
  )
}