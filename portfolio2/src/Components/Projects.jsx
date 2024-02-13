import React from 'react'

const Projects = () => {
  return (
    <div name="project" className="flex flex-col snap-center justify-start items-start p-5 gap-10 w-full h-screen bg-primary text-secondary md:flex-row md:justify-center md:items-center">
      <div className="md:hidden">
        <h1 className="w-40 text-4xl font-bold border-b-2 pb-3 mb-4">Projects</h1>
        <p>Here are some of my work</p>
      </div>

      {/* projects section */}
      <div className="flex p-3 rounded-xl shadow-ternary shadow-2xl gap-10 w-full h-3/5 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary overflow-y-auto overflow-x-scroll md:overflow-y-hidden md:w-1/3 md:h-3/5">

        <div className="w-full h-full flex-shrink-0 p-2 md:p-0 md:flex items-center justify-center">
          <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-7">
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">1</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">2</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">3</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">4</div>
          </div>
        </div>

        <div className="w-full h-full flex-shrink-0 p-2 md:p-0 md:flex items-center justify-center">
          <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-7">
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">5</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">6</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">7</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">8</div>
          </div>
        </div>
      </div>

      <div className="hidden bg-secondary ml-16 rounded-md mr-16 h-96 w-1 md:flex"></div>

      <div className="hidden mb-44 md:flex">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg">Here are some of my work</p>
        </div>
      </div>
    </div>
  )
}

export default Projects