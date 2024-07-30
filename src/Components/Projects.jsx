import React, { useState } from 'react'
import ProjectData from "../Assets/Project/ProjectData";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Projects = () => {
  // Initialize state to keep track of open/closed state for each project
  const [ projectTitleHeights, setProjectTitleHeights ] = useState(Array(ProjectData.length).fill(false));

  // Function to toggle the description for a specific project
  const toggleDescription = (index) => {
    const newHeights = [ ...projectTitleHeights ];
    newHeights[ index ] = !newHeights[ index ];
    setProjectTitleHeights(newHeights);
  };

  return (
    <div name="project" className="flex flex-col items-start w-full h-screen pt-[4rem] bg-primary text-secondary  md:gap-10 md:flex-row md:justify-center md:items-center">
      <div className="md:hidden m-5">
        <h1 className="w-40 text-4xl font-bold border-b-2 pb-3 mb-4">Projects</h1>
        <p>Here are some of my work</p>
      </div>

      {/* projects section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-anchor-placement="center-bottom"
        className="flex rounded-xl gap-10 lg:shadow-ternary lg:shadow-2xl w-full h-[35rem] lg:flex-row lg:overflow-y-auto lg:w-[40%] lg:h-[50%]">

        {/* project section pc */}

        <div className="hidden lg:flex lg:w-full lg:h-full" >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[ Autoplay, Pagination, Navigation ]}
            className="mySwiper"
          >
            {
              ProjectData.map((project, index) => (
                <SwiperSlide key={index} className="hidden relative lg:flex w-full h-full bg-secondary p-3" >
                  <img className="rounded-xl w-full h-full cursor-pointer" src={project.image} alt="image" />
                  <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
                    <div className="absolute bottom-0 left-0 pb-7 w-full flex justify-center items-center duration-300 border-t-2 bg-[#fff] text-[#000] font-bold text-xl" > {project.name} </div>
                  </a>

                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>


        {/* projects section mobile */}
        <div className="flex-col w-full h-auto overflow-auto p-3 scrollBarHidden md:hidden">
          {ProjectData.map((project, index) => (
            <div key={index} className="w-full h-[12rem] relative mt-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img className="rounded-xl" src={project.image} alt="image" />

              <div className="absolute bottom-0 left-0 w-full flex justify-center items-center duration-300 bg-[#fff] text-[#000]" style={{
                height: projectTitleHeights[ index ] ? "12rem" : "4rem",
                borderTopLeftRadius: projectTitleHeights[ index ] ? "0.75rem" : "12px",
                borderTopRightRadius: projectTitleHeights[ index ] ? "0.75rem" : "12px"
              }} >
                <div className="overflow-hidden flex flex-col items-center gap-3 p-3 h-full w-full">
                  <div className="font-semibold border-b-2" onClick={() => toggleDescription(index)}>
                    {project.name}
                  </div>
                  <div className="w-full h-24 justify-center items-center " style={{ display: projectTitleHeights[ index ] ? "flex" : "none" }}>
                    {project.description.slice(0, 160)}
                  </div>
                  <div className="justify-between w-2/3 " style={{ display: projectTitleHeights[ index ] ? "flex" : "none" }}>
                    <div className="py-1 px-3 rounded-xl bg-secondary text-primary ">
                      <a href={project.liveLink} target="_blank">Live</a>
                    </div>
                    <div className="py-1 px-3 rounded-xl bg-secondary text-primary ">
                      <a href={project.ghLink} target="_blank">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default Projects;
