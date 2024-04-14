import React from 'react'

const Projects = () => {
  return (
    <div name="project" className="flex flex-col items-start w-full h-screen pt-[4rem] bg-primary text-secondary  md:gap-10 md:flex-row md:justify-center md:items-center border">
      <div className="md:hidden m-5">
        <h1 className="w-40 text-4xl font-bold border-b-2 pb-3 mb-4">Projects</h1>
        <p>Here are some of my work</p>
      </div>

      {/* projects section */}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="flex p-1 rounded-xl gap-10 shadow-ternary md:shadow-2xl w-full h-[30rem] md:flex-row md:overflow-y-auto md:w-1/3 md:h-3/5">

        <div className="hidden w-full h-full flex-shrink-0 p-2  md:p-0 md:flex items-center justify-center ">
          <div className="grid grid-flow-row-4 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-7">
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">1</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">2</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">3</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">4</div>
          </div>
        </div>

        <div className="hidden w-full h-full flex-shrink-0 p-2 md:p-0 md:flex items-center justify-center">
          <div className="grid grid-flow-row-4 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-7">
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">5</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">6</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">7</div>
            <div className="border flex justify-center items-center h-44 md:w-64 md:h-48 rounded-md md:hover:shadow-ternary shadow-xl duration-300">8</div>
          </div>
        </div>

        <div className="flex-col w-full h-auto overflow-auto p-3 scrollBarHidden md:hidden">
          <div className="w-full h-[12rem] mt-2 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border">1</div>
          <div className="w-full h-[12rem] mt-2 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border">2</div>
          <div className="w-full h-[12rem] mt-2 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border">3</div>
          <div className="w-full h-[12rem] mt-2 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border">4</div>
          <div className="w-full h-[12rem] mt-2 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border">5</div>
          <div className="w-full h-[12rem] mt-2 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border">6</div>
          <div className="w-full h-[12rem] mt-2 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border">7</div>
          <div className="w-full h-[12rem] mt-2 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border">8</div>
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