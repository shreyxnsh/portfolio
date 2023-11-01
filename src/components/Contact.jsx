import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
	useEffect(() => {
		AOS.init();
	  }, []);
    return (
      <>
        <div className="flex justify-center items-center h-screen ">
	
	<div className="container mx-auto my-4 flex justify-between px-4 lg:px-40">
	
		<div data-aos="flip-up" data-aos-duration="700" className="glass-effect h-1/2  w-full p-10 my-4 md:px-12 lg:w-9/12 lg:pl-10 lg:pr-80 mr-auto border ">
		{/* <p className="fonthtml flex ">{`<p>`}</p> */}
		<div className="text-4xl font-mono capitalize hover:text-cyan-400 tracking-widest font-bold mb-10">Contact me :</div>
			<div className='flex flex-wrap 2xl:flex-nowrap gap-10'>
			<p className='text-xl md:text-3xl font-mono tracking-wide mt-2'>shreyanshatwork@gmail.com</p>
			<a href = "mailto:shreyanshatwork@gmail.com"><button className=" cursor-pointer mt-5 px-3 py-1 whitespace-nowrap hover:bg-cyan-400 hover:animate-pulse border-2 font-mono" >Write an email 📩</button></a>
			</div>
			{/* <p className="fonthtml flex justify-end ">{`</p>`}</p> */}
			

		</div>
		<div data-aos="fade-left"
     data-aos-duration="500" className=" invisible md:visible">
		<lottie-player  src="https://lottie.host/0d3de004-07de-4679-93b8-9b3ff1ec8a91/4YsN7YrI5l.json"  background="transparent"  style={{width: "500px", height: "400px"}}   loop  autoplay></lottie-player>

		</div>
		
		
    </div>
	
</div>    

       
        
           </>
    );
}

export default Contact;
