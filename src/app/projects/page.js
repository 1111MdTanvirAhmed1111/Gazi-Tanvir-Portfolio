'use client'
import Head from 'next/head';
import { useState } from 'react';

// Project data
const projects = [
  {
    title: 'Data Visualization Tool',
    description: 'Interactive charts and graphs for complex data interpretation with customizable dashboards.',
    icon: 'data_array',
    tags: ['D3.js', 'SVG'],
    gradient: 'from-primary-50 to-primary-100',
    border: 'border-primary-200/30',
    iconBg: 'bg-primary-200',
    iconColor: 'text-primary-700',
    buttonColor: 'text-primary-600 hover:text-primary-700',
  },
  {
    title: 'API Gateway Service',
    description: 'Centralized API management with rate limiting, authentication, and monitoring capabilities.',
    icon: 'api',
    tags: ['Node.js', 'Express'],
    gradient: 'from-blue-50 to-indigo-100',
    border: 'border-indigo-200/30',
    iconBg: 'bg-indigo-200',
    iconColor: 'text-indigo-700',
    buttonColor: 'text-indigo-600 hover:text-indigo-700',
  },
  // Add other projects...
];

const featuredProjects = [
  {
    title: 'E-commerce Analytics Dashboard',
    description: 'A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization, sales tracking, and customer insights.',
    tech: 'ReactTypeScript',
    icon: 'code',
    iconBg: 'bg-primary-100',
    iconColor: 'text-primary-700',
  },
  // Add other featured projects...
];

const technologies = [
  { name: 'JavaScript', icon: 'javascript', iconColor: 'text-primary-600' },
  { name: 'Python', icon: 'data_object', iconColor: 'text-cyan-600' },
  // Add other technologies...
];

const timelineEvents = [
  {
    date: 'January 2023',
    title: 'Project Inception',
    description: 'Initial concept development and market research for the E-commerce Analytics Dashboard.',
    icon: 'calendar_today',
  },
  // Add other timeline events...
];

// Reusable Components
const ProjectCard = ({ project }) => (
  <div className={`min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] h-[280px] bg-gradient-to-br ${project.gradient} rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 border ${project.border}`}>
    <div className="space-y-2">
      <div className={`w-12 h-12 rounded-full ${project.iconBg} flex items-center justify-center`}>
        <span className={`material-symbols-outlined ${project.iconColor}`}>{project.icon}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
      <p className="text-slate-600 text-sm">{project.description}</p>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex space-x-1">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 rounded-full bg-white text-xs font-medium text-slate-700 shadow-sm">
            {tag}
          </span>
        ))}
      </div>
      <button className={`${project.buttonColor} font-medium flex items-center text-sm`}>
        View <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
      </button>
    </div>
  </div>
);

const FeaturedProjectCard = ({ project }) => (
  <div className="group relative backdrop-blur-sm bg-white/80 rounded-xl overflow-hidden hover:z-10 transition-all duration-500 transform hover:scale-105 border border-slate-200/50 hover:border-primary-200 shadow-lg hover:shadow-2xl">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-primary-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl group-hover:bg-primary-400/30 transition-all duration-700"></div>
    <div className="absolute top-3 left-3 flex items-center">
      <span className={`w-8 h-8 ${project.iconBg} rounded-lg flex items-center justify-center ${project.iconColor}`}>
        <span className="material-symbols-outlined text-lg">{project.icon}</span>
      </span>
      <h4 className="ml-2 text-sm font-medium text-slate-600">{project.tech}</h4>
    </div>
    <div className="pt-16 px-6 pb-6">
      <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary-600 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-600 text-sm">visibility</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center ml-2">
            <i className="fab fa-github text-slate-600 text-sm"></i>
          </div>
        </div>
        <button className="text-primary-600 font-medium group-hover:text-primary-700 flex items-center">
          View Project
          <span className="material-symbols-outlined text-sm ml-1 transform group-hover:translate-x-1 transition-transform duration-300">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  </div>
);

const TechnologyCard = ({ tech }) => (
  <div className="flex-shrink-0 w-40 h-24 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200">
    <span className={`material-symbols-outlined text-2xl ${tech.iconColor}`}>{tech.icon}</span>
    <span className="mt-2 text-sm font-medium text-slate-700">{tech.name}</span>
  </div>
);

const TimelineCard = ({ event }) => (
  <div className="min-w-[280px] group">
    <div className="h-1 bg-slate-200 relative mb-6">
      <div className="absolute left-0 top-0 h-1 w-full bg-primary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-500 absolute -top-3.5 left-0 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary-500 text-sm">{event.icon}</span>
      </div>
    </div>
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200">
      <div className="text-sm font-medium text-primary-600 mb-1">{event.date}</div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2">{event.title}</h3>
      <p className="text-slate-600 text-sm">{event.description}</p>
    </div>
  </div>
);

const Carousel = ({ children }) => {
  const [translateX, setTranslateX] = useState(0);
  return (
    <div className="relative mb-20 mt-16">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-50 transition-all duration-300 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
          onClick={() => setTranslateX(translateX + 100)}
        >
          <span className="material-symbols-outlined text-slate-700">arrow_back</span>
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-50 transition-all duration-300 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
          onClick={() => setTranslateX(translateX - 100)}
        >
          <span className="material-symbols-outlined text-slate-700">arrow_forward</span>
        </button>
      </div>
      <div className="overflow-hidden py-10">
        <div className="flex space-x-8 transition-transform duration-500 ease-out" style={{ transform: `translateX(${translateX}px)` }}>
          {children}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {[0, 1, 2, 3].map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-primary-500' : 'bg-slate-300 hover:bg-slate-400'} transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default function Home({ projectsData, featuredProjectsData, technologiesData, timelineData }) {
  return (
    <div id="webcrumbs">
      <Head>
        <title>My Projects - Innovative Solutions & Creative Designs</title>
        <meta name="description" content="Explore a collection of innovative projects showcasing creative designs and advanced technologies." />
        <meta name="keywords" content="projects, portfolio, web development, data visualization, API, collaboration tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/projects" />
      </Head>
      <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-6">
              My Projects
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore a collection of my latest work, showcasing innovative solutions and creative designs across various technologies and platforms.
            </p>
          </div>

          <Carousel>
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Carousel>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All Projects', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Data Science'].map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg ${
                  index === 0
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden mb-16 pt-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800">Featured Technologies</h2>
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-slate-50 transition-colors duration-300 border border-slate-200">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-slate-50 transition-colors duration-300 border border-slate-200">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto hide-scrollbar pb-4">
              <div className="flex space-x-6 transition-transform duration-300 ease-out">
                {technologiesData.map((tech, index) => (
                  <TechnologyCard key={index} tech={tech} />
                ))}
              </div>
            </div>
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjectsData.map((project, index) => (
              <FeaturedProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="max-w-7xl mx-auto mt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Project Timeline</h2>
            <Carousel>
              {timelineData.map((event, index) => (
                <TimelineCard key={index} event={event} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

