
import { ComputersCanvas } from "./canvas";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation

function About(){

  useEffect(() => {
    AOS.init();
  }, []);


    return (
      <>
       <div className=" flex flex-col lg:pl-40 min-h-screen mt-[20rem] md:mt-[10rem] lg:pr-40">
        <div className="glass-effect flex flex-col sm:p-10 sm:m-20">
        <div data-aos="fade-left"
     data-aos-easing="linear"
     className="text-5xl md:text-6xl lg:text-7xl text-center text-wrap mt-20 font-mono font-bold">ABOUT ME</div>

       <div className="grid">
       
       <div data-aos="fade-left"
     data-aos-easing="linear" className="text-wrap p-2 md:h-full font-mono pt-3"> 
     <p className="fonthtml flex ">{`<p>`}</p>
     🚀 Hey there! I'm <span className="text-cyan-400">Shreyansh </span>, a Passionate Creator and Tech Enthusiast. By day, I'm a <span className="text-cyan-400"> Code Wizard </span> sculpting innovative digital experiences. By night,  I'm a <span className="text-cyan-400"> Visionary mind </span> dreaming of a brighter, more connected world. With a brush of creativity, a dash of innovation, and a sprinkle of coffee, I bring ideas to life.
     
     <br/>
     <br/>
     As a <span className="text-cyan-400"> Full-Stack App Developer</span>, I'm not bound by boundaries. I breathe life into ideas, transforming them into seamless mobile apps for<span className="text-cyan-400">  Android </span>and <span className="text-cyan-400"> iOS</span>, whether it's native or cross-platform. With a knack for problem-solving, I bring functionality to the forefront, making user interactions as intuitive as they are breathtaking.
     <br/>
     <br/>
     But I don't stop there. I speak the language of servers too! Crafting <span className="text-cyan-400"> REST APIs using NodeJS and ExpressJS</span>  is my secret superpower, connecting your apps to the world. Plus, I have a companion in the cloud - <span className="text-cyan-400"> AWS.</span> I'll catapult your creations to the digital stratosphere. Let's build the future, one line of code at a time. 
     <br/>
      Welcome to my world, where the extraordinary is an everyday occurrence! 
     <p className="fonthtml flex justify-end">{`</p>`}</p>
     <div id="skill" data-aos="fade-left"
     data-aos-easing="linear"
     className="text-xl md:text-xl lg:text-2xl text-center text-wrap mt-20 font-mono font-bold">TECHNICAL SKILLS :</div>
     <div className="flex flex-wrap justify-center gap-10 pt-10">
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14" src="javalogo.png" alt="java" />
  <p className="text-white ml-2 py-2">Java</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14" src="kotlin.png" alt="css" />
  <p className="text-white ml-2 py-2">Kotlin</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="ml-5 h-14" src="javascript.png" alt="js" />
  <p className="text-white ml-2 py-2">Javascript</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14" src="solidity.png" alt="React" />
  <p className="text-white ml-2 py-2">Solidity</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14" src="cpp.jpg" alt="c/c++" />
  <p className="text-white ml-2 py-2">C/C++</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14" src="android.png" alt="threejs" />
  <p className="text-white ml-2 py-2">Android</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14 ml-2" src="iOS.png" alt="bootstrap" />
  <p className="text-white ml-2 py-2">iOS</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="flutterlogo.png" alt="python" />
  <p className="text-white ml-2 py-2">Flutter</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14" src="nodejs.jpg" alt="Nodejs" />
  <p className="text-white ml-2 py-2">NodeJS</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14" src="mongo.png" alt="mongodb" />
  <p className="text-white ml-2 py-2">MongoDB</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="h-14" src="express.png" alt="mysql" />
  <p className="text-white ml-2 py-2">ExpressJS</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="gitlogo.png" alt="git/github" />
  <p className="text-white ml-2 py-2">Git</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="aws.png" alt="c/c++" />
  <p className="text-white ml-2 py-2">AWS</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="firebase.png" alt="nextjs" />
  <p className="text-white ml-2 py-2">Firebase</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="docker.png" alt="java" />
  <p className="text-white ml-2 py-2">Docker</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="uilogo.png" alt="ui/ux" />
  <p className="text-white ml-2 py-2">UI/UX</p>
</div>


     </div>
     <div data-aos="fade-left"
     data-aos-easing="linear"
     className="text-xl md:text-xl lg:text-2xl text-center text-wrap mt-20 font-mono font-bold">TOOLS THAT I USE: </div>
      <div data-aos="fade-left"
     data-aos-easing="linear" className="flex justify-center flex-wrap gap-20 pt-10">

      
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="vs.png" alt="html" />
  <p className="text-white ml-2 py-2">VS Code</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="androidstudio.png" alt="html" />
  <p className="text-white ml-2 py-2">Android Studio</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="aws.png" alt="html" />
  <p className="text-white ml-2 py-2">AWS</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="firebase.png" alt="html" />
  <p className="text-white ml-2 py-2">Firebase</p>
</div>


<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="html" />
  <p className="text-white ml-2 py-2">Figma</p>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img className="w-14" src="postman.png" alt="html" />
  <p className="text-white ml-2 py-2">Postman</p>
</div>

     </div>
         </div>  
      </div>
        </div>

        </div>
        <div className="relative mt-[20rem] h-[40rem] flex justify-center pb-[20rem] md:pb-[0rem] md:w-[51.2rem] ">
        <div className="flex justify-center flex-col">
           <div className="text-[8rem] tracking-widest -rotate-90 font-bold">PROJECTS</div>
            {/* <p className="text-white font-mono">These are my projects shelf</p> */}
        </div>
        <div className="invisible md:visible" id="your_scene">
        <ComputersCanvas/>
        
        </div>
       
         </div>
        
         
          
           </>
    );
}

export default About;
