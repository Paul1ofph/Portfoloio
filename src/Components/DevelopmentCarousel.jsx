import React from 'react'
import { DESIGNPROJECTS, PROJECTS } from '../utils/data'
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState, useCallback } from 'react'
import {IoIosArrowForward} from "react-icons/io"
import ProjectCard from '../Components/ProjectCard'

const DevelopmentCarousel = () => {
    
    const [emblaRefDev, emblaApiDev] = useEmblaCarousel({ loop: false, align: "start" });
  
    const [canScrollPrevDev, setCanScrollPrevDev] = useState(false);
    const [canScrollNextDev, setCanScrollNextDev] = useState(false);
    
  
    const updateButtonsDev = useCallback(() => {
      if (!emblaApiDev) return;
      setCanScrollPrevDev(emblaApiDev.canScrollPrev());
      setCanScrollNextDev(emblaApiDev.canScrollNext());
    }, [emblaApiDev]);
  
    useEffect(() => {
      if (emblaApiDev) {
        emblaApiDev.on("select", updateButtonsDev);
        updateButtonsDev();
      }
    }, [emblaApiDev, updateButtonsDev]);
  
  return (<>
            {/* Development Projects Carousel */}
        <div className="container mx-auto px-8 md:px-10 py-10">
            <div className="w-full lg:w-[60vw] mx-auto">
                <h4 className="section-title">Recent Dev. Projects</h4>

                <p className="text-sm text-center mt-4 leading-6">
                    From concept to deployment, these projects showcase my technical expertise. I focus on clean code, performance, and user experience.
                </p>
            </div>

            <div className="relative">
                <div className="overflow-hidden" ref={emblaRefDev}>
                    <div className="flex pt-14 pb-8">
                        {PROJECTS.filter(project => project.id >= 1 && project.id <= 5).map((project) =>(
                        <div 
                            key={project.id}    
                            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]">
                                <ProjectCard 
                                    key={project.id}
                                    imgUrl={project.image}
                                    title={project.title}
                                    tags={project.tags}
                                    link={project.Link}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                 className={`arrow-btn -left-5 ${
                    !canScrollPrevDev ? "opacity-50 cursor-not-allowed" : ""
                 }`}
                 onClick={() => emblaApiDev && emblaApiDev.scrollPrev()}
                 disabled={!canScrollPrevDev}
                >
                    <IoIosArrowForward className='rotate-180'/>

                </button>

                <button
                 className={`arrow-btn -right-5 ${
                    !canScrollNextDev ? "opacity-50 cursor-not-allowed" : ""
                 }`}
                 onClick={() => emblaApiDev && emblaApiDev.scrollNext()}
                 disabled={!canScrollNextDev}
                >
                    <IoIosArrowForward/>

                </button>
                
            </div>
        </div>
</>
  )
}

export default DevelopmentCarousel