import React, { useState } from 'react'

const Hero = () => {
    const menuItem = ["About", "Portfolio", "Blog", "Contact"]
    const [selectedItem, setSelectedItem] = useState(menuItem[0]);

    return (
        <div className='w-full h-[80vh] bg-[#252526] shadow-md rounded-2xl mt-6 mr-10 relative'>
            <div>
                <div className='absolute top-0 right-0 h-8 rounded-bl-xl bg-[#3e3e42] px-4 py-1'>
                    <ul className='flex gap-10 items-center justify-center'>
                        {menuItem.map((item, index) => (
                            <li key={index}>
                                <button
                                    className={`text-white font-md ${selectedItem === item ? 'font-bold' : 'font-light'} trasition-all duration-150 ease-in`}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='absolute top-4 left-4'>
                    <h1 className='text-white text-2xl font-bold'>{selectedItem}</h1>
                    <div
                        className='w-full bg-[#FFCF75] h-[2px] origin-left transform scale-x-0 transition-transform duration-150 ease-in'
                        style={{ transformOrigin: 'left', transform: selectedItem === menuItem[0] ? 'scaleX(1)' : `scaleX(0)` }}
                    ></div>
                </div>
            </div>

        </div>
    )
}

export default Hero
