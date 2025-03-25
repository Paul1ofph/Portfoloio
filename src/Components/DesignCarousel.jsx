import React from 'react'
import { DESIGNPROJECTS, PROJECTS } from '../utils/data'
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState, useCallback } from 'react'
import {IoIosArrowForward} from "react-icons/io"
import ProjectCard from '../Components/ProjectCard'

const DesignCarousel = () => {
    
    const [emblaRefDesign, emblaApiDesign] = useEmblaCarousel({ loop: false, align: "start"  });
    
    const [canScrollPrevDesign, setCanScrollPrevDesign] = useState(false);
    const [canScrollNextDesign, setCanScrollNextDesign] = useState(false);
  
    const updateButtonsDesign = useCallback(() => {
      if (!emblaApiDesign) return;
      setCanScrollPrevDesign(emblaApiDesign.canScrollPrev());
      setCanScrollNextDesign(emblaApiDesign.canScrollNext());
    }, [emblaApiDesign]);
  
    useEffect(() => {
      if (emblaApiDesign) {
        emblaApiDesign.on("select", updateButtonsDesign);
        updateButtonsDesign();
      }
    }, [emblaApiDesign, updateButtonsDesign]);
  return (<>
                {/* Design Projects Carousel */}
                <div className="container mx-auto px-8 md:px-10 py-10">
            <div className="w-full lg:w-[60vw] mx-auto">
                <h4 className="section-title">Recent Design Projects</h4>

                <p className="text-sm text-center mt-4 leading-6">
                    From concept to deployment, these projects showcase my technical expertise. I focus on clean code, performance, and user experience.
                </p>
            </div>

            <div className="relative">
                <div className="overflow-hidden" ref={emblaRefDesign}>
                    <div className="flex pt-14 pb-8">
                        {DESIGNPROJECTS.filter(project => project.id >= 1 && project.id <= 5).map((project) =>(
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
                    !canScrollPrevDesign ? "opacity-50 cursor-not-allowed" : ""
                 }`}
                 onClick={() => emblaApiDesign && emblaApiDesign.scrollPrev()}
                 disabled={!canScrollPrevDesign}
                >
                    <IoIosArrowForward className='rotate-180'/>

                </button>

                <button
                 className={`arrow-btn -right-5 ${
                    !canScrollNextDesign ? "opacity-50 cursor-not-allowed" : ""
                 }`}
                 onClick={() => emblaApiDesign && emblaApiDesign.scrollNext()}
                 disabled={!canScrollNextDesign}
                >
                    <IoIosArrowForward/>

                </button>
                
            </div>
        </div>
    </>
  )
}

export default DesignCarousel