import React from 'react'
import Navbar from '../Components/Navbar'
import Projects from '../Sections/Projects'
import { DESIGNPROJECTS, PROJECTS } from '../utils/data'
import ProjectCard from '../Components/ProjectCard'

const ViewallWorks = () => {
  return (
    <>
    <Navbar />
    <section className='container'>
    <h4 className="section-title mb-5">All Projects</h4>
        <div className="relative grid gap-6 md:grid-cols-2  md:gap-4 md:pb-[7rem]">
            {PROJECTS.map((project) =>(
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

            {DESIGNPROJECTS.map((project) =>(
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
    </section>
    </>
  )
}

export default ViewallWorks