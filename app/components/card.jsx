"use client";
import { useState, useEffect } from "react";
// components/ProjectCard.jsx
import Image from "next/image";

export function Card({ start, end, first, second, third, type, desc }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start bg-white rounded-lg p-8 mb-8 shadow-md md:py-8 md:px-20">
      <div className="w-full md:w-1/3 flex flex-col mb-8 md:mb-0 md:mr-28 items-center justify-center h-full ">
        <div className="flex items-center w-full justify-center">
          <h1 className="font-bold text-black font-grifter text-lg">{start}</h1>
          <span className="text-black font-figtree font-thin text-4xl mx-4">
            -
          </span>
          <h1 className="font-bold text-black font-grifter text-lg">{end}</h1>
        </div>
        <h1 className="font-semibold text-lg mb-1 text-gray-600 font-grifter text-center">
          {first}
        </h1>
        {type && (
          <h1 className="font-semibold text-lg mb-1 text-gray-600 font-grifter text-center">
            {type}
          </h1>
        )}
        <h2 className="font-medium text-lg mb-1 text-gray-600 text-center">
          {second}
        </h2>
        <h2 className="font-medium text-md mb-1 text-gray-600 text-center">
          {third}
        </h2>
      </div>

      <div className="w-full md:w-2/3 pl-0 md:pl-4 text-gray-700 flex flex-col items-start justify-center h-full">
        {desc.slice(0, isSmallScreen ? 3 : desc.length).map((item, index) => (
          <p key={index} className="leading-tight mb-4">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export function SkillsAndTechnologies({
  programmingLanguages,
  frameworks,
  toolsAndTechnologies,
}) {
  return (
    <div className="flex flex-col bg-white p-8 mb-8 rounded-xl shadow-md w-full">
      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-4">Programming Languages</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {programmingLanguages.map((language, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-black"></span>
              <p className="text-gray-700">{language}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h1 className="font-bold text-2xl mb-4">Frameworks</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {frameworks.map((framework, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-black"></span>
              <p className="text-gray-700">{framework}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl mb-4">Tools & Technologies</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {toolsAndTechnologies.map((tool, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 bg-black"></span>
              <p className="text-gray-700">{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const ProjectCard = ({
  title,
  role,
  description,
  imageUrl,
  date,
  type,
  who,
  link,
  linkf,
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  const cardBgColor = type === "Freelance" ? "bg-slate-100" : "bg-white";
  return (
    <div
      className={`${cardBgColor} shadow-lg rounded-lg overflow-hidden flex flex-col-reverse md:flex-row w-full max-w-4xl my-4`}
    >
      <div className="md:w-1/2 flex flex-col justify-between py-6 px-4 mt-20 md:mt-0">
        <div>
          <div className="border-l-8 border-customDark pl-4 mb-4">
            <h2 className="text-2xl font-bold text-customGray">{title}</h2>
            <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
            {type && (
              <h3 className="text-lg text-gray-600">
                {type}, {who}
              </h3>
            )}
            <p className="text-sm text-gray-600">{date}</p>
          </div>
          <p className="text-gray-700 text-lg">
            {showMore ? description : `${description.substring(0, 100)}...`}
          </p>
        </div>
        <div className="mt-4 mb-4">
          <button
            onClick={handleReadMore}
            className="text-blue-500 hover:text-blue-700 mt-4"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </div>
        {link &&
          (linkf == "github" ? (
            <div className="flex justify-center mt-4">
              <a target="_blank" rel="noopener noreferrer" href={link}>
                <button className="text-black border-b-2 px-8 text-sm md:text-lg">
                  View on github
                </button>
              </a>
            </div>
          ) : (
            <div className="flex justify-center mt-4">
              <a target="_blank" rel="noopener noreferrer" href={link}>
                <button className="text-black border-b-2 px-8 text-sm md:text-lg">
                  View
                </button>
              </a>
            </div>
          ))}
      </div>
      <div className="md:w-1/2">
        <div className="relative w-full h-64 md:h-full">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
