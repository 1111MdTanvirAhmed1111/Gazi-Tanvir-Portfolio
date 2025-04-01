import { FaArrowDown } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiReact, SiPrisma, SiMongodb } from 'react-icons/si';

const About = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full min-h-screen relative overflow-hidden px-4 py-8">
        <div className="absolute inset-0 opacity-20">
          {/* Pattern if needed */}
        </div>

        {/* Scroll Indicator - Centered on all screens */}
        <div className="relative top-10 w-full flex justify-center mb-16 md:mb-20">
          <div className="flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-teal-400 rounded-full flex justify-center p-1">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce mt-1"></div>
            </div>
            <div className="mt-2">
              <FaArrowDown className="text-teal-400" size={40} />
            </div>
          </div>
        </div>

        {/* Main Content Container - Responsive stacking */}
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Section - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="relative inline-block">
              <span className="text-white text-3xl md:text-4xl font-bold bg-gray-800 px-6 py-3 rounded-lg">
                About Me
              </span>
              <div className="absolute inset-0 rounded-lg border-2 border-teal-400 -m-1 transition-all duration-300 hover:m-0"></div>
            </div>

            <div className="w-full bg-gray-800 bg-opacity-90 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-[1.01]">
              <h2 className="text-teal-400 text-xl font-mono font-bold mb-2">Hello!</h2>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                My name is Tanvir and I specialize in web development that utilizes{' '}
                <span className="text-teal-400 font-semibold inline-flex items-center">
                  <SiNextdotjs className="mr-1" /> Next.js
                </span>,{' '}
                <span className="text-teal-400 font-semibold inline-flex items-center">
                  <SiExpress className="mr-1 text-white" /> Express.js
                </span>,{' '}
                <span className="text-teal-400 font-semibold inline-flex items-center">
                  <SiReact className="mr-1" /> React.js
                </span>,{' '}
                <span className="text-teal-400 font-semibold inline-flex items-center">
                  <SiPrisma className="mr-1" /> Prisma
                </span>, and{' '}
                <span className="text-teal-400 font-semibold inline-flex items-center">
                  <SiMongodb className="mr-1" /> MongoDB
                </span>.
              </p>
              <p className="text-gray-200 leading-relaxed mt-3 text-sm md:text-base">
                I am a highly motivated individual dedicated to writing clear, concise, robust code that works.
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2 max-w-[380px] mx-auto">
            <div className="w-full h-[280px] rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" 
                alt="Developer workspace with laptop and plant" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;