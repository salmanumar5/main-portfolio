import React from 'react'
import img1 from '../images/img1.png'
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHome } from "react-icons/fa";
// import { Link } from 'react-router-dom';


const Info = () => {

    const infoMenu = [
        { icon: <FaPhoneAlt />, title: "Phone No.", contact: "7088970160" },
        { icon: <FaEnvelope />, title: "Email", contact: "umar.salman@example.com" },
        { icon: <FaHome />, title: "Address", contact: "NFC, New Delhi, 110025"}

    ];

    const socialMedia = [
        { icon: <FaFacebookF />, link: "#" },
        { icon: <FaTwitter />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
        { icon: <FaLinkedinIn />, link: "#" },
    ];

    return (
        <div className='w-96 h-[70vh] flex flex-col justify-between bg-[#252526] shadow-lg rounded-2xl mx-4 mt-6'>
            <div>
            <div className='flex flex-col items-center justify-center mt-4'>
                <div className='w-32 h-32 rounded-2xl shadow-xl bg-[#3e3e42] z-10'>
                    <img src={img1} alt='IMG' />
                </div>
                <div className='mt-4'>
                    <h2 className='text-2xl font-semibold text-white'>Umar Salman</h2>
                    <div className='h-4 flex flex-shrink justify-center items-center mt-2'>
                        <p className='text-[10px] font-normal text-center rounded-md bg-[#3e3e42] text-white px-2'>Software Developer</p>
                    </div>
                </div>
            </div>

            <div className='h-[2px] bg-[#3e3e42] mx-10 rounded-3xl my-6'> </div>

            <div className='flex flex-col ml-10'>
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

            <div className='flex gap-5 justify-center mb-5'>
                {socialMedia.map((item) => (
                    <div className='text-white'>{item.icon}</div>
                ))}
            </div>
        </div>
    )
}

export default Info