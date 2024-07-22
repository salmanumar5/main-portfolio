import React, { useEffect, useState } from 'react'
import Info from '../components/Info'
import Hero from '../components/Hero'

const Layout = () => {
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 4500); 

    return () => clearTimeout(timeout);
  }, []); 
  return (
    <div className={`h-screen w-full flex flex-col md:flex-row transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
       <Info/>
       <Hero/>

    </div>
  )
}

export default Layout