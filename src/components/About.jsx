
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
     Hey there! I'm <span className="text-cyan-400">Shreyansh Jain</span>, a passionate web developer with experience in  <span className="text-cyan-400"> frontend </span> development, <span className="text-cyan-400"> backend</span> programming, <span className="text-cyan-400"> databases</span>, as well as <span className="text-cyan-400">AWS</span>. I love learning new things by diving into hands-on projects and pushing the boundaries of my skills.
     I am passionate about creating user-friendly and scalable web applications that inspires.
     <br/>
     <br/>
     Alongside coding, I have a strong affinity for paintings, which fuel my creativity. Currently pursuing B.Tech in CSE from <span className="text-cyan-400"> IIIT Jabalpur</span>, set to graduate in 2025.
     <p className="fonthtml flex justify-end">{`</p>`}</p>
     <div id="skill" data-aos="fade-left"
     data-aos-easing="linear"
     className="text-xl md:text-xl lg:text-2xl text-center text-wrap mt-20 font-mono font-bold">MY TECHNICAL SKILLS </div>
     <div className="flex flex-wrap justify-center gap-10 pt-10">
      <div>
      <img className="h-14" src="html.jpg" alt="html" />
      <p className="text-white ml-2">HTML</p>
      </div>
      <div>
      <img className="h-14" src="css.png" alt="css" />
      <p className="text-white ml-2">CSS</p>
      </div>
      <div>
      <img className="ml-5 h-14" src="js.jpg" alt="js" />
      <p className="text-white">Javascript</p>
      </div>
      <div>
      <img className="h-14" src="reactlogo.jpg" alt="React" />
      
      <p className="text-white ml-2">React</p>
      </div>
      <div>
      <img className="h-14" src="redux.jpg" alt="Redux" />
      
      <p className="text-white ml-2">Redux</p>
      </div>
      <div>
      <img className="h-14" src="threejs.png" alt="threejs" />
      
      <p className="text-white ml-2"> ThreeJS</p>
      </div>
      <div>
      <img className="h-14" src="nodejs.jpg" alt="Nodejs" />
      
      <p className="text-white">NodeJS</p>
      </div>
      <div>
     <img className="h-14 ml-2" src="data:image/png;base64,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" alt="tailwindcss" />
      
      <p className="text-white">Tailwind</p>
      </div>
      <div>
      <img className="h-14 ml-2" src="bootstrap.jpg" alt="bootstrap" />

      <p className="text-white">Bootstrap</p>
      </div>
      <div>
      <img className="h-14" src="mongodb.jpg" alt="mongodb" />
      <p className="text-white">MongoDB</p>
      </div>
      <div>
      <img className="h-14" src="mysqllogo.png" alt="mysql" />
      <p className="text-white ml-4">MYSQL</p>
      </div>
      <div>
      <img className="w-14" src="scss.png" alt="sass" />
      <p className="text-white ml-2">SCSS</p>
      </div>
      <div>
      <img className="w-14" src="gitlogo.png" alt="git/github" />
      
      <p className="text-white ml-2">Git</p>
      </div>
      <div>
      <img className="w-14" src="pythonlogo.jpg" alt="python" />
      <p className="text-white ml-2">Python</p>
      </div>
      <div>
      <img className="w-14" src="cpp.jpg" alt="c/c++" />
      
      <p className="text-white ml-2">C/C++</p>
      </div>
      <div>
      <img className="w-14" src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="nextjs" />
      
      <p className="text-white ml-2">NextJS</p>
      </div>
      <div>
      <img className="w-14" src="javalogo.png" alt="java" />
      <p className="text-white ml-2">Java</p>
      </div>
      <div>

      <img className="w-14" src="uilogo.png" alt="ui/ux" />
      
      <p className="text-white ml-2">UI/UX</p>
      </div>

     </div>
     <div data-aos="fade-left"
     data-aos-easing="linear"
     className="text-xl md:text-xl lg:text-2xl text-center text-wrap mt-20 font-mono font-bold">TOOLS THAT I USE: </div>
      <div data-aos="fade-left"
     data-aos-easing="linear" className="flex justify-center flex-wrap gap-20 pt-10">
      <div>
      <img className="h-14" src="vscode.png" alt="html" />
      <p className="text-white">VS Code</p>
      </div>
      <div>
      <img className="w-12 ml-4" src="jupyter.png" alt="html" />
      <p className="text-white ml-2">Notebook</p>
      </div>
      <div>
      <img className="h-14" src="https://www.pngmart.com/files/22/Ubuntu-Logo-PNG-Clipart.png" alt="logo" />
      <p className="text-white ml-2">Ubuntu</p>
      </div>
      <div>
      <img className="h-14" src="https://logowik.com/content/uploads/images/vercel1868.jpg" alt="html" />
      <p className="text-white ml-2">Vercel</p>
      </div>
      <div>
      <img className="w-14" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="html" />
      <p className="text-white ml-2">Figma</p>
      </div>
      <div >
      <img className="h-14" src="postman.png" alt="html" />
      <p className="text-white ml-2">Postman</p>
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
