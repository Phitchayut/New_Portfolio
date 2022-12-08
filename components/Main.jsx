import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";


const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Phitchayut</span>
          </h1>
          <h1 className="py-2 text-gray-700 capitalize">
            a front-end web developer
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] mx-auto'>
            i'm a front-end web developer specializing in building (and
            occasionally designing) exceprional digital experiences. Currently,
            I'm focused on building responsive front-end web applications while
            leaening back-end technologies.
          </p>


          <div className="my-4 max-w-[70%] md:max-w-[50%] mx-auto flex items-center justify-between">
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail size={30} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill size={30} />
                </div>
              </div>




        </div>
      </div>
    </div>
  );
};

export default Main;
