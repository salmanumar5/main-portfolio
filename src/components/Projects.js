import React from 'react';
import Project from './Project';
import { projectList } from '../util/Data';

const Projects = () => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-center mx-auto'>
      {projectList.map((item, index) => (
        <Project key={index} item={item} />
      ))}
    </div>
  );
};

export default Projects;
