import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaMedium } from 'react-icons/fa';
import { MdDownload, MdMail, MdPhone, MdSend, MdCalendarMonth, MdRoute, MdCode, MdRocketLaunch, MdFavorite, MdChat, MdVisibility } from 'react-icons/md';
import { Header } from '@/components/Home/Header';
const About = () => {
  const journeySteps = [
    { step: 1, title: "Started with HTML & CSS", description: "I began my web development journey by crafting simple static websites using HTML and CSS, learning the fundamentals of web design and structure." },
    { step: 2, title: "Discovered JavaScript", description: "As I dug deeper into web development, I discovered the power of JavaScript and started building more dynamic and interactive web experiences." },
    { step: 3, title: "Embraced React", description: "I fell in love with React's component-based architecture, which allowed me to build reusable UI elements and manage state more effectively." },
    { step: 4, title: "Mastered MERN Stack", description: "The transition to the full MERN stack was natural, allowing me to build end-to-end applications using MongoDB, Express, React, and Node.js." }
  ];

  const projects = [
    { title: "Task Management App", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71", category: "Full Stack", date: "Completed June 2023", description: "Built a full-stack to-do app using the MERN stack to help users organize their tasks efficiently. Features include authentication, task filtering, and real-time updates.", tags: ["#React", "#MongoDB", "#Node.js", "#Express"] },
    { title: "E-commerce Platform", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", category: "E-commerce", date: "Completed February 2023", description: "Developed a responsive e-commerce platform with product catalog, shopping cart, user authentication, and payment processing using Stripe integration.", tags: ["#React", "#Redux", "#Node.js", "#Stripe"] },
    { title: "Social Media Dashboard", image: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02", category: "Analytics", date: "Completed October 2022", description: "Created a comprehensive dashboard for social media analytics, featuring real-time data visualization, content scheduling, and performance tracking.", tags: ["#React", "#GraphQL", "#ChartJS", "#MongoDB"] }
  ];

  // Define social icons as components, not JSX literals
  const socialIcons = [FaGithub, FaLinkedin, FaTwitter];
  const footerSocialIcons = [FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaMedium];

  return (
    <div id="webcrumbs" className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-full bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-white rounded-xl shadow-2xl">

        <Header/>

        {/* Journey Section */}
        <section className="mb-12 bg-gray-800 bg-opacity-50 p-4 sm:p-6 rounded-xl shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 border-b border-gray-700 pb-2">
            <span className="flex items-center">
              <MdRoute className="mr-2" />
              My Journey
            </span>
          </h2>
          <div className="space-y-6">
            {journeySteps.map((item, index) => (
              <div key={item.step} className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-gray-900 font-bold">
                    {item.step}
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="h-full w-0.5 bg-cyan-500 bg-opacity-30 my-1"></div>
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="text-base sm:text-lg font-medium text-cyan-300 mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-400 border-b border-gray-700 pb-2">
            <span className="flex items-center">
              <MdCode className="mr-2" />
              Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 bg-opacity-50 p-5 rounded-lg shadow-md transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-base sm:text-lg font-medium mb-4 text-cyan-300">Frontend</h3>
              <div className="space-y-3">
                {[
                  { name: "React", icon: "fa-brands fa-react", color: "blue-400", level: "Advanced", width: "90%" },
                  { name: "JavaScript (ES6+)", icon: "fa-brands fa-js", color: "yellow-400", level: "Advanced", width: "85%" },
                  { name: "TypeScript", icon: "TS", color: "blue-500", level: "Intermediate", width: "75%" },
                  { name: "HTML5 & CSS3", icon: "fa-brands fa-html5", color: "orange-500", level: "Advanced", width: "95%" }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center text-gray-300">
                        {skill.icon.startsWith("fa-") ? (
                          <i className={`${skill.icon} mr-2 text-${skill.color}`}></i>
                        ) : (
                          <span className={`mr-2 font-bold text-${skill.color}`}>{skill.icon}</span>
                        )}
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className={`bg-gradient-to-r from-${skill.color} to-${skill.color.replace("400", "300")} h-2 rounded-full`} style={{ width: skill.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 bg-opacity-50 p-5 rounded-lg shadow-md transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="text-base sm:text-lg font-medium mb-4 text-cyan-300">Backend</h3>
              <div className="space-y-3">
                {[
                  { name: "Node.js", icon: "fa-brands fa-node-js", color: "green-500", level: "Advanced", width: "85%" },
                  { name: "Express", icon: "Ex", color: "gray-300", level: "Advanced", width: "80%" },
                  { name: "MongoDB", icon: "M", color: "green-500", level: "Advanced", width: "85%" },
                  { name: "GraphQL", icon: "GQL", color: "purple-500", level: "Intermediate", width: "70%" }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="flex items-center text-gray-300">
                        {skill.icon.startsWith("fa-") ? (
                          <i className={`${skill.icon} mr-2 text-${skill.color}`}></i>
                        ) : (
                          <span className={`mr-2 font-bold text-${skill.color}`}>{skill.icon}</span>
                        )}
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className={`bg-gradient-to-r from-${skill.color} to-${skill.color.replace("500", "400")} h-2 rounded-full`} style={{ width: skill.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-400 border-b border-gray-700 pb-2">
            <span className="flex items-center">
              <MdRocketLaunch className="mr-2" />
              Featured Projects
            </span>
          </h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg group hover:shadow-cyan-900/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 overflow-hidden h-60 md:h-auto">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center mb-2">
                      <span className="bg-cyan-500 bg-opacity-20 text-cyan-300 text-xs px-3 py-1 rounded-full mr-2">{project.category}</span>
                      <span className="text-gray-400 text-xs">{project.date}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300 hover:bg-gray-600 transition duration-300 hover:text-white">{tag}</span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="flex items-center text-cyan-400 text-sm transition-all duration-300 hover:text-cyan-300 hover:translate-x-1">
                        <MdVisibility className="mr-1 text-sm" />
                        Live Demo
                      </a>
                      <a href="#" className="flex items-center text-cyan-400 text-sm transition-all duration-300 hover:text-cyan-300 hover:translate-x-1">
                        <FaGithub className="mr-1" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Passion Section */}
        <section className="mb-12 bg-gray-800 bg-opacity-50 p-4 sm:p-6 rounded-xl shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 border-b border-gray-700 pb-2">
            <span className="flex items-center">
              <MdFavorite className="mr-2" />
              What I'm Passionate About
            </span>
          </h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I'm deeply passionate about building applications that scale and evolve with users' needs...
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in the power of clean, readable code and the importance of user experience...
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { icon: "trending_up", title: "Scalable Applications", desc: "Building systems that can grow alongside business needs." },
                { icon: "bolt", title: "Performance Optimization", desc: "Creating lightning-fast experiences for users." },
                { icon: "school", title: "Continuous Learning", desc: "Always expanding my knowledge and skills." },
                { icon: "groups", title: "Mentorship", desc: "Sharing knowledge and helping others grow." }
              ].map((item) => (
                <div key={item.title} className="bg-gray-700 bg-opacity-50 p-4 rounded-lg flex items-start hover:bg-gray-700 transition-colors duration-300">
                  <span className="material-symbols-outlined text-cyan-400 mr-3 mt-1">{item.icon}</span>
                  <div>
                    <h3 className="text-cyan-300 font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="mt-12 pt-8 border-t border-gray-700">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-cyan-400">
            <span className="flex items-center">
              <MdChat className="mr-2" />
              Let's Connect
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-300 mb-4 max-w-md">
                I'd love to collaborate with you on your next project or help you bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a href="mailto:alex@example.com" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <MdMail className="mr-2" />
                  alex@example.com
                </a>
                <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <MdPhone className="mr-2" />
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden border-2 border-cyan-400 text-cyan-400 px-6 py-2.5 rounded-full hover:text-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                <span className="relative z-10 flex items-center font-medium">
                  <MdSend className="mr-2" />
                  Send Message
                </span>
                <span className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </button>
              <button className="bg-gray-700 text-white px-6 py-2.5 rounded-full hover:bg-gray-600 transition duration-300 flex items-center font-medium">
                <MdCalendarMonth className="mr-2" />
                Schedule Call
              </button>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            {footerSocialIcons.map((Icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110">
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;