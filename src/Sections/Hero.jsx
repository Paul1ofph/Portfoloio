import React from 'react'
// import Profile_Pic from "../assets/images/download (2).png"
import Icon1 from "../assets/images/react-removebg-preview.png"
import Icon2 from "../assets/images/Js-removebg-preview.png"
import Icon3 from "../assets/images/css-removebg-preview.png"
import Icon4 from "../assets/images/corel-removebg-preview.png"
import { STATS } from '../utils/data'
import StatInfoCard from '../Components/StatInfoCard'

const Hero = () => {
  return (
        <section id='hero' className='container mx-auto px-8'>
            <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[30px]'>
                <div className="order-2 lg:order-1 text-center lg:text-left mt-5 lg:mt-0">
                    <h3 className='text-xl lg:text-2xl font-medium text-black'>👋 Hi, I'm PaulofPh</h3>
                    <h1 className='w-full text-pretty lg:w-[400px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent'>Building Scalable & User Centric Web Apps</h1>

                    <p className="w-full text-pretty lg:w-[500px] text-sm lg:text-base mt-4">
                        I'm a passionate Frontend Developer and Graphics Designer crafting responsive, accesible, and dynamic web experiences using React Js, and CSS.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 mt-6">
                        <button className="flex-1 w-max md:flex-none action-btn-outline btn-scale-anim">View My Work</button>
                        <button className="flex-1 md:flex-none action-btn btn-scale-anim">Download Resume</button>
                    </div>
                </div>

                <div className="hidden lg:block w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
                    <img src="{Profile_Pic}" alt="ProfilePic" className='profile-pic flex justify-center'/>

                    <img src={Icon1} alt="Icon1" className='icon-img md:-left-10  bottom-20 rotate-[1.75deg]' />

                    <img src={Icon2} alt="Icon2" className='icon-img left-5 md:left-10 bottom-2 rotate-[2.75deg]' />

                    <img src={Icon3} alt="Icon3" className='icon-img left-[110px] md:left-[150px] -bottom-5 rotate-[3.75deg]' />

                    <img src={Icon4} alt="Icon4" className='icon-img left-[200px]  md:left-[255px] -bottom-10 md:-bottom-10 rotate-[4.75deg]' />

                </div>
            </div>
            <div className="flex justify-center  gap-12 mt-16 md:mt-24 flex-wrap">
                {STATS.map((item) => (
                    <StatInfoCard key={item.id} count={item.count} label={item.label}/>
                ))}
            </div>
        </section>
  )
}

export default Hero