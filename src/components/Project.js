import React, { useState, useEffect, useRef } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Project = ({ item }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef();

  useEffect(() => {
    const currentImgRef = imgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = item.img;
            img.onload = () => {
              setImageSrc(item.img);
              setIsLoading(false);
            };
            observer.unobserve(currentImgRef);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [item.img]);

  return (
    <div className="">
      <div
        ref={imgRef}
        className="w-full max-w-[300px] h-[200px] flex items-center justify-center relative group rounded-lg overflow-hidden mx-auto transition-transform duration-500 ease-in-out hover:scale-105"
      >
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-200 border-t-transparent"></div>
          </div>
        ) : (
          <img
            src={imageSrc}
            className="h-full w-full object-cover z-20 transition-transform duration-500 ease-in-out group-hover:scale-110"
            alt="img"
          />
        )}
        <div className="opacity-0 w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-30 flex items-center justify-center transition-opacity duration-500 ease-in-out group-hover:opacity-100 cursor-pointer">
          <div className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-[10px] transition-transform duration-500 ease-in-out hover:bg-[#3e3e42] hover:scale-110">
            <FaArrowUpRightFromSquare />
          </div>
        </div>
      </div>
      <div className="px-7 py-2">
        <h2>{item.title}</h2>
      </div>
    </div>
  );
};

export default Project;
