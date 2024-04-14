import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactPhone = () => {
    return (
        <div name="contact" className="flex pt-9 pb-4 w-full h-[9rem] lg:h-[4rem] bg-secondary text-primary">
            <div className="flex flex-col ml-3 gap-4 w-full">
                <div className="flex lg:hidden gap-5 justify-center items-center w-full">
                    <div>
                        <a className="flex rounded-full p-2 justify-start items-center border" href="mailto:vaibhav.pandey0798@gmail.com"><MdEmail className="text-2xl" /></a>
                    </div>
                    <div>
                        <a className="flex rounded-full p-2 justify-start items-center border" href="http://www.linkedin.com/in/vaibhavpandey0" target="_blank"><IoLogoLinkedin className="text-2xl" /></a>
                    </div>
                    <div>
                        <a className="flex rounded-full p-2 justify-start items-center border" href="https://www.instagram.com/vaibhavpandey0" target="_blank"><AiFillInstagram className="text-2xl" /></a>
                    </div>
                    <div>
                        <a className="flex rounded-full p-2 justify-start items-center border" href="https://www.instagram.com/vaibhavpandey0" target="_blank"><FaGithub className="text-2xl" /></a>
                    </div>
                </div>
                <div className="flex gap-4 justify-center items-center h-14 lg:h-0 w-full">
                    <p className="text-[11px] text-[#a8a8a8]">copyright &copy; 2024 Vaibhav All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

{/* <div>
                        <a className="flex rounded-full p-2 justify-start items-center border" href="http://wa.me/+917987148753?text=Hello,%20lets%20chat" target="_blank"><IoLogoWhatsapp className="text-2xl" /></a>
                    </div>
                    <div>
                        <a className="flex rounded-full p-2 justify-start items-center border" href=""><FaFacebook className="text-2xl" /></a>
                    </div>
<div>
                        <a className="flex rounded-full p-2 justify-start items-center border" href="tel:+917987148753"><FaPhone className="text-2xl" /></a>
                    </div>  */}

export default ContactPhone