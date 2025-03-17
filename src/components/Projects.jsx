import React from "react";
import Weather from "../asset/Weather.png";
import StickyNote from "../asset/StickyNote.png";

export default function Projects() {
  const portfolios = [
    {
      id: 1,
      src: Weather,
      link: "https://github.com/shivanik475/weather-App",
    },
    {
      id: 2,
      src: StickyNote,
      link: "https://github.com/shivanik475/stickyNotes",
    },
    {
      id: 3,
      src: "https://miro.medium.com/v2/resize:fit:800/1*Tk0DldorcoyL923BhnOs9A.png",
      link: "https://github.com/shivanik475/pagination",
    },
    {
      id: 4,
      src: "https://files.codingninjas.in/article_images/image-caption-generator-0-1689021597.webp",
      link: "",
    },
    {
      id: 5,
      src: "https://i.ytimg.com/vi/sHG3Sf6XN9g/sddefault.jpg",
      link: "https://github.com/shivanik475/ImageGallery",
    },
    {
      id: 5,
      src: "https://reactjsguru.com/wp-content/uploads/2022/11/Screenshot-793-1024x640.webp",
      link: "https://github.com/shivanik475/calculator",
    },

    {
      id: 6,
      src: "https://www.aimtechnologies.co/wp-content/uploads/2023/11/AI-Chatbots.jpg",
      link: "https://github.com/shivanik475/AIChatBot",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-3 md-grid-cols-3 gap-8 px-6 sm:px-0 ">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              ></img>
              <div className="text-center mt-3">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-500 hover:underline font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
