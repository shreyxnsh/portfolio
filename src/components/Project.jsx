import Tilt from 'react-parallax-tilt'
import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    return (
      <>
        <div className="md:pl-20 md:pr-20 pt-20 sm:pl-10 sm:pr-10 min-h-screen ">   
           <div className="flex justify-center flex-wrap gap-20">
           {/* <span className="font-bold tracking-widest">FEATURED PROJECT</span> */}
        
         <Tilt>
          <div data-aos="fade-up-right" className="max-w-sm border font-mono overflow-hidden">
  <img  className="w-full" src="https://user-images.githubusercontent.com/97738453/237886571-d9d6c585-e4c9-47ee-8c92-a2087a5c5c9b.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">03</div>
    <div className="font-bold text-3xl mb-2">DELIGHT</div>
  
   
    <p className="z-10 font-mono opacity-75">Easy ordering healthy food and convenient, with real-time delivery tracking to ensure your meals arrive fresh and on time</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  13-Nov-2022
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Inprogress</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  NodeJs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Mongodb
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  StripeAPI</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  Socket.io</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
  SCSS</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  Tailwind</div>
  
</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a href="https://delight-uditi.onrender.com" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href="https://github.com/warriorBunny013/Delight" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
   </div>
             </div>
             </Tilt>
             <Tilt>
          <div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="https://user-images.githubusercontent.com/97738453/237698574-3982043c-595e-47e0-b398-78bab9b9612d.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">04</div>
    <div className="font-bold text-3xl mb-2">TRAVELEASY</div>
  
   
    <p className="z-10 font-mono opacity-75">Browse Hotels by places and Book hotels.Multipage website with user authentication.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4 pt-5'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  10-sept-2022
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-cyan-200 text-cyan-700 rounded-full">
  Nodejs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Nodemailer</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Mongodb
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  Scss</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  Tailwind</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
  Google maps</div>
</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a href="https://traveleasy-uditi.onrender.com" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href="https://github.com/warriorBunny013/TravelEasy-Final" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
             </Tilt>
          </div>
        
       </div>  


        <div className="md:pl-20 md:pr-20 pt-20 sm:pl-10 sm:pr-10 min-h-screen ">   
           <div className="flex justify-center flex-wrap gap-20">
           {/* <span className="font-bold tracking-widest">FEATURED PROJECT</span> */}
        
         <Tilt>
          <div data-aos="fade-up-right" className="max-w-sm border font-mono overflow-hidden">
  <img  className="w-full" src="internbrand.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">05</div>
    <div className="font-bold text-3xl mb-2">INTERNBRAND</div>
  
   
    <p className="z-10 font-mono opacity-75">Students and professionals can view and filter postings of internships in their desired company.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  13-june-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Inprogress</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  NodeJs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Mongodb
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  ReactJs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  Tailwind</div>
  
</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a href="https://internbrand-uditi-frontend.onrender.com/" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href="https://github.com/warriorBunny013/INTERNBRAND" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
   </div>
             </div>
             </Tilt>
             <Tilt>
          <div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="skia.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">06</div>
    <div className="font-bold text-3xl mb-2">SKIA EVENTS</div>
  
   
    <p className="z-10 font-mono opacity-75">Host events like Hackathons or codeathons and edit details in real time.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  28-june-2023
</span>
<span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Frontend</span>
<span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Inprogress</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-cyan-200 text-cyan-700 rounded-full">
  Reactjs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Redux</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Localstorage
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  Tailwind</div>

</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a href="https://skia-uditi-das.onrender.com/" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href="https://github.com/warriorBunny013/skia-reactjs" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
             </Tilt>
          </div>
        
       </div>   
       
          
        <div className="md:pl-20 md:pr-20 pt-20 sm:pl-10 sm:pr-10 min-h-screen  ">   
           <div className="flex justify-center flex-wrap gap-20">
           {/* <span className="font-bold tracking-widest">FEATURED PROJECT</span> */}
         <Tilt>
          <div data-aos="fade-up-right" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="storedb.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">07</div>
    <div className="font-bold text-3xl mb-2">CHATIFY</div>
  
   
    <p className="z-10 font-mono opacity-75">Group chating application that allows the users socialize without the need to authenticate their details</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4 pt-5'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  08-july-2022
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">fullstack</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Nodejs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  expressjs
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  socket.io</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  EJS</div>

</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a href="https://chatify-app.onrender.com/" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a href="https://github.com/warriorBunny013/chat-app" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
             </Tilt>
             <Tilt>
          <div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="student-db.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">08</div>
    <div className="font-bold text-3xl mb-2">STORE DB</div>
  
   
    <p className="z-10 font-mono opacity-75">A web application to authenticate admin users, store and export student database in form of .csv</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4 '>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  10-march-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Nodejs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  MYSQL
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  JWT</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  Reactjs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  Multer</div>
</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a target="_blank" href="https://drive.google.com/file/d/10DY6If143hWy5W5pTN6-Q-dTm4D7cZGl/view?usp=sharing"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a target="_blank" href="http://github.com/warriorBunny013/StudentDB-DentalKart"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
             </Tilt>
          </div>
        
       </div>      
        
        <div className="md:pl-20 md:pr-20 pt-20 sm:pl-10 sm:pr-10 min-h-screen  ">   
           <div className="flex justify-center flex-wrap gap-20">
           {/* <span className="font-bold tracking-widest">FEATURED PROJECT</span> */}
          <Tilt>
          <div data-aos="fade-up-right" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="sportozo.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">09</div>
    <div className="font-bold text-3xl mb-2">SPORTOZO</div>
  
   
    <p className="z-10 font-mono opacity-75">where players can register for the upcomming tounaments, admin dashboard implimented.Made with PHP and MYSQL.Deployed only <span className='text-white'>frontend</span></p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  10-oct-2022
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Php</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Mysql
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  particlejs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  AOS</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  ejs</div>

</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a target="_blank" href="https://sportozo-uditi.netlify.app/"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a target="_blank" href="https://github.com/warriorBunny013/PLAYERS-DBMS-PROJECT-1"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
             </Tilt>
<Tilt>
<div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="lookup.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">10</div>
    <div className="font-bold text-3xl mb-2">LOOKUP</div>
  
   
    <p className="z-10 font-mono opacity-75">A web application to store a reading wishlist in local with automatic image generation.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4 pt-5'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  09-march-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Frontend</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">completed</span>

  </div>
  <div className='flex px-4 gap-2 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  React</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Local storage
  </div>

<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full">
  Material UI</div>
</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a target="_blank" href="https://lookup-uditidas.netlify.app"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a target="_blank" href="https://github.com/warriorBunny013/lookup"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
</div>
</Tilt>
          </div>
        
       </div>      
        
        
       <div className="md:pl-20 md:pr-20 pt-20 sm:pl-10 sm:pr-10 min-h-screen  ">   
           <div className="flex justify-center flex-wrap gap-20">
           {/* <span className="font-bold tracking-widest">FEATURED PROJECT</span> */}
          <Tilt>
          <div data-aos="fade-up-right" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="multiply.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">11</div>
    <div className="font-bold text-3xl mb-2">MULTIPLY</div>
  
   
    <p className="z-10 font-mono opacity-75">A multi-utility app with auto-theme(light/dark) mode generation by tracking the time of the day,Flashcards,games,Tip calculator and many more.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  02-aug-2022
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Frontend</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">completed</span>

  </div>
  <div className='flex px-4 gap-2 flex-wrap'>


<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
  Vanilla js</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  API</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-yellow-200 text-yellow-700 rounded-full">
  HTML/CSS</div>
</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a target="_blank" href="https://multiply-uditidas.netlify.app/"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a target="_blank" href="https://github.com/warriorBunny013/Multiply-multipurpose-website"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
             </Tilt>
<Tilt>
<div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="Communify.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">12</div>
    <div className="font-bold text-3xl mb-2">COMMUNIFY</div>
  
   
    <p className="z-10 font-mono opacity-75">where organisations can form groups and post job listings.It's literally a FB for jobs.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  10-may-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Frontend</span>
<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Inprogress</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  React</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  Responsiveness</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  Bootstrap</div>
</div>
  <div className="m-2 flex gap-2 w-1/2 items-center">
           <a target="_blank" href="https://frontend-uditi-das013.netlify.app/"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-transparent hover:animate-pulse border-2 w-full bg-white text-black font-bold hover:text-white">Live</button></a>
        
           <a target="_blank" href="https://github.com/warriorBunny013/frontend"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
           </div>
             </div>
             </Tilt>
          </div>
        
       </div>   
           </>
    );
}

export default Project;
