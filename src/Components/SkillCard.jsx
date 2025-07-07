import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const SkillCard = ({ icon, skillName, description, progress }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className='bg-white rounded-2xl border border-[#fce8d4] p-4'>
      <div className="flex gap-3" onClick={toggleOpen}>
        <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]'>
          {icon}
        </div>

        <div className="flex-1">
          {/* Clickable title row */}
          <div 
            className="flex items-center justify-between cursor-pointer"
            
          >
            <p className="text-[13px] text-black font-medium flex items-center gap-2">
              {skillName}
              <span className={`transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`}>
                <FaChevronDown size={12} />
              </span>
            </p>

            <p className="text-xs text-secondary font-medium">{progress}%</p>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-background rounded-md h-[5px] relative mt-2">
            <div
              className="bg-primary h-[5px] rounded-md"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Toggleable description */}
          {isOpen && (
            <p className="text-xs text-gray-600 text-justify leading-5 mt-3">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SkillCard
