import React from 'react';
import Project from './Project';

const Projects = () => {
  const projectList = [
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' },
    { title: "Employee Tracker", img: 'https://firebasestorage.googleapis.com/v0/b/umarsalman-portfolio.appspot.com/o/project%20images%2Fss1.png?alt=media&token=553bbabc-7dda-4521-9043-83c0a46ca9b1' }
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
