import React, {useState} from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(false);

  return (
    <header className="flex justify-between items-center fixed w-full px-2 py-2 h-15 md:px-7 md:h-20 bg-primary">
        <h1 className="text-5xl font-logo mt-3 md:mt-4">Vaibhav</h1>

        <ul className="hidden md:flex gap-8">
            <li className="cursor-pointer text-xl font-medium hover:scale-110 duration-300">Home</li>
            <li className="cursor-pointer text-xl font-medium hover:scale-110 duration-300">About</li>
            <li className="cursor-pointer text-xl font-medium hover:scale-110 duration-300">Project</li>
            <li className="cursor-pointer text-xl font-medium hover:scale-110 duration-300">Experience</li>
            <li className="cursor-pointer text-xl font-medium hover:scale-110 duration-300">Contact</li>
        </ul>

        <div onClick={() => setNav(!nav)} className="text-xl z-10 font-bold cursor-pointer md:hidden">
            {nav ? <FaTimes size={25}/>: <FaBarsStaggered size={25}/>}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-red-300 gap-10">
                <li className="cursor-pointer text-3xl font-medium">Home</li>
                <li className="cursor-pointer text-3xl font-medium">About</li>
                <li className="cursor-pointer text-3xl font-medium">Project</li>
                <li className="cursor-pointer text-3xl font-medium">Experience</li>
                <li className="cursor-pointer text-3xl font-medium">Contact</li>
            </ul>
        )}
    </header>
  )
}

export default NavBar