import React from "react";
import logo from "../asset/logo.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            i'm a frontend developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 6 years of experience building and desiging software
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyn-500 to-blue-500 cursor-pointer">
              Portfolio<span className="group-hover:rotate-90 duration-300">{MdKeyboardArrowRight}</span>
            </button>
          </div>
        </div>
        <div>
          {/*<img
            src={logo}
            alt="my profile"
            className="rounded-1xl mx-auto w-2/3 md:w-small smaller-size"
          ></img>*/}
        </div>
      </div>
    </div>
  );
}
