'use client'
import React, { useState } from 'react';

import {
  MdDashboard, MdFolder, MdPsychology, MdMessage, MdPerson, MdSettings, MdLogout,
  MdNotifications, MdSearch, MdAdd, MdCalendarMonth, MdArrowDropDown, MdArrowUpward,
  MdArrowDownward, MdPeople, MdEdit, MdMail, MdAutoGraph, MdAddCircle, MdFilterList,
  MdVisibility,
} from 'react-icons/md';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <MdDashboard />, text: 'Dashboard', active: true },
    { icon: <MdFolder />, text: 'Projects' },
    { icon: <MdPsychology />, text: 'Skills' },
    { icon: <MdMessage />, text: 'Messages', badge: 3 },
    { icon: <MdPerson />, text: 'Profile' },
    { icon: <MdSettings />, text: 'Settings' },
  ];

  const stats = [
    { title: 'Total Projects', value: '24', icon: <MdFolder />, trend: '12%', isUp: true },
    { title: 'Total Messages', value: '16', icon: <MdMessage />, trend: '5%', isUp: false },
    { title: 'Skill Progress', value: '78%', icon: <MdPsychology />, progress: 78 },
    { title: 'User Engagement', value: '1.2k', icon: <MdPeople />, trend: '18%', isUp: true },
  ];

  const notifications = [
    { title: 'New message received', desc: 'John Doe sent you a message about your latest project.', time: '2 minutes ago' },
    { title: 'Project update', desc: 'Portfolio website received 10 new views today.', time: '1 hour ago' },
    { title: 'Skill assessment', desc: 'Your React skills are trending up by 15% this week.', time: 'Yesterday' },
  ];

  const recentActivities = [
    { icon: <MdEdit />, title: 'Project Updated', desc: 'You updated the E-commerce project details', time: '2 hours ago' },
    { icon: <MdMail />, title: 'New Message', desc: 'John Doe sent you a message about collaboration', time: '5 hours ago' },
    { icon: <MdAutoGraph />, title: 'Skill Progress', desc: 'Your React skills increased to 92%', time: 'Yesterday' },
    { icon: <MdAddCircle />, title: 'New Project', desc: 'You added a new project: Portfolio Redesign', time: '2 days ago' },
  ];

  const projects = [
    {
      title: 'E-commerce Website',
      desc: 'Online shop with cart functionality',
      img: 'https://source.unsplash.com/random/800x600/?website',
      tags: ['React', 'Node'],
      team: [1, 2, 3],
      views: 245
    },
    {
      title: 'Admin Dashboard',
      desc: 'Analytics and management system',
      img: 'https://source.unsplash.com/random/800x600/?dashboard',
      tags: ['Vue', 'Firebase'],
      team: [4, 5],
      views: 180
    },
    {
      title: 'Mobile App',
      desc: 'Fitness tracking application',
      img: 'https://source.unsplash.com/random/800x600/?mobile',
      tags: ['React Native', 'Graph QL'],
      team: [6, 7, 8],
      views: 310
    },
  ];

  // Chart.js data
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Visitors',
        data: [240, 180, 280, 200, 120, 300, 220],
        borderColor: '#9b4fd2',
        backgroundColor: 'rgba(155, 79, 210, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: '#1a2b6f' },
    },
    scales: {
      x: { grid: { color: 'rgba(255, 255, 255, 0.1)' } },
      y: { grid: { color: 'rgba(255, 255, 255, 0.1)' } },
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#1a2b6f] to-[#5c3d8c] text-white flex overflow-hidden">
      {/* Sidebar */}
      <aside className="h-screen w-64 bg-[#5c3d8c] flex flex-col transition-all duration-300 hover:shadow-lg md:w-20 lg:w-64">
        <div className="flex items-center justify-between p-4 border-b border-purple-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#9b4fd2] overflow-hidden">
              <Image src="https://i.pravatar.cc/100" alt="Profile" width={40} height={40} className="object-cover" />
            </div>
            <details className="relative hidden md:hidden lg:block">
              <summary className="flex items-center space-x-2 cursor-pointer">
                <span className="font-medium">Admin User</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="absolute left-0 mt-2 w-48 bg-[#1a2b6f] rounded-md shadow-lg z-10 p-2">
                <ul className="space-y-1">
                  {['Profile Settings', 'Edit Profile', 'Logout'].map((item) => (
                    <li key={item} className="p-2 hover:bg-[#9b4fd2] rounded-md transition-colors cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
          <div className="relative">
            <MdNotifications className="text-2xl cursor-pointer" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </div>
        </div>
        
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-2">
            {navItems.map((item) => (
              <li key={item.text} className="group">
                <a
                  href="#"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-all ${
                    item.active ? 'bg-[#9b4fd2] bg-opacity-20 group-hover:bg-opacity-30' : 'hover:bg-[#9b4fd2] hover:bg-opacity-20'
                  }`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="hidden md:hidden lg:inline">{item.text}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-500 text-xs rounded-full px-2 hidden md:hidden lg:inline">{item.badge}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-purple-900">
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-md hover:bg-[#9b4fd2] hover:bg-opacity-20 transition-all">
            <MdLogout className="text-2xl" />
            <span className="hidden md:hidden lg:inline">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-[#1a2b6f] py-4 px-6 flex items-center justify-between shadow-md flex-wrap">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="relative w-full sm:w-96 mt-4 sm:mt-0 group">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pr-10 rounded-full bg-[#5c3d8c] bg-opacity-20 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-[#9b4fd2] focus:bg-opacity-30 transition-all"
            />
            <MdSearch className="absolute right-3 top-2.5 text-2xl" />
          </div>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <details className="relative">
              <summary className="relative cursor-pointer">
                <MdNotifications className="text-2xl" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center text-xs">3</span>
              </summary>
              <div className="absolute right-0 mt-2 w-80 bg-[#1a2b6f] rounded-md shadow-lg z-10 p-2">
                <div className="p-3 text-sm font-medium border-b border-purple-900">Notifications (3)</div>
                <ul className="space-y-1 max-h-80 overflow-y-auto">
                  {notifications.map((notif, index) => (
                    <li key={index} className="p-3 hover:bg-[#9b4fd2] hover:bg-opacity-20 rounded-md transition-colors cursor-pointer border-l-4 border-[#9b4fd2]">
                      <div className="font-medium">{notif.title}</div>
                      <div className="text-sm opacity-70">{notif.desc}</div>
                      <div className="text-xs opacity-50 mt-1">{notif.time}</div>
                    </li>
                  ))}
                </ul>
                <div className="p-2 text-center border-t border-purple-900 mt-2">
                  <a href="#" className="text-[#9b4fd2] hover:underline text-sm">View all notifications</a>
                </div>
              </div>
            </details>
            <details className="relative">
              <summary className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#9b4fd2] overflow-hidden">
                  <Image src="https://i.pravatar.cc/100" alt="Profile" width={32} height={32} className="object-cover" />
                </div>
                <span className="font-medium hidden sm:inline">Admin User</span>
                <svg className="h-4 w-4 hidden sm:inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-48 bg-[#1a2b6f] rounded-md shadow-lg z-10 p-2">
                <ul className="space-y-1">
                  {['My Profile', 'Account Settings', 'Support', 'Logout'].map((item, index) => (
                    <li key={item} className={`p-2 hover:bg-[#9b4fd2] rounded-md transition-colors cursor-pointer ${index === 3 ? 'border-t border-purple-900 mt-1' : ''}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        </header>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <button className="px-4 py-2 bg-[#9b4fd2] rounded-md hover:bg-opacity-80 transition-colors flex items-center space-x-2">
                <MdAdd className="text-xl" />
                <span>Add Project</span>
              </button>
              <div className="relative">
                <button className="px-4 py-2 bg-[#1a2b6f] rounded-md hover:bg-opacity-80 transition-colors flex items-center space-x-2">
                  <MdCalendarMonth className="text-xl" />
                  <span>Last 7 Days</span>
                  <MdArrowDropDown className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.title} className="bg-gray-900 bg-opacity-40 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#9b4fd2]/20 hover:scale-[1.02] cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm opacity-70">{stat.title}</p>
                    <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl text-[#9b4fd2]">{stat.icon}</span>
                  </div>
                </div>
                <div className="mt-4">
                  {stat.progress ? (
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div className="bg-[#9b4fd2] h-2.5 rounded-full" style={{ width: `${stat.progress}%` }}></div>
                    </div>
                  ) : (
                    <div className="flex items-center text-sm">
                      <span className={`flex items-center ${stat.isUp ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.isUp ? <MdArrowUpward className="text-sm" /> : <MdArrowDownward className="text-sm" />}
                        <span>{stat.trend}</span>
                      </span>
                      <span className="ml-2 opacity-70">from last month</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 bg-opacity-40 rounded-xl p-6 col-span-1 lg:col-span-2 transition-all hover:shadow-lg hover:shadow-[#9b4fd2]/20">
              <div className="flex justify-between items-center mb-6 flex-wrap">
                <h3 className="text-lg font-semibold">Visitor Statistics</h3>
                <div className="flex space-x-2 mt-4 lg:mt-0">
                  {['Daily', 'Weekly', 'Monthly'].map((period, index) => (
                    <button key={period} className={`px-3 py-1 rounded-md text-sm transition-colors ${index === 1 ? 'bg-[#9b4fd2] hover:bg-opacity-80' : 'bg-[#9b4fd2] bg-opacity-20 hover:bg-opacity-40'}`}>
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[300px] w-full">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>

            <div className="bg-gray-900 bg-opacity-40 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-[#9b4fd2]/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <button className="text-sm text-[#9b4fd2] hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.title} className="flex items-start space-x-3 p-3 hover:bg-white hover:bg-opacity-5 rounded-lg transition-colors">
                    <div className="h-10 w-10 bg-[#9b4fd2] bg-opacity-20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-2xl text-[#9b4fd2]">{activity.icon}</span>
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm opacity-70">{activity.desc}</p>
                      <p className="text-xs opacity-50 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6 flex-wrap">
              <h3 className="text-xl font-bold">Project Management</h3>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <button className="px-4 py-2 bg-[#1a2b6f] rounded-md hover:bg-opacity-80 transition-colors flex items-center space-x-2">
                  <MdFilterList className="text-xl" />
                  <span>Filter</span>
                </button>
                <button className="px-4 py-2 bg-[#9b4fd2] rounded-md hover:bg-opacity-80 transition-colors flex items-center space-x-2">
                  <MdAdd className="text-xl" />
                  <span>Add Project</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-[#9b4fd2]/40 hover:scale-[1.03] transition-all duration-300 cursor-pointer group border border-purple-900/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                  <div className="p-5 relative">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-xl text-white group-hover:text-[#9b4fd2] transition-colors">{project.title}</h4>
                        <p className="text-sm text-gray-300 mt-1">{project.desc}</p>
                      </div>
                      <div className="flex space-x-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-[#9b4fd2]/20 text-[#9b4fd2] rounded-full text-xs font-medium border border-[#9b4fd2]/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {project.team.map((member) => (
                          <Image
                            key={member}
                            src={`https://i.pravatar.cc/100?img=${member}`}
                            alt="Team Member"
                            width={32}
                            height={32}
                            className="rounded-full border-2 border-gray-800 hover:border-[#9b4fd2] transition-colors"
                          />
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <MdVisibility className="text-[#9b4fd2] group-hover:scale-110 transition-transform" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold">Skills Management</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;