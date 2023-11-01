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
  <img  className="w-full" src="todo.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">03</div>
    <div className="font-bold text-3xl mb-2">ToDo Backend</div>
  
   
    <p className="z-10 font-mono opacity-75">A NodeJS REST API project for beginners to get familiar with CRUD Operations using the standard ToDo List App example.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  24-Oct-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Backend</span>
<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  NodeJs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Expressjs
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  MongoDB</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  bcrypt</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
  JWT</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  Postman</div>
  
</div>
  <div className="m-5 flex gap-2 w-1/2 items-center">
           
        
           <a href="https://github.com/warriorBunny013/INTERNBRAND" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
   </div>
             </div>
             </Tilt>
             <Tilt>
          <div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="passport-auth.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">04</div>
    <div className="font-bold text-3xl mb-2">passport-auth</div>
  
    <p className="z-10 font-mono opacity-75">Implementation of passport library to restrict users from accessing an application from a particular organisation only.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4 pt-5'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  31-Oct-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Backend</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-cyan-200 text-cyan-700 rounded-full">
  Nodejs</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  ExpressJS</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Mongodb
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  Passport</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  Google Strategy</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
  Nodemon</div>
</div>
  <div className="m-5 flex gap-2 w-1/2 items-center">
           
        
           <a href="https://github.com/warriorBunny013/INTERNBRAND" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
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
  <img  className="w-full" src="aashayeinmockup.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">05</div>
    <div className="font-bold text-3xl mb-2">Aashayein</div>
  
   
    <p className="z-10 font-mono opacity-75">A Full-Stack Flutter application for people to book appointments in Rehabilition Centres across India.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  16-July-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Flutter</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Dart
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
 Firebase</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
 Firestore</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
 Cloud Functions</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
 GetX</div>
  
</div>
  <div className="m-5 flex gap-2 w-1/2 items-center">
           
        
           <a href="https://github.com/shreyxnsh/Aashayein-RehabCentre" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
   </div>
             </div>
             </Tilt>
             <Tilt>
          <div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="tiimimockup.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">06</div>
    <div className="font-bold text-3xl mb-2">Tiimi</div>
  
   
    
    <p className="z-10 font-mono opacity-75">Tiimi is a prototype clone of the very famous Tiimi - HR Management System application User Interface.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  28-june-2023
</span>
<span class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Frontend</span>
<span class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
  <div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Java</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Android
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
 Figma</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
 Firebase</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
 XML</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
 Dribble</div>

</div>
  <div className="m-5 flex gap-2 w-1/2 items-center">
         
        
           <a href="https://github.com/shreyxnsh/Tiimi" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
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
  <img className="w-full" src="tokenomics.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">07</div>
    <div className="font-bold text-3xl mb-2">ERC20 Tokenomics</div>
  
   
    <p className="z-10 font-mono opacity-75">A Solidity Smart Contracts project where I tried writing some contracts to define the tokenomics of a native project token. </p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4 pt-5'>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  08-Mar-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Blockchain</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Solidity</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  Blockchain
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  Remix</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  ERC20</div>

</div>
  <div className="m-5 flex gap-2 w-1/2 items-center">
           
        
           <a href="https://github.com/shreyxnsh/tokenomics" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
   </div>
             </div>
             </Tilt>
             <Tilt>
          <div data-aos="fade-up-left" className="max-w-sm border font-mono overflow-hidden">
  <img className="w-full" src="musikwiki.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
  <div className="text-xl z-10 font-mono font-bold">08</div>
    <div className="font-bold text-3xl mb-2">MusicWiki</div>
  
   
    <p className="z-10 font-mono opacity-75">MusicWiki is an unofficial Last.fm app that contains information about different music genres, the albums, artists and tracks listed under the genre.</p>
           
  </div>
  <div className='flex gap-2 px-4 flex-wrap pb-4 '>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
  <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
  </svg>
  16-Feb-2023
</span>
<span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">Fullstack</span>
<span className="bg-purple-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Completed</span>

  </div>
  <div className='flex gap-2 px-4 flex-wrap'>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
  Kotlin</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full">
  MVVM
  </div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
  Android</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-purple-200 text-purple-700 rounded-full">
  XML</div>
<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-pink-200 text-pink-700 rounded-full">
  RoomDB</div>
</div>
  <div className="m-5 flex gap-2 w-1/2 items-center">
           
        
           <a href="https://github.com/shreyxnsh/MusicWiki-GG" target="_blank"><button className="cursor-pointer mt-5 px-3 py-1 hover:bg-cyan-400 hover:animate-pulse border-2 w-full">Github</button></a>
        
   </div>
             </div>
             </Tilt>
          </div>
        
       </div>      
        
           </>
    );
}

export default Project;
