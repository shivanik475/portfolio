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
    {
      id: 7,
      src: "https://s3-alpha.figma.com/hub/file/4640124499/85354f41-8eba-4ceb-ae49-55195943c4c7-cover.png",
      link: "https://github.com/shivanik475/carousel",
    },
    {
      id: 8,
      src: "https://raw.githubusercontent.com/kyle-barth/tic-tac-toe/master/tic-tac-toe.PNG",
      link: "https://github.com/shivanik475/TicTacToe",
    },
    {
      id: 9,
      src: "https://miro.medium.com/v2/resize:fit:890/format:webp/1*37owO1brkbJ-gIg9jIaP7g.png",
      link: "https://github.com/shivanik475/Dictionary",
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="text-center mt-3 mb-4">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-semibold"
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
