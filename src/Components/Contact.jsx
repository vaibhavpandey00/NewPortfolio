import React from "react"
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import contactAnimation from "../Assets/contactMee.json";

const Contact = () => {
  return (
    <div name="contact" className="flex flex-col lg:flex-row w-full h-screen items-center justify-center snap-center bg-primary lg:gap-10">

      {/* Contact Form */}

      <form className="flex flex-col h-[68%] lg:h-[68%] w-[95%] p-3 lg:w-[25%] lg:p-6 gap-5 bg-secondary rounded-3xl shadow-ternary shadow-2xl" action="">
        <h1 className="text-3xl text-primary font-bold mt-3 lg:mt-5">Get In Touch</h1>
        <input className="bg-ternary text-primary font-normal rounded-lg p-3" type="text" name="name" placeholder="Your Name" required />
        <input className="bg-ternary text-primary font-normal rounded-lg p-3" type="email" name="email" placeholder="Email" required />
        <textarea className="bg-ternary text-primary font-normal rounded-lg p-3" rows="10" name="message" placeholder="Your Message..." required />
        <button className="bg-ternary text-primary font-normal rounded-lg p-3 hover:bg-primary hover:text-secondary">Send</button>
      </form>

      {/* contact section */}
      <div className="bg-primary hidden lg:flex items-center">
        <div className="flex flex-col">
          <div>
            <a
              data-aos="fade-up-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="mailto:vaibhav.pandey0798@gmail.com"><MdEmail className="text-4xl mr-2" /></a>
          </div>
          <div>
            <a
              data-aos="fade-up-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="http://www.linkedin.com/in/vaibhavpandey0" target="_blank"><IoLogoLinkedin className="text-4xl mr-2" /></a>
          </div>
          <div>
            <a
              data-aos="fade-up-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="https://www.github.com/vaibhavpandey00" target="_blank"><FaGithub className="text-4xl" /></a>
          </div>
          <div>
            <a
              data-aos="fade-up-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="https://www.instagram.com/vaibhavpandey0" target="_blank"><AiFillInstagram className="text-4xl mr-2" /></a>
          </div>
          <div>
            <a
              data-aos="fade-up-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="flex justify-start items-center text-xl lg:m-6 cursor-pointer rounded-full" href="http://wa.me/+917987148753?text=Hello,%20lets%20chat" target="_blank"><IoLogoWhatsapp className="text-4xl mr-2" /></a>
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