import React from 'react';
import ss1 from '../images/ss1.png';
import Project from './Project';

const Projects = () => {
  const projectList = [
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 },
    { title: "Employee Tracker", img: ss1 }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-center mx-auto'>
      {projectList.map((item, index) => (
        <Project key={index} item={item} />
      ))}
    </div>
  );
};

export default Projects;
