import React from "react";
import developer from "../assets/Developer/amir faysal-developer.png";
import facebook from "../assets/icons/facebook.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import gmail from "../assets/icons/message.png";
import call from "../assets/icons/call.png";

const Developer = () => {
  return (
    <div className="bg-gray-800 shadow-lg p-5 rounded-lg md:hidden lg:grid grid grid-cols-12">
      <div className="col-span-5 border-r">
        <img
          className="w-20 rounded-full h-20 object-contain bg-[#E3E3E3] -mt-14 shadow-lg shadow-primary"
          src={developer}
          alt=""
        />
        <h2 className="text-lg font-semibold mt-2 text-primary">
        Amir Faysal
        </h2>
        <p className="text-xs ">Full-Stack Developer</p>
        <div className="flex text-xs gap-2 items-center mt-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/amirfaysal047"
          >
            <img
              className="w-6 hover:scale-105 duration-500"
              src={facebook}
              alt="facebook"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/amir-faysal/"
          >
            <img
              className="w-6 hover:scale-105 duration-500"
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/amir047123">
            <img
              className="w-6 hover:scale-105 duration-500"
              src={github}
              alt="github"
            />
          </a>
        </div>
      </div>
      <div className="col-span-7 space-y-1 ml-2">
        <div className="flex text-xs gap-2 items-center">
          <img className="w-6" src={call} alt="call" />
          <p className="">+8801875071998</p>
        </div>
        <div className="flex text-xs gap-2 items-center">
          <img className="w-6" src={gmail} alt="gmail" />
          <p className="">amirfaysal0471@gmail.com</p>
        </div>
        <p className="text-xs border-t pt-2">
          Skilled React.js developer crafting dynamic user interfaces with
          expertise in JavaScript and modern web technologies
        </p>
      </div>
    </div>
  );
};

export default Developer;
