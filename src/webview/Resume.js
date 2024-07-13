import React from 'react'
import { FaBook } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { IoIosDocument } from "react-icons/io";
import resume from "../images/resume.pdf"


const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Los Angeles',
    graduation: 'Expected Graduation: May 2023'
  },
  {
    degree: 'High School Diploma',
    institution: 'XYZ High School',
    graduation: 'Graduated: June 2019'
  }
];

const workExp = [
  {
    title: 'Software Engineering Intern',
    company: 'Tech Solutions Inc.',
    duration: 'June 2022 - August 2022',
    description: 'Worked on developing full-stack web applications.'
  },
  {
    title: 'Freelance Developer',
    company: 'Self-employed',
    duration: 'September 2021 - May 2022',
    description: 'Developed various websites and applications for clients.'
  }
];

const techStack = [
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'MongoDB', level: 60 },
  { name: 'Docker', level: 50 },
  { name: 'Git', level: 90 },
  { name: 'VS Code', level: 85 },
  { name: 'Express', level: 65 },
  { name: 'C++', level: 75 },
  { name: 'Python', level: 70 }
];

const Resume = () => {
  return (
    <div className='mx-4 mt-6'>
      <div className='bg-[#2a2a2a] p-8 rounded-lg shadow-gray-900 drop-shadow-lg hover:drop-shadow-2xl'>
        <div className='flex items-center gap-4 mb-8 text-xl'>
          <div className='text-[#49494e]'><FaBook /></div>
          <div className='font-semibold'>Education</div>
        </div>
        {education.map((edu, index) => (
          <div className='flex items-start text-xs gap-6 mb-4' key={index}>
            <div className='pt-[4px]'><GoDotFill /></div>
            <div>
              <h3 className='font-semibold'>{edu.degree}</h3>
              <p className='text-[#49494e] text-sm'>{edu.institution}</p>
              <p className='text-[#49494e] text-sm'>{edu.graduation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-[#2a2a2a] p-8 rounded-lg shadow-gray-900 drop-shadow-lg hover:drop-shadow-2xl mt-4'>
        <div className='flex items-center gap-4 mb-8 text-xl'>
          <div className='text-[#49494e]'><MdOutlineWorkOutline /></div>
          <div className='font-semibold'>Work Experience</div>
        </div>
        {workExp.map((exp, index) => (
          <div className='flex items-start text-xs gap-6 mb-4' key={index}>
            <div className='pt-[4px]'><GoDotFill /></div>
            <div>
              <h3 className='font-semibold'>{exp.title}</h3>
              <p className='text-[#49494e] text-sm'>{exp.company}</p>
              <p className='text-[#49494e] text-sm'>{exp.duration}</p>
              <p className='text-[#49494e] text-sm'>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-[#2a2a2a] p-8 rounded-lg shadow-gray-900 drop-shadow-lg hover:drop-shadow-2xl my-4'>
        <div className='flex items-center gap-4 mb-8 text-xl'>
          <div className='text-[#49494e]'><GrTechnology /></div>
          <div className='font-semibold'>My Tech Stack</div>
        </div>
        <div>
          {techStack.map((tech, index) => (
            <div key={index} className='mb-4'>
              <div className='flex justify-between mb-1'>
                <span className='text-white'>{tech.name}</span>
                <span className='text-white'>{tech.level}%</span>
              </div>
              <div className='w-full bg-gray-600 rounded-full h-2'>
                <div
                  className='bg-[#FFCF75] h-2 rounded-full'
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center items-center my-4'>
        <a href={resume} download='Resume'>
        <div className='flex cursor-pointer items-center gap-1 justify-center bg-[#2a2a2a] p-2 rounded-xl hover:bg-[#1e1d1d]'>
          <div><IoIosDocument/></div>
          <div>Download Resume</div>
        </div>
        </a>
      </div>

    </div>
  )
}

export default Resume
