import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaLightbulb } from 'react-icons/fa';
import { PiPaintBrushBroadFill } from "react-icons/pi";


const skillMenu = [
    {
        icon: <PiPaintBrushBroadFill size={24} className="text-[#FFCF75]" />,
        title: 'Web Design',
        description: 'Crafting visually stunning and user-friendly web interfaces.',
    },
    {
        icon: <FaLaptopCode size={24} className="text-[#FFCF75]" />,
        title: 'Web Development',
        description: 'Building responsive and functional websites using modern technologies.',
    },
    {
        icon: <FaMobileAlt size={24} className="text-[#FFCF75]" />,
        title: 'Mobile Apps',
        description: 'Developing mobile applications for Android and iOS platforms.',
    },
    {
        icon: <FaLightbulb size={24} className="text-[#FFCF75]" />,
        title: 'Innovative Solutions',
        description: 'Creating innovative solutions and bringing creative ideas to life.',
    },
];

const About = () => {
    return (
        <div className='mx-4'>
            <div>
                <p className='text-gray-400 text-xs'>
                    I am a dedicated and passionate computer science student currently pursuing my B.Tech in Computer Science and Engineering. With a keen interest in becoming a software engineer, I am actively developing my skills in the MERN stack and other related technologies. <br /> <br /> My academic journey has equipped me with a solid foundation in computer science principles, and I have a strong understanding of software development processes.
                    <br />
                    <br />
                    I thrive on solving complex problems and enjoy bringing creative ideas to life through coding. My passion for developing innovative solutions drives me to continuously learn and adapt to new tools and methodologies. I am committed to making a meaningful impact in the tech community and look forward to contributing my skills and enthusiasm to exciting projects and collaborations.
                </p>
            </div>
            <div className='mt-8'>
                <h3 className='text-xl font-semibold'>What I am doing</h3>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    {skillMenu.map((skill, index) => (
                        <div key={index} className='bg-[#2a2a2a] p-8 rounded-lg shadow-gray-900 drop-shadow-lg hover:bg-[#252526]'>
                            <div className='flex items-center mb-2'>
                                {skill.icon}
                                <h4 className='text-lg text-white font-semibold ml-2'>{skill.title}</h4>
                            </div>
                            <p className='text-gray-400 text-sm'>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-8'>
                <h3 className='text-xl font-semibold'>Testimonials</h3>
                <div className='flex gap-4'>
                    <div className='bg-[#2a2a2a] w-1/2 p-8 rounded-lg shadow-gray-900 drop-shadow-lg'>
                        <div className='flex mt-2 items-end gap-2 justify-start'>
                            <div className='w-12 h-auto p-2 rounded-2xl shadow-xl bg-[#3e3e42] z-10'>
                                <img src="https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/info%2Fimg3.png?alt=media&token=e513bb88-c293-438a-a365-520cd1dc6a3b" alt='IMG' />
                            </div>
                            <div className='font-semibold'>Riyaz Khan</div>
                        </div>
                        <p className='text-xs text-gray-400 mt-2'>"Umar is a dedicated and innovative computer science student with a strong grasp of the MERN stack. Their passion for solving challenges and creating solutions is inspiring."
                        </p>
                    </div>
                    <div className='bg-[#2a2a2a] w-1/2 p-8 rounded-lg shadow-gray-900 drop-shadow-lg'>
                        <div className='flex mt-2 items-end gap-2 justify-start'>
                            <div className='w-12 h-auto p-2 rounded-2xl shadow-xl bg-[#3e3e42] z-10'>
                                <img src="https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/info%2Fimg2.png?alt=media&token=7567e004-8e57-4d37-9c3e-6ad4c85a7721" className='' alt='IMG' />
                            </div>
                            <div className='font-semibold'>Suraj Kumar</div>
                        </div>
                        <p className='text-xs text-gray-400 mt-2'>"Umar is a driven and creative computer science student. Their enthusiasm for tackling problems and developing innovative solutions is truly remarkable."
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;
