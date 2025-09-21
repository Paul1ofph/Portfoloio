import React from 'react'
import DesignCarousel from '../Components/DesignCarousel'
import DevelopmentCarousel from '../Components/DevelopmentCarousel'
import { Link } from 'react-router-dom'

const Projects = () => {

  return (<>
    <section id='projects' className='bg-background mt-14 block'>
        <DevelopmentCarousel />
        <DesignCarousel />
        <div className='flex justify-center items-center'>
            <Link to="/viewall"><button className=" mb-5 flex items-center justify-center md:flex-none action-btn-outline btn-scale-anim">View All Projects</button></Link>
        </div>
    </section>

    </>
  )
}

export default Projects