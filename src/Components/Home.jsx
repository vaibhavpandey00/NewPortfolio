import React, { useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full text bg-primary text-white flex flex-col justify-end items-center ">
      <div className="text-3xl md:text-4xl flex flex-col justify-center items-center font-bold mb-96 md:mb-80">
        <div>
          <h1 className="">I'm Vaibhav</h1>
        </div>
        <div className="flex">
          <h1 className="mr-3">A</h1>
          <div className="bgStrokeText">
            <Typewriter
              words={["Web Developer", "Student", "Freelancer", "Otaku"]}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              delaySpeed={2000}
              loop
            />
          </div>

        </div>
        <div className="flex text-xl mt-5 gap-5 md:gap-8">
          <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="p-2 rounded-lg bg-secondary text-primary  lg:cursor-pointer"><Link to="contact" smooth duration={1000}>Contact</Link></div>
          <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="p-2 rounded-lg bg-[#ffff] lg:cursor-pointer border"><Link to="project" smooth duration={1000}>Projects</Link></div>
        </div>
      </div>
      <div className="hidden md:flex mb-3 animate-bounce text-primary bg-secondary p-3 rounded-full "><FaArrowDown />
      </div>
    </div>
  )
}

export default Home