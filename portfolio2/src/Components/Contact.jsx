import React from "react"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div name="contact" className="flex flex-col md:flex-row w-full h-screen items-center justify-center snap-center bg-primary gap-7 md:gap-10">
      <div className="w-full h-full border md:w-1/4 md:h-2/3 rounded-xl mt-14 text-primary font-medium p-3 md:p-6 bg-secondary shadow-secondary shadow-2xl overflow-y-auto scrollbar-thin scrollbar-track-secondary scrollbar-thumb-primary">
        <h1 className="text-3xl">Get In Touch</h1>
        <form className="flex-col items-center justify-center text-primary" action="" method="post">
          <input className="outline-none bg-ternary border-b-2 p-2 rounded-md mt-5 mb-9 w-full h-14" type="text" placeholder="Your Name" />
          <input className="outline-none bg-ternary border-b-2 p-2 rounded-md mb-9 w-full h-14" type="Email" placeholder="Your Email" />
          <textarea className="outline-none bg-ternary p-2 rounded-md mb-9" name="" cols="" rows="10" placeholder="Your Message Here"></textarea>
          <div className="w-full h-10 flex justify-center items-center cursor-pointer border rounded-lg md:hover:bg-ternary duration-200">Send</div>
        </form>
      </div>
      <div className="h-4/5 w-full p-5 md:p-0 bg-ternary shadow-ternary shadow-2xl md:shadow-none md:bg-primary md:w-1/3 md:h-2/3 md:mt-14 flex items-center">
        <div className="flex ml-4 md:ml-0 gap-4 md:gap-0 flex-col">
          <div><a className="flex justify-start items-center text-xl md:m-6 cursor-pointer" href="mailto:vaibhav.pandey0798@gmail.com"><MdEmail className="text-4xl" />Email</a></div>
          <div><a className="flex justify-start items-center text-xl md:m-6 cursor-pointer" href="tel:+917987148753"><FaPhone className="text-4xl" />Phone</a></div>
          <div><a className="flex justify-start items-center text-xl md:m-6 cursor-pointer" href="http://wa.me/+917987148753?text=Hello,%20lets%20chat" target="_blank"><IoLogoWhatsapp className="text-4xl" />WhatsApp</a></div>
          <div><a className="flex justify-start items-center text-xl md:m-6 cursor-pointer" href="http://www.linkedin.com/in/vaibhavpandey0" target="_blank"><IoLogoLinkedin className="text-4xl" />LinkedIn</a></div>
          <div><a className="flex justify-start items-center text-xl md:m-6 cursor-pointer" href=""><FaFacebook className="text-4xl" />Facebook</a></div>
          <div><a className="flex justify-start items-center text-xl md:m-6 cursor-pointer" href="https://www.instagram.com/vaibhavpandey0" target="_blank"><AiFillInstagram className="text-4xl" />Instagram</a></div>
        </div>
      </div>
    </div>
  )
}

export default Contact