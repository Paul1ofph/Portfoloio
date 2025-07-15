import React, { useState } from 'react'

const ProjectCard = ({imgUrl, title, tags, link}) => {
    const [showFullTitle, setShowFullTitle] = useState(false)

    // Ensure title is a valid string to avoid errors
    const titleText = title || ""

    // Display full title or truncated version
    
  return (
    <div className='h-full bg-white rounded-xl overflow-hidden shadow-md mx-2'>
        <a href={link} target='blank' className='cursor-pointer group'>                                
        <img src={imgUrl} alt={title} className='w-full h-72 md:h-80 object-contain' />
        </a>

        <div className='px-4 py-5'>
        {/* // Display full title or truncated version */}
            <h3 className='text-base font-semibold overflow-hidden text-ellipsis'>{showFullTitle ? titleText : titleText.substring(0, 29) + (titleText.length > 29 ? "..." : "")}</h3>

            {titleText.length > 29 && (
                <button className='text-secondary text-sm'
                    onClick={() => setShowFullTitle((prevState) => !prevState)}
                >
                    {showFullTitle ? "Show Less" : "Show More"}
                </button>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                    <span key={index} className='text-xs text-secondary bg-orange-100 px-3 py-1 rounded'>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard