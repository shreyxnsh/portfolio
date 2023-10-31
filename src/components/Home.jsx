import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
const Home = () => {
  const starthtmltag="<p>"
  const endhtmltag="</p>"
    return (
      <>
        <div className=" sm:pl-40 h-screen ">
          <div className="pl-20  flex flex-wrap md:flex-nowrap lg:pt-20 ">      
          <div className="lg:w-1/2 mr-10">
            <motion.div initial={{ opacity: 0,x:"0%",width:"100%"}}
               animate={{x:"0%", opacity: 1,width:"100%"}}
                transition={{delay:1,duration:0.5,ease:"easeInOut"}} className=" pt-10 fonthtml">{`<p>`}</motion.div>
           <h1 className="text-2xl font-mono transition duration-0 cursor-pointer hover:text-cyan-400 hover:duration-700 font-semibold tracking-[0.3em] opacity-75">Full Stack App Developer</h1>
           <div className="relative  flex">
           <motion.div className="text-5xl  md:text-6xl lg:text-7xl z-10 font-mono font-bold"
             initial={{x:"20%",width:"100%"}}
             animate={{x:"0%",width:"0%"}}
             transition={{duration:0.5,ease:"easeInOut"}}
           
            >Shreyansh Jain</motion.div>
           {/* <motion.div className='right-full z-20 bg-cyan-400'
             initial={{x:"160%",width:"100%"}}
             animate={{x:"0%",width:"0%"}}
             transition={{duration:0.6,ease:"easeInOut"}}
           >
            </motion.div> */}
           
            </div>
             
            <motion.div className=" pt-4 font-mono"
            initial={{ opacity: 0,x:"0%",width:"100%"}}
            animate={{x:"0%", opacity: 1,width:"100%"}}
             transition={{delay:1,duration:0.5,ease:"easeInOut"}}
            >
              Hey! I'm a professional full stack app developer, proficient in native and cross-platform app development.<br /> I can create apps, APIs, deploy them to cloud services, everything.<br /> <br /> I'm the guy you've been searching the internet for! <br /> 
                            </motion.div>
              <motion.div
               initial={{ opacity: 0,x:"0%",width:"100%"}}
               animate={{x:"0%", opacity: 1,width:"100%"}}
                transition={{delay:1,duration:0.5,ease:"easeInOut"}}
                className="flex justify-between"
                
              >
                <a href="https://drive.google.com/file/d/18UghSztu0NbR8A6GKx4142zweIW0SEtd/view?usp=sharing" target="_blank"><button className=" cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 font-mono" >Resume</button> </a>
                <p className="fonthtml flex ">{`</p>`}</p>
                </motion.div>

               
           </div>
           <motion.div
           className='right-full z-20'
           initial={{x:"100%",width:"100%"}}
           animate={{x:"0%",width:"100%"}}
           transition={{delay:1,duration:2,ease:"easeInOut"}}
           ><lottie-player src="https://assets10.lottiefiles.com/packages/lf20_l4ny0jjm.json"  background="transparent"  speed="1"  style={{maxWidth: "500px", maxHeight: "500px"}}  loop  autoplay></lottie-player></motion.div>
          </div>
           
          
           {/* <ComputersCanvas /> */}
           </div>
           
           </>
    );
}

export default Home;
