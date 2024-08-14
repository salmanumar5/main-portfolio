import React from 'react'
import Projects from '../components/Projects'
import { useSpring, animated } from '@react-spring/web';

const Portfolio = () => {
  const slideInProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
    delay: 200,
  });

  return (
    <animated.div style={slideInProps} className='flex flex-col items-center mx-0 md:mx-4 justify-center w-full'>
      <div className='w-2/3 h-[2px] rounded-full bg-gray-500 my-8'></div>
      <Projects />
    </animated.div>
  )
}

export default Portfolio
