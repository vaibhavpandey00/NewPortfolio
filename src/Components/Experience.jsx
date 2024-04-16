import React from 'react';
import c from "../Assets/Images/c.png";
import cpp from "../Assets/Images/cpp.png";
import express from "../Assets/Images/express.png";
import java from "../Assets/Images/java.png";
import js from "../Assets/Images/js.png";
import mongo from "../Assets/Images/mongo.png";
import node from "../Assets/Images/node.png";
import react from "../Assets/Images/react.png";

const Experience = () => {
  return (
    <div name="experience" className="flex flex-col p-5 justify-center md:gap-10 md:flex-row md:justify-start  md:items-center w-full h-screen bg-secondary text-primary">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="md:ml-80 md:mr-24">
        <h1 className="w-52 text-4xl font-bold border-b-2 pb-3 mb-6 md:border-0">Experience</h1>
        <p className="text-xl mb-5 md:mb-0">Technologies I've worked with</p>
      </div>
      <div className="hidden bg-primary rounded-md mr-16 h-96 w-1 md:flex"></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-3 lg:grid-rows-2 p-5 rounded-xl shadow-ternary shadow-2xl gap-10 w-full h-2/3 md:w-1/3 md:h-2/4">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="h-[6rem] flex justify-center items-center" > <img className="bg-[#fff] p-3 rounded-3xl h-20 " src={react} alt="" /> </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="h-[6rem] flex justify-center items-center" > <img className="bg-[#fff] p-3 rounded-3xl" src={node} alt="" /> </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="h-[6rem] flex justify-center items-center" > <img className="bg-[#fff] p-3 rounded-3xl" src={express} alt="" /> </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="h-[6rem] flex justify-center items-center" > <img className="bg-[#fff] p-3 rounded-3xl" src={mongo} alt="" /> </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="h-[6rem] flex justify-center items-center" > <img className="bg-[#fff] p-3 rounded-3xl" src={js} alt="" /> </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="h-[6rem] flex justify-center items-center" > <img className="bg-[#fff] p-3 rounded-3xl" src={c} alt="" /> </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="h-[6rem] flex justify-center items-center" > <img className="bg-[#fff] p-3 rounded-3xl" src={cpp} alt="" /> </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="h-[6rem] flex justify-center items-center" > <img className="bg-[#fff] p-3 rounded-3xl" src={java} alt="" /> </div>
      </div>
    </div>
  )
}

export default Experience