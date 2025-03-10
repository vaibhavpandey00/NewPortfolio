import { motion } from "framer-motion";
import React from 'react';
import { IoDocumentText } from "react-icons/io5";
import SplitString from "./SplitString";

const About = () => {
  const Hello = SplitString("Hello");
  const resumeUrl = "https://docs.google.com/document/d/1i5c6WIUMJvwMYKm4JiN4SWTSD3G6EQ_65LEqnaceH_U/export?format=pdf";

  const characterVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 }
  };

  return (
    <section
      id="about"
      name="about"
      className="flex flex-col w-full h-screen bg-secondary text-primary pt-16 md:pt-0 md:flex-row md:justify-center md:items-center md:gap-8"
    >
      {/* Left Section - Title */}
      <div className="flex flex-col gap-4 m-5 md:w-3/12">
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {Hello.map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              variants={characterVariants}
              className="font-logo text-2xl md:text-3xl"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <h2 className="text-4xl font-bold">About Me</h2>
      </div>

      {/* Divider */}
      <div className="hidden md:block bg-primary rounded-md h-96 w-1"></div>

      {/* Right Section - Content */}
      <div className="overflow-hidden flex flex-col h-[30rem] lg:w-[50rem] mb-9 md:m-0">
        <p
          data-aos="fade-left"
          data-aos-once="true"
          className="text-sm lg:text-lg p-3 mb-6 leading-relaxed"
        >
          I'm a Full-Stack Developer passionate about crafting intuitive digital experiences that solve real-world problems. With expertise in React, Node.js, and modern web technologies, I focus on building scalable applications that prioritize both performance and user experience.
          <br /><br />
          Currently, I'm working at Propero, developing and optimizing Shopify applications. My role involves architecting solutions, implementing new features, and ensuring reliability through comprehensive testing and performance optimization.
          <br /><br />
          Beyond my professional work, I actively explore emerging technologies through personal projects. I thrive in collaborative environments and approach each challenge as an opportunity to innovate and expand my technical toolkit.
        </p>

        {/* Desktop Resume Button - Using your original implementation */}
        <div className="hidden md:flex md:justify-center">
          <a href={resumeUrl} download="Vaibhav_Pandey_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <div
              data-aos="fade-up"
              className="p-2 flex justify-center items-center rounded-lg cursor-pointer bg-[#ffff] text-[#06223F] font-bold text-xl border"
            >
              Resume <IoDocumentText className="ml-2" />
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Resume Button - Using your original implementation */}
      <div className="w-full flex justify-center mb-10 md:hidden">
        <a href={resumeUrl} download="Vaibhav_Pandey_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-offset="-100"
            data-aos-delay="100"
            className="p-2 flex justify-center items-center rounded-lg bg-[#ffff] text-[#06223F] font-bold text-xl border"
          >
            Resume <IoDocumentText className="ml-2" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default About;