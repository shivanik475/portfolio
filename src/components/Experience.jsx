import React from "react";
import css from "../asset/css.png";
import node from "../asset/node.png";
import react from "../asset/react.png";
import tailwind from "../asset/tailwind.png";
import github from "../asset/github.png";

export default function Experience() {
  const techs = [
    {
      id: 1,
      src: css,
      title: "CSS",
    },
    {
      id: 2,
      src: node,
      title: "Node JS",
    },
    {
      id: 3,
      src: react,
      title: "React JS",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
    },
    {
        id: 5,
        src: github,
        title: "GitHub",
      },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-uto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies i have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt="" className="w-20 mx-auto"></img>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
