import React from 'react'
import ProfileVid from '../webview/ProfileVid';
import { Link } from 'react-router-dom';
import { infoMenu, socialMedia } from '../util/Data';

const Info = () => {

    return (
        <div className='w-80 md:w-96 h-[70vh] md:h-[70vh] flex flex-col justify-between bg-[#252526] shadow-lg rounded-2xl mx-auto mt-6'>
            <div>
                <div className='flex flex-col items-center justify-center mt-4'>
                    <ProfileVid/>
                    <div className='mt-4'>
                        <h2 className='text-2xl font-semibold text-white'>Umar Salman</h2>
                        <div className='h-4 flex flex-shrink justify-center items-center mt-2'>
                            <p className='text-[10px] font-normal text-center rounded-md bg-[#3e3e42] text-white px-2'>Software Developer</p>
                        </div>
                    </div>
                </div>

                <div className='h-[2px] bg-[#3e3e42] mx-10 rounded-3xl my-6'> </div>

                <div className='mb-1 flex flex-col ml-10'>
                    {infoMenu.map((item, index) => (
                        <div key={index} className='flex items-center mt-4'>
                            <div className='bg-[#3e3e42] p-2 rounded-lg text-[#FFCF75] mr-4 text-lg'>
                                {item.icon}
                            </div>
                            <div className='text-white'>
                                <h3 className='text-xs font-semibold'>{item.title}</h3>
                                <p className='text-xs'>{item.contact}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='hidden md:flex gap-5 justify-center mb-5'>
                {socialMedia.map((item) => (
                    <Link to={item.link}>
                        <div className='text-white'>{item.icon}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Info