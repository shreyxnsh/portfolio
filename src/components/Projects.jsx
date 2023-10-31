import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);
    return (
      <>
     

           

<div className="md:pl-60  lg:pt-60 lg:pr-60  sm:p-10 min-h-screen">

 
<div data-aos="flip-right"  className="max-w-sm w-full box  lg:max-w-full lg:flex border">

<div className="ribbon"><span>FEATURED</span></div>
<div className="min-h-auto min-w-48 max-w-10 overflow-hidden  text-center">
             <img src="orchid.png" alt="orchid" className="hover:scale-125 h-[22rem] object-cover ease-in duration-150"/>
            </div>
  <div className="p-4 flex flex-col justify-between leading-normal">
    <div className="mb-4">
          <div className="text-2xl z-10 font-mono font-bold">01</div>
           <div className="text-5xl z-10 font-mono font-bold pb-5">ORCHID</div>
           <p className="z-10 font-mono opacity-75">Youtube streaming application with personalised chatbot and create secret rooms to watch videos with your friends</p>
</div>
<div className='flex gap-2 flex-wrap mb-3'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  07-april-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Inprogress</span>

  </div>
<div className='flex gap-2 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  React</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  RapidAPI</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  NodeJS</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  MongoDB</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
  WebRTC</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  Tailwind</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full">
  socket.io</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-indigo-200 text-indigo-700 rounded-full">
  openAI</div>
</div>

<div className=" flex gap-2 w-1/2 items-center">
           <a href='https://https-orchid-uditi-das-onrender-com.onrender.com' target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href='https://github.com/warriorBunny013/ORCHID-yt-watch-party' target="_blank">
            <button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2  w-full">Github</button></a>
           
           </div>
  </div>
  
  
</div>
</div>

<div className="md:pl-60 lg:pt-60 lg:pr-60  sm:p-10 min-h-screen">

 
<div data-aos="flip-right"  className="max-w-sm w-full box  lg:max-w-full lg:flex border">

<div className="ribbon"><span>FEATURED</span></div>
<div>
<div className="min-h-auto min-w-48 max-w-10 w-100 overflow-hidden border text-center">
     <img src="taskify-photo.png" alt="orchid" style={{objectFit: "cover"}} className="hover:scale-125 object-cover  h-[21rem] ease-in duration-150"/>
  </div>
</div>

  <div className="p-4 flex flex-col justify-between leading-normal">
    <div className="mb-2">
          <div className="text-2xl z-10 font-mono font-bold">02</div>
           <div className="text-5xl z-10 font-mono font-bold pb-5">TASKIFY</div>
           <p className="z-10 font-mono opacity-75">It helps organizations to manage tasks and distribute them among employees. It also has a real-time commenting system below each task</p>
</div>
<div className='flex gap-2 flex-wrap mb-3'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  21-may-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Inprogress</span>

  </div>
<div className='flex gap-2 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  React</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-indigo-200 text-indigo-700 rounded-full">
  Redux</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Firebase
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  NodeJS</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  MongoDB</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
  WebRTC</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  Tailwind</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full">
  Material UI</div>
</div>

<div className=" flex gap-2 w-1/2 items-center">
           <a href='https://taskify-mern-frontend.vercel.app' target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href='https://github.com/warriorBunny013/TASKIFY-MERN' target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
  </div>
</div>
</div>
           </>
    );
}

export default Projects;
