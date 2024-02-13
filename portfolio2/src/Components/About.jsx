import React from 'react'

const About = () => {
  return (
    <div name="about" className="flex flex-col w-full h-screen snap-center justify-center items-start gap-5 md:flex-row md:justify-center md:items-center bg-secondary text-primary">
      <div className="flex flex-col gap-4 m-5 md:w-3/12">
        <div className="font-logo text-2xl md:w-1/3 md:text-3xl">
          Hello
        </div>
        <div className="flex text-4xl font-bold md:w-1/2">
        About Me
        </div>
      </div>
      <div className="hidden bg-primary rounded-md mr-16 h-96 w-1 md:flex"></div>
      <div className="ml-5 mr-5 md:w-1/3 md:m-0">
      <p className="text-lg lg:text-xl">
                I am an aspiring web developer
                with a strong foundation in web
                technologies and a keen desire to
                learn and grow. My journey at
                [Indore Institute of Science and
                Technology (IIST) College] has
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
      </div>
    </div>
  )
}

export default About