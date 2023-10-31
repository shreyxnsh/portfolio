
import Home from "./components/Home"
import { StarsCanvas } from "./components"
import Projects from "./components/Projects.jsx"
import Project from "./components/Project.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import AnimatedCursor from "react-animated-cursor"
// import { BrowserRouter,Routes,Route } from "react-router-dom"
import React from "react";
import { motion } from "framer-motion";
function App() {
  return (
    <>
    <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
/>
    <div className="relative">
     <motion.div  
           
           className="fixed xl:top-72 xl:-left-72 md:top-56 md:-left-56 -rotate-90 z-10 pt-10 w-[100vh] invisible md:visible"
           initial={{rotate:270,y:"1000%"}}
           animate={{rotate:270,y:"0%"}}
           transition={{delay:1,duration:2,ease:"easeInOut"}}  
           >
     <div className="flex md:p-10  sm:gap-10 ml-4 opacity-75 text-base px-10 tracking-widest font-mono font-bold">
          <div className="flex   gap-5 px-4">
          <a href="https://www.linkedin.com/in/uditi-d-20573b200/">
            <i className="fa-brands rotate-90 fa-linkedin fa-lg cursor-pointer hover:duration-700 hover:text-cyan-400"></i>
            </a>
          <a href="https://github.com/warriorBunny013">
            <i className="fa-brands rotate-90 fa-github fa-lg  cursor-pointer hover:duration-700 hover:text-cyan-400"></i>
             </a>
             <a href="https://www.instagram.com/artme_empire/"><i className="fa-brands rotate-90 fa-instagram fa-lg cursor-pointer hover:duration-700 hover:text-cyan-400"></i></a>
          </div>
          {/* <div> */}
          <a href="#contact"><div className=" hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Contact</div></a>
           <a href="#about"><div className="hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">About</div></a>
           <a href="#skill"><div className=" hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Skills</div></a>
           <a href="#projects"><div className="hover:line-through hover:animate-pulse cursor-pointer hover:duration-700 hover:text-cyan-400">Projects</div></a>
          {/* </div> */}
          
        </div>
     </motion.div>
     <div className="w-screen relative z-0">
     <Home/>
     <StarsCanvas/>
     </div>
     <div id="about">
     <About/>
     </div>
    <div id="projects">
    <Projects/>
    </div>
    <div>
    <Project/>
    </div>
    <div id="contact">
    <Contact/>
    </div>
    </div>
    <div className="font-mono absolute right-10 text-xs pb-10">Made with ❤️ by Uditi</div>
    </>
   
  )
}

export default App
