import React from 'react'

const Footer = () => {
  return (
    <div className='border-primary border-t-2 text-xs  text-center p-5'>
       © {new Date().getFullYear()}. All rights reserved.
    </div>
  )
}

export default Footer