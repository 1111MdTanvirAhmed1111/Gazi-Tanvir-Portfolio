'use client'
import React, { useState, useEffect } from "react";

export const ProjectAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const projects = [
    { 
      title: "Project 1", 
      description: "This is an amazing project built with React.js and Tailwind CSS.", 
      tags: ["React.js", "Tailwind CSS", "JavaScript"],
      image: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" 
    },
    { 
      title: "Project 2", 
      description: "A full-stack Next.js project with TypeScript and MongoDB integration.", 
      tags: ["Next.js", "TypeScript", "MongoDB"],
      image: "https://via.placeholder.com/300x150" 
    },
    { 
      title: "Project 3", 
      description: "A real-time chat app built with Vue.js and Firebase.", 
      tags: ["Vue.js", "SCSS", "Firebase"],
      image: "https://via.placeholder.com/300x150" 
    },
    { 
      title: "Project 4", 
      description: "An enterprise Angular app connected to a PostgreSQL database.", 
      tags: ["Angular", "Node.js", "PostgreSQL"],
      image: "https://via.placeholder.com/300x150" 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOpenIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleProjectClick = (index) => {
    setOpenIndex(index);
    setProgress(0); // Reset progress when manually selecting
  };

  return (
    <div className="flex justify-center p-4">
      <div className="bg-[#00516b] rounded-xl p-6 md:p-8 shadow-lg  w-[90%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 italic">
          Projects..
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Projects List */}
          <div className="flex-1">
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-b border-[#00e1ff] my-4 pb-2">
                  <button
                    className="w-full flex items-center justify-between text-left text-xl md:text-2xl font-light text-[#00e1ff] hover:text-[#7ff9ff] transition-colors duration-300 focus:outline-none"
                    onClick={() => handleProjectClick(index)}
                  >
                    {project.title}
                   
                  </button>

                  {/* Auto-expand section */}
                  <div 
                    className={`overflow-hidden transition-[max-height] duration-500 ${openIndex === index ? "max-h-40" : "max-h-0"}`}
                  >
                    <div className="pt-4 pl-4 text-white">
                      <p className="text-sm opacity-80">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-[#003547] text-xs text-[#00e1ff] rounded-full border border-[#00e1ff] hover:bg-[#004a63] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {openIndex === index && (
                    <div className="h-1 mt-2 bg-[#003547] relative overflow-hidden rounded-full">
                      <div
                        className="h-full bg-[#00e1ff] transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-1 bg-[#00e1ff] hidden md:block"></div>

          {/* Featured Project */}
          <div className="w-full md:w-[300px]">
            <div 
              className="transition-opacity duration-500 ease-in-out opacity-0"
              key={openIndex}
              style={{ opacity: 1 }}
            >
              <img 
                src={projects[openIndex].image} 
                alt="Project Preview" 
                className="rounded-xl mb-4 w-full h-[150px] object-cover"
              />
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                {projects[openIndex].title}
              </h3>
              <p className="text-white text-sm opacity-80">
                {projects[openIndex].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {projects[openIndex].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-[#003547] text-xs text-[#00e1ff] rounded-full border border-[#00e1ff] hover:bg-[#004a63] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

