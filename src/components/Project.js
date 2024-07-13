import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Project = ({ item }) => {
  return (
    <div className="">
        <div className="w-full max-w-[300px] h-[200px] flex items-center justify-center relative group rounded-lg overflow-hidden mx-auto transition-transform duration-500 ease-in-out hover:scale-105">
      <img src={item?.img} className="h-full w-full object-cover z-20 transition-transform duration-500 ease-in-out group-hover:scale-110" alt="img" />
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
