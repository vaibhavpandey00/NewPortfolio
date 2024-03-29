import React from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full text bg-primary text-white flex flex-col justify-end items-center">
      <div className="text-3xl md:text-4xl flex flex-col justify-center items-center font-bold mb-96 md:mb-96">
        <div>
          <h1 className="">I'm Vaibhav</h1>
        </div>
        <div><h1 className="">a Web Developer</h1></div>
      </div>
      <div className="hidden md:flex mb-3 animate-bounce text-primary bg-secondary p-3 rounded-full "><FaArrowDown /></div>
    </div>
  )
}

export default Home