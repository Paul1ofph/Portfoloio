import React from 'react'
import CountUp from '../Components/animations/Countup'



const StatInfoCard = ({count, label, add}) => {
  return (
    <div className='flex flex-1 gap-3 md:gap-5  bg-gradient-to-b border-x-2 border-t-2 border-primary rounded-[14px] p-5'>
        <h4 className="text-4xl md:text-5xl font-medium text-secondary"><CountUp from={0} to={count} separator="," direction="up" duration={1} className="count-up-text" />{add}</h4>
        <p className="text-sm md:text-[16px] font-normal text-block leading-6 whitespace-pre-line">{label}</p>
    </div>
  )
}

export default StatInfoCard