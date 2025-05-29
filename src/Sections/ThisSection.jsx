import React from 'react'
import ScrollVelocity from '../Components/animations/ScrollVelocity'

const ThisSection = () => {
  return (
    <section>
        <div className="">
        <ScrollVelocity 
        texts={[
            'SDA FIND A CHURCH APP COMING SOON, ',
            // 'ZINA MEDIA, BELLAURA, SAGI, SPINEL HUB,'
        ]}
        velocity={100} 
        className="custom-scroll-text text-white bg-primary"
        />

        </div>
    </section>
  )
}

export default ThisSection