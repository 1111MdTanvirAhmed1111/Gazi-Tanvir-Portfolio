import React from 'react';
import { SiNextdotjs, SiExpress, SiReact, SiPrisma, SiMongodb } from 'react-icons/si'; // New tech icons
import { FaApple, FaAndroid } from 'react-icons/fa';
import { MdComputer, MdSmartphone } from 'react-icons/md';

export const Skills = () => {
  const skillCards = [
    {
      icon: <MdComputer className="text-4xl text-cyan-400" />,
      title: 'Web Development',
      desc: 'Next.js · Express.js · React.js · Prisma · MongoDB', // Updated description
    },
    {
      icon: <MdSmartphone className="text-4xl text-cyan-400" />,
      title: 'App Development',
      desc: 'iOS · Android',
    },
  ];

  const techStack = [
    { icon: <SiNextdotjs className="text-4xl text-white" />, name: 'Next.js', color: ' scale-190 hover:scale-210 ' }, // Next.js is black-themed
    { icon: <SiExpress className="text-4xl text-white" />, name: 'Express.js', color: 'from-gray-500 to-gray-700' }, // Express.js in white
    { icon: <SiReact className="text-4xl text-white" />, name: 'React.js', color: 'from-cyan-500 to-cyan-600' }, // React's cyan theme
    { icon: <SiPrisma className="text-4xl text-white" />, name: 'Prisma', color: 'from-blue-600 to-blue-800' }, // Prisma's blue theme
    { icon: <SiMongodb className="text-4xl text-white" />, name: 'MongoDB', color: 'from-green-500 to-green-700' }, // MongoDB's green theme
  ];

  return (
    <section className="py-16">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 text-white font-sans">
        <div className="flex flex-col items-center">
          {/* Header with Icon and Code Brackets */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative mr-6">
              <div className="w-6 h-12 border-2 border-cyan-400 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-400/20 animate-pulse"></div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="h-12 border-l-2 border-dashed border-cyan-400"></div>
                </div>
              </div>
            </div>
            <div className="text-5xl text-cyan-400 font-mono animate-pulse"></div>
          </div>

          {/* Skills Title with Underline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 tracking-tight">My Skills</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl text-lg">
              I’m passionate about continuous learning and pushing my technical boundaries.
            </p>
          </div>

          {/* Development Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full max-w-3xl">
            {skillCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#252a31] p-6 rounded-xl shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 transform hover:-translate-y-2 border border-cyan-400/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-300">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Circles */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-16"> {/* Changed to 5 columns */}
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group ">
                <div
                  className={` rounded-full animate-pulse bg-gradient-to-br p-2 ${tech.color} flex items-center justify-center mb-4 transform transition-all duration-300 scale-140 group-hover:scale-180 group-hover:rotate-6 shadow-lg`}
                >
                  {tech.icon}
                </div>
                <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};