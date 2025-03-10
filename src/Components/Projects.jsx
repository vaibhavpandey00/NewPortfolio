import React, { useState } from 'react';
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
  const [ expandedProjects, setExpandedProjects ] = useState(Array(ProjectData.length).fill(false));

  // Function to toggle the description for a specific project
  const toggleDescription = (index) => {
    const newState = [ ...expandedProjects ];
    newState[ index ] = !newState[ index ];
    setExpandedProjects(newState);
  };

  return (
    <section
      id="project"
      name="project"
      className="flex flex-col items-start w-full h-screen bg-primary pt-16 bg-gray-50 text-gray-800 md:gap-10 md:flex-row md:justify-center md:items-center"
    >
      {/* Mobile Heading */}
      <div className="md:hidden px-5 py-3">
        <h1 className="text-4xl font-bold border-b-2 pb-3 mb-4 w-40">Projects</h1>
        <p className="text-lg">Here are some of my work</p>
      </div>

      {/* Projects Container */}
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="300"
        data-aos-anchor-placement="center-bottom"
        className="flex rounded-xl gap-10 w-full h-[35rem] lg:shadow-gray-200 lg:shadow-2xl lg:flex-row lg:overflow-y-auto lg:w-[40%] lg:h-[50%]"
      >
        {/* Desktop Project Carousel */}
        <div className="hidden lg:flex lg:w-full lg:h-full bg-secondary">
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
              dynamicBullets: true
            }}
            navigation={true}
            modules={[ Autoplay, Pagination, Navigation ]}
            className="mySwiper rounded-xl overflow-hidden"
          >
            {ProjectData.map((project, index) => (
              <SwiperSlide key={index} className="hidden relative lg:flex w-full h-full bg-white p-3 group">
                <img
                  className="rounded-xl w-full h-full object-cover transition-all duration-300 group-hover:opacity-80"
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <div className="p-6 text-gray-800 max-w-lg">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="mb-4 font-semibold text-sm">{project.description.slice(0, 120)}...</p>
                    <div className="flex gap-4">
                      <a
                        href={project.ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 bg-secondary text-primary rounded-md font-medium hover:bg-opacity-90 transition-all"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href={project.ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:bg-opacity-90 transition-all"
                >
                  <div className="absolute bottom-0 left-0 pb-7 w-full flex justify-center items-center duration-300 border-t-2 bg-white text-gray-800 font-bold text-xl">
                    {project.name}
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Projects List */}
        <div className="flex-col w-full h-auto overflow-auto p-3 scrollBarHidden md:hidden">
          {ProjectData.map((project, index) => (
            <div
              key={index}
              className="w-full h-auto relative mt-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white"
            >
              <img
                className="rounded-xl w-full h-48 object-cover transition-all duration-300 hover:opacity-90"
                src={project.image}
                alt={project.name}
                loading="lazy"
              />

              <div
                className="absolute bottom-0 left-0 w-full flex justify-center items-center transition-all duration-300 bg-white text-gray-800 hover:bg-opacity-95"
                style={{
                  height: expandedProjects[ index ] ? "auto" : "4rem",
                  borderTopLeftRadius: expandedProjects[ index ] ? "0.75rem" : "12px",
                  borderTopRightRadius: expandedProjects[ index ] ? "0.75rem" : "12px"
                }}
              >
                <div className="overflow-hidden flex flex-col items-center gap-3 p-3 h-full w-full">
                  <div
                    className="font-semibold border-b-2 w-full text-center py-2 cursor-pointer hover:text-gray-600 transition-colors"
                    onClick={() => toggleDescription(index)}
                  >
                    {project.name}
                  </div>

                  {expandedProjects[ index ] && (
                    <>
                      <div className="w-full text-center px-2">
                        {project.description.slice(0, 160)}
                        {project.description.length > 160 && "..."}
                      </div>
                      <div className="flex justify-center w-full px-4 py-2">
                        <a
                          href={project.ghLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 px-3 rounded-xl bg-gray-800 text-white font-medium flex items-center hover:bg-gray-700 transition-all"
                        >
                          GitHub
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider for desktop */}
      <div className="hidden bg-gray-300 rounded-md h-96 w-1 md:flex"></div>

      {/* Desktop Heading */}
      <div className="hidden md:flex md:flex-col">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-lg">Here are some of my work</p>
      </div>
    </section>
  );
};

export default Projects;