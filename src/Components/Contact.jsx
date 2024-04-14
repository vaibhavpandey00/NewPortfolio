import React from "react"
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import Lottie from "lottie-react";
import contactAnimation from "../Assets/contactMee.json";

const Contact = () => {
  return (
    <div name="contact" className="flex flex-col lg:flex-row w-full h-screen items-center justify-center snap-center bg-primary lg:gap-10">

      {/* Contact Form */}
      <div className="h-4/5 w-full lg:w-1/3 lg:h-2/3 lg:mt-14 flex items-center justify-center">
        <form className="flex flex-col w-[90%] p-3 lg:w-3/4 lg:p-6 h-full gap-5 bg-secondary rounded-3xl shadow-ternary shadow-2xl" action="">
          <h1 className="text-3xl text-primary font-bold mt-3 lg:mt-5">Get In Touch</h1>
          <input className="bg-ternary text-primary font-normal rounded-lg p-3" type="text" placeholder="Your Name" required />
          <input className="bg-ternary text-primary font-normal rounded-lg p-3" type="text" placeholder="Email" required />
          <textarea className="bg-ternary text-primary font-normal rounded-lg p-3" rows="10" placeholder="Your Message..." required />
          <button className="bg-ternary text-primary font-normal rounded-lg p-3 hover:bg-primary hover:text-secondary">Send</button>
        </form>
      </div>

      {/* contact section */}
      <div className="bg-primary hidden lg:flex items-center">
        <div className="flex flex-col">
          <div>
            <a className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="mailto:vaibhav.pandey0798@gmail.com"><MdEmail className="text-4xl mr-2" /></a>
          </div>
          <div>
            <a className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="http://www.linkedin.com/in/vaibhavpandey0" target="_blank"><IoLogoLinkedin className="text-4xl mr-2" /></a>
          </div>
          
          <div>
            <a className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="http://wa.me/+917987148753?text=Hello,%20lets%20chat" target="_blank"><IoLogoWhatsapp className="text-4xl mr-2" /></a>
          </div>
          
          <div>
            <a className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="https://www.instagram.com/vaibhavpandey0" target="_blank"><AiFillInstagram className="text-4xl mr-2" /></a>
          </div>
        </div>
      </div>

      {/* SVG section */}
      <div className="hidden lg:flex h-2/4">
        <Lottie animationData={contactAnimation} loop={true} color="#000" />
      </div>
    </div>
  )
}

export default Contact