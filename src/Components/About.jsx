import { motion } from "framer-motion";
import React from 'react';
import { IoDocumentText } from "react-icons/io5";
import VaibhavPandeyResume from "../Assets/VaibhavPandeyResume.pdf";
import SplitString from "./SplitString";

const About = () => {
  const Hello = SplitString("Hello");

  const characterVariants = {
    hidden: {
      opacity: 0
    },
    reveal: {
      opacity: 1
    }
  }

  return (
    <div name="about" className="flex flex-col w-full h-screen items-start pt-[4rem] bg-secondary text-primary md:pt-0  md:flex-row md:justify-center md:items-center md:gap-5">
      <div className="flex flex-col gap-4 m-5 md:w-3/12">
        {/* <div className="font-logo text-2xl md:w-1/3 md:text-3xl">Hello</div> */}
        <motion.h1
          initial="hidden"
          whileInView={"reveal"}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {
            Hello.map((char, index) => {
              return <motion.span
                key={index}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={characterVariants}
                className="font-logo text-2xl md:w-1/3 md:text-3xl"
              >
                {char}
              </motion.span>
            })
          }
        </motion.h1>

        <div className="flex text-4xl font-bold md:w-1/2">
          About Me
        </div>
      </div>
      <div className="hidden bg-primary rounded-md mr-16 h-96 w-1 md:flex"></div>
      <div className="overflow-hidden h-[30rem] lg:w-[50rem] mb-9 flex justify-center items-center md:m-0 md:flex-col ">

        <p
          data-aos="fade-left"
          className="text-lg lg:text-xl mb-0 p-5 lg:mb-10">
          I am an aspiring web developer
          with a strong foundation in web
          technologies and a keen desire to
          learn and grow. My journey at
          Indore Institute of Science and
          Technology (IIST) College has
          equipped me with a solid
          understanding of web
          development principles and
          ignited a passion for crafting
          dynamic digital solutions. Driven by
          curiosity and a commitment to
          excellence, I am eager to apply
          my knowledge and immerse
          myself in real-world projects.
        </p>
        <a href={VaibhavPandeyResume} download>
          <div
            data-aos="fade-up"
            className="p-2 md:flex md:justify-center md:items-center rounded-lg cursor-pointer bg-[#ffff] text-[#06223F] font-bold text-xl hidden border">Resume <IoDocumentText />
          </div>
        </a>

      </div>
      <div className="w-full flex justify-center mb-10 md:hidden">
        <a href={VaibhavPandeyResume} download>
          <div
            data-aos="fade-up"
            className="p-2 flex justify-center items-center rounded-lg bg-[#ffff] text-[#06223F] font-bold text-xl border">Resume <IoDocumentText />
          </div>
        </a>
      </div>
    </div>
  )
}

export default About