import React from 'react'
import DesignCarousel from '../Components/DesignCarousel'
import DevelopmentCarousel from '../Components/DevelopmentCarousel'
import { Link } from 'react-router-dom'

const Projects = () => {

    // const [emblaRef, emblaApi] = useEmblaCarousel({loop: false, align: "start"})
    // const [canScrollPrev, setCanScrollPrev] = useState(false)
    // const [canScrollNext, setCanScrollNext] = useState(false)

    // const updateScrollButtons = useCallback(() => {
    //     if (!emblaApi) return
    //     setCanScrollPrev(emblaApi.canScrollPrev())
    //     setCanScrollNext(emblaApi.canScrollNext())
    // }, [emblaApi])

    // useEffect(() => {
    //     if (!emblaApi) return
    //     emblaApi.on("select", updateScrollButtons)
    //     updateScrollButtons()
    // }, [emblaApi, updateScrollButtons])

  return (<>
    <section id='projects' className='bg-background mt-14'>
        <DevelopmentCarousel />
        <DesignCarousel />
        <div className='flex justify-center items-center'>
            <Link to="/viewall"><button className="flex items-center justify-center  md:flex-none action-btn-outline btn-scale-anim">View All Projects</button></Link>
        </div>
    </section>

    </>
  )
}

export default Projects