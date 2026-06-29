import React from 'react'
import ScrollVelocity from '../Components/animations/ScrollVelocity'

const ThisSection = () => {
  return (
    <section>
        <div className="">
        <ScrollVelocity 
        texts={[
            'BRAND DESIGNER • FULL-STACK DEVELOPER • IT PROFESSIONAL •',
            // 'STUDIBUDDII, AN AI BASED STUDY PARTNER AND CAMPUS CONNECT PLATFORM COMING SOON, ',
            // 'SDA FIND A CHURCH APP COMING SOON, ',
            // 'ZINA MEDIA, BELLAURA, SAGI, SPINEL HUB,'
        ]}
        velocity={-100} 
        className="custom-scroll-text text-white bg-primary"
        />

        </div>
    </section>
  )
}

export default ThisSection