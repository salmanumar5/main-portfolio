import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { skillMenu } from '../util/Data';
import Testimonials from '../components/Testimonials';

const About = () => {
    const slideInProps = useSpring({
        from: { opacity: 0, transform: 'translateY(50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 200, friction: 20 },
        delay: 200,
    });

    return (
        <animated.div style={slideInProps} className='mx-4'>
            
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
                                <h4 className='text-xs md:text-lg text-white font-semibold ml-2'>{skill.title}</h4>
                            </div>
                            <p className='text-gray-400 text-sm'>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='my-8'>
                <h3 className='text-xl font-semibold mb-2'>Testimonials</h3>
                <Testimonials/>
            </div>

        </animated.div>
    );
}

export default About;
