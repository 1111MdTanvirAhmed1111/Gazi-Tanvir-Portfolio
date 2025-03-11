import { FaArrowDown } from 'react-icons/fa'; // Arrow icon
import { SiNextdotjs, SiExpress, SiReact, SiPrisma, SiMongodb } from 'react-icons/si'; // Icons for Next.js, Express.js, React.js, Prisma, MongoDB

const About = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full h-screen bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* You can still use the pattern if needed */}
        </div>

        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 text-teal-400 flex flex-col items-center">
          <div className="w-8 h-12 border-2 border-teal-400 rounded-full flex justify-center p-1">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce mt-1"></div>
          </div>
          <div className="mt-2">
            <FaArrowDown className="text-teal-400" size={40} />
          </div>
        </div>

        <div className="absolute top-[230px] left-[130px]">
          <div className="relative">
            <span className="text-white text-4xl font-bold bg-gray-800 px-6 py-3 rounded-lg inline-block">
              About Me
            </span>
            <div className="absolute inset-0 rounded-lg border-2 border-teal-400 -m-1 transition-all duration-300 hover:m-0"></div>
          </div>
        </div>

        <div className="absolute top-[310px] left-[130px] w-[480px] bg-gray-800 bg-opacity-90 rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-[1.01]">
          <div className="text-teal-400 font-mono"></div>
          
          <div className="mt-2 mb-4">
            <h2 className="text-teal-400 text-xl font-mono font-bold mb-2">Hello!</h2>
            <p className="text-gray-200 leading-relaxed">
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
            <p className="text-gray-200 leading-relaxed mt-3">
              I am a highly motivated individual dedicated to writing clear, concise, robust code that works.
            </p>
          </div>
          
          <div className="text-teal-400 font-mono"></div>
        </div>

        <div className="absolute top-[220px] right-[140px] w-[380px] h-[280px] rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" 
            alt="Developer workspace with laptop and plant" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;