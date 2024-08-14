import React from 'react'
import { testimonialsData } from '../util/Data'

const Testimonials = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            {testimonialsData.map((data, index) => (
                <div key={index} className='bg-[#2a2a2a] w-full md:w-1/2 p-8 rounded-lg shadow-gray-900 drop-shadow-lg'>
                <div className='flex mt-2 items-end gap-2 justify-start'>
                    <div className='w-12 h-14 p-2 rounded-2xl shadow-xl bg-[#3e3e42] z-10'>
                        {!data.img ? (
                            <div className='spinner-border animate-spin z-10 inline-block w-8 h-8 border-4 rounded-full text-gray-200 border-t-transparent'></div>
                        ) : (
                            <img src={data.img} alt='IMG' />
                        )}
                    </div>
                    <div className='font-semibold'>
                        <h2>{data.name}</h2>
                        <p className='text-xs text-[#727279]'>{data.position}</p>
                        <p className='text-xs text-[#727279]'>{data.org}</p>
                    </div>
                </div>
                <p className='text-xs text-gray-400 mt-2'>{data.tstmnl}</p>
            </div>
            ))}
        </div>
    )
}

export default Testimonials