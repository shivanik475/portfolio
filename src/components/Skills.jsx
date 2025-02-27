import React from "react";
import css from "../asset/css.png";
import node from "../asset/node.png";
import react from "../asset/react.png";
import tailwind from "../asset/tailwind.png";
import github from "../asset/github.png";
import javascript from "../asset/javascript.png";
import html from "../asset/HTML.png";

export default function Skills() {
  const techs = [
    { id: 1, src: react, title: "React JS" },
    { id: 2, src: css, title: "CSS" },
    { id: 3, src: node, title: "Node JS" },
    { id: 4, src: tailwind, title: "Tailwind" },
    { id: 5, src: github, title: "GitHub" },
    { id: 6, src: javascript, title: "JavaScript" },
    { id: 7, src: html, title: "HTML" },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>
        {/* Grid container */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 place-items-center">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
