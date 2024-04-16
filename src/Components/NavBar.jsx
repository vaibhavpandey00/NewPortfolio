import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <header className="flex justify-between items-center fixed w-screen px-2 py-2 h-15 md:px-7 md:h-20 z-50 bg-primary">
            <h1
                data-aos="fade-right"
                data-aos-delay="30000"
                className="text-5xl font-logo mt-3 md:mt-4">Vaibhav</h1>

            <ul className="hidden md:flex justify-center items-center gap-6">
                <li
                    data-aos="fade-down"
                    data-aos-delay="200"
                    className="cursor-pointer p-3 rounded-3xl text-xl font-medium hover:font-semibold hover:scale-110 duration-300"><Link to='home' smooth duration={800}>Home</Link></li>
                <li
                    data-aos="fade-down"
                    data-aos-delay="300"
                    className="cursor-pointer p-3 rounded-3xl text-xl font-medium hover:font-semibold hover:scale-110 duration-300"><Link to='about' smooth duration={800}>About</Link></li>
                <li
                    data-aos="fade-down"
                    data-aos-delay="400"
                    className="cursor-pointer p-3 rounded-3xl text-xl font-medium hover:font-semibold hover:scale-110 duration-300"><Link to='project' smooth duration={800}>Project</Link></li>
                <li
                    data-aos="fade-down"
                    data-aos-delay="500"
                    className="cursor-pointer p-3 rounded-3xl text-xl font-medium hover:font-semibold hover:scale-110 duration-300"><Link to='experience' smooth duration={800}>Experience</Link></li>
                <li
                    data-aos="fade-down"
                    data-aos-delay="600"
                    className="cursor-pointer p-3 rounded-3xl text-xl font-medium hover:font-semibold hover:scale-110 duration-300"><Link to='contact' smooth duration={800}>Contact</Link></li>
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 text-gray-500 md:hidden">
                {nav ? <div className="z-[999] text-primary"><FaTimes size={"25"} /></div> : <div><FaBarsStaggered size={"25"} /></div>}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-secondary text-primary font-semibold">
                    <li className="px-4 cursor-pointer py-6 text-3xl"><Link onClick={() => setNav(!nav)} to='home' smooth duration={800}>Home</Link></li>
                    <li className="px-4 cursor-pointer py-6 text-3xl"><Link onClick={() => setNav(!nav)} to='about' smooth duration={800}>About</Link></li>
                    <li className="px-4 cursor-pointer py-6 text-3xl"><Link onClick={() => setNav(!nav)} to='project' smooth duration={800}>Project</Link></li>
                    <li className="px-4 cursor-pointer py-6 text-3xl"><Link onClick={() => setNav(!nav)} to='experience' smooth duration={800}>Experience</Link></li>
                    <li className="px-4 cursor-pointer py-6 text-3xl"><Link onClick={() => setNav(!nav)} to='contact' smooth duration={800}>Contact</Link></li>
                </ul>
            )}
        </header>
    )
}

export default NavBar