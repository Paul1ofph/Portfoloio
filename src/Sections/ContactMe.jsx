import React from 'react'
import { IoMdMail, IoMdPhonePortrait } from 'react-icons/io'
import { ABOUT_ME, collabApps } from '../utils/data'
import ContactInfoCard from '../Components/ContactInfoCard'
import { FaInstagram } from 'react-icons/fa6'
import {FaGitAlt } from 'react-icons/fa'
import logo1 from "../assets/images/logo.jpg"

const ContactMe = () => {

    // circle calculation
    const angle = 360 / collabApps.length;
  return (
    <section id='contact'>
        <div className="container mx-auto p-10">
            <div className="w-full lg:w-[60vw] mx-auto">
                <h4 className='section-title'>Contact Me</h4>

                <p className="text-sm text-center mt-4 leading-6">
                    A versatile graphics designer and frontend developer with hands-on expertise in modern technologies, tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
                <div>
                    <a target='_blank' href="https://pauladibe5@gmail.com"><ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email}/></a>
                    <a target='_blank' href="tel: +234-810-981-7134"><ContactInfoCard icon={<IoMdPhonePortrait />} text={ABOUT_ME.phone} /></a>
                    <a target='_blank' href="https://github.com/Paul1ofph"><ContactInfoCard icon={<FaGitAlt />} text={ABOUT_ME.github} /></a>
                    <a target='_blank' href="https://www.instagram.com/graphic_designer_in_ph?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"><ContactInfoCard icon={<FaInstagram />} text={ABOUT_ME.instagram} /></a>
                </div>


        {/* Circles Start */}        
        <div className="lg:ml-auto xl:w-[38rem]">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border rounded-4 -translate-x-1/2 scale-75 md:scale-100 rounded-full">
            <div className="flex w-60 aspect-square m-auto border rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                        <img src={logo1} width={68} height={68} alt="brainwave" />
                    </div>
                </div>
            </div>
            <ul>
                {collabApps.map((app, index) => (
                    <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`} style={{ transform: `rotate(${index * angle}deg)` }}>
                        <div className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl" style={{ transform: `rotate(-${index * angle}deg)` }}>
                            <img className="m-auto" width={app.width} height={app.height} src={app.icon} alt={app.title} />
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
        {/* Circles End */}
      </div>
        </div>
    </section>
  )
}

export default ContactMe