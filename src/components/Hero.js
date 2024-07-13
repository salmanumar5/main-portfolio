import React, { useState } from 'react'
import CustomRoutes from '../navigation/routes';
import { Link } from 'react-router-dom';

const Hero = () => {
    const menuItem = ["About Me", "Resume", "Portfolio", "Contact"]
    const [selectedItem, setSelectedItem] = useState(menuItem[0]);

    return (
        <div className='w-full min-h-min overflow-y-auto bg-[#252526] shadow-md rounded-2xl my-6 mr-10 relative'>
            <div className='h-16'>
                <div className='absolute top-0 right-0 h-8 rounded-bl-xl rounded-tr-2xl bg-[#3e3e42] px-4 py-1'>
                    <ul className='flex gap-10 items-center justify-center'>
                        {menuItem.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={`/${item.toLocaleLowerCase()}`}
                                    className={`font-md ${selectedItem === item ? 'font-semibold text-[#FFCF75]' : 'font-light'} trasition-all duration-150 ease-in`}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='absolute top-4 left-4'>
                    <h1 className='text-white text-2xl font-semibold'>{selectedItem}</h1>
                    <div
                        className='w-1/3 bg-[#FFCF75] h-[2px] origin-left transform scale-x-0 transition-transform duration-150 ease-in'
                        style={{ transformOrigin: 'left', transform: selectedItem === menuItem[0] ? 'scaleX(1)' : `scaleX(0)` }}
                    ></div>
                </div>
            </div>
            <div>
                <CustomRoutes/>
            </div>

        </div>
    )
}

export default Hero
