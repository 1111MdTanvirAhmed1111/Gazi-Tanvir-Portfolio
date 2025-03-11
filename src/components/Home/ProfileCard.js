// components/ProfileCard.js
import { FaMailBulk, FaMapMarkerAlt, FaRegClock, FaGlobeAmericas, FaDownload } from 'react-icons/fa';

const ProfileCard = () => {
  const profileInfo = [
    { icon: FaMailBulk, label: "tosibahabiba@gmail.com" },
    { icon: FaMapMarkerAlt, label: "Dhaka,Bangladesh" },
    { icon: FaRegClock, label: "Full-time Developer / Freelancer" },
    { icon: FaGlobeAmericas, label: "tanvir.pothoczuto.xyz" },
  ];

  const skills = ['HTML', 'CSS', 'JS', 'React'];

  return (
    <div className="w-[240px] sm:w-[280px] lg:w-[260px] mx-auto relative animate-pulse">
      <div className="bg-gray-800 border-2 border-cyan-300 rounded-tl-[5rem] rounded-br-[5rem] p-5 flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-700">
        <div className="mb-3">
          <img
            src="/logo.ico"
            alt="Profile"
            className="w-16 mx-auto h-16 rounded-full border-2 border-cyan-300 mb-2 hover:scale-105 transition-transform duration-300"
          />
          <h2 className="text-xl sm:text-2xl font-bold text-center">Tanvir</h2>
          <p className="text-xs sm:text-sm text-center text-gray-400">Full-Stack Developer</p>
        </div>

        <div className="space-y-1.5 mt-3 text-left flex flex-col">
          {profileInfo.map((item, index) => (
            <div key={index} className="flex items-center justify-center text-sm sm:text-base">
              <item.icon className="text-cyan-300 mr-2 text-xs sm:text-sm" />
              <span className="text-gray-300 text-xs sm:text-sm truncate">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 mt-3 text-xs sm:text-sm justify-center">
          {skills.map((skill, index) => (
            <span key={index} className="bg-cyan-300 text-gray-800 px-2 py-0.5 rounded-full hover:bg-cyan-400 transition-colors duration-300">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button className="bg-white text-gray-800 px-4 py-1.5 rounded-full flex items-center gap-1 transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1 text-sm sm:text-base">
            <FaDownload className="text-gray-800 text-sm sm:text-base" /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
