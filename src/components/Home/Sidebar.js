// components/Sidebar.js
import { FaTh, FaUser, FaCode, FaDesktop, FaEdit, FaEnvelope } from 'react-icons/fa';

const Sidebar = () => {
  const sidebarIcons = [
    { icon: FaTh, bgColor: 'bg-gray-700' },
    { icon: FaUser, bgColor: 'bg-transparent' },
    { icon: FaCode, bgColor: 'bg-transparent' },
    { icon: FaDesktop, bgColor: 'bg-transparent' },
    { icon: FaEdit, bgColor: 'bg-transparent' },
    { icon: FaEnvelope, bgColor: 'bg-transparent' },
  ];

  return (
    <div className="fixed left-8 z-50 top-1/2 transform -translate-y-1/2 bg-gray-800 border-2 border-blue-500 rounded-full shadow-xl flex flex-col items-center p-4 transition-all duration-300 hover:scale-105">
      {sidebarIcons.map((item, index) => (
        <div key={index} className={`w-5 h-5 ${item.bgColor} rounded-full flex items-center justify-center mb-4 cursor-pointer transition-all duration-300 hover:bg-gray-600 hover:scale-110`}>
          <item.icon className="text-white" />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
