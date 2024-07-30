import React from 'react'
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <div className='flex flex-col items-center mx-0 md:mx-4 justify-center w-full'>
      <div className='w-2/3 h-[2px] rounded-full bg-gray-500 my-8'></div>
      <Projects/>
    </div>
  )
}

export default Portfolio
