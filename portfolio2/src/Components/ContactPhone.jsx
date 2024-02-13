import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const ContactPhone = () => {
    return (
        <div className="flex md:hidden pt-9 pb-4 w-full h-2/4 bg-primary">
            <div className="flex flex-col ml-3 gap-4 w-full">
                <div className="flex gap-3 justify-center items-center w-full">
                    <div><a className="flex justify-start items-center cursor-pointer" href="mailto:vaibhav.pandey0798@gmail.com"><MdEmail className="text-2xl mr-1" />Email</a></div>
                    <div><a className="flex justify-start items-center cursor-pointer" href="http://www.linkedin.com/in/vaibhavpandey0" target="_blank"><IoLogoLinkedin className="text-2xl mr-1" />LinkedIn</a></div>
                    <div><a className="flex justify-start items-center cursor-pointer" href="https://www.instagram.com/vaibhavpandey0" target="_blank"><AiFillInstagram className="text-2xl mr-1" />Instagram</a></div>
                </div>
                <div className="flex gap-4 justify-center items-center w-full">
                    <div><a className="flex justify-start items-center cursor-pointer" href="tel:+917987148753"><FaPhone className="text-2xl mr-1" />Phone</a></div>
                    <div><a className="flex justify-start items-center cursor-pointer" href="http://wa.me/+917987148753?text=Hello,%20lets%20chat" target="_blank"><IoLogoWhatsapp className="text-2xl mr-1" />WhatsApp</a></div>
                    <div><a className="flex justify-start items-center cursor-pointer" href=""><FaFacebook className="text-2xl mr-1" />Facebook</a></div>
                </div>
            </div>
        </div>
    )
}

export default ContactPhone