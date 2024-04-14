import React from 'react'

const Experience = () => {
  return (
    <div name="experience" className="flex flex-col p-5 justify-center md:gap-10 md:flex-row md:justify-start  md:items-center w-full h-screen bg-secondary text-primary">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="md:ml-80 md:mr-24">
        <h1 className="w-52 text-4xl font-bold border-b-2 pb-3 mb-6 md:border-0">Experience</h1>
        <p className="text-xl mb-5 md:mb-0">Technologies I've worked with</p>
      </div>
      <div className="hidden bg-primary rounded-md mr-16 h-96 w-1 md:flex"></div>
      <div className="flex p-5 rounded-xl shadow-ternary shadow-2xl gap-10 w-full h-2/3 md:w-1/3 md:h-2/4">Div 3</div>
    </div>
  )
}

export default Experience