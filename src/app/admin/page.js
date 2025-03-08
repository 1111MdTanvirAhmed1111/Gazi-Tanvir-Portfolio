import React from "react"

 const Component = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full h-screen bg-gray-100 flex overflow-hidden">
                <div className="relative transition-all duration-300 ease-in-out" id="sidebar">
                    <input type="checkbox" id="sidebar-toggle" className="hidden peer" />
                    <div className="w-[70px] peer-checked:w-[250px] h-screen bg-purple-900 text-white transition-all duration-300 ease-in-out overflow-y-auto shadow-lg">
                        <div className="p-4 flex flex-col items-center">
                            <div className="relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-purple-400 cursor-pointer hover:border-purple-300 transition-all"
                                />
                                <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-50">
                                    <a href="#" className="block px-4 py-2 text-sm hover:bg-purple-100">
                                        Edit Profile
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm hover:bg-purple-100">
                                        Change Password
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm hover:bg-purple-100">
                                        Logout
                                    </a>
                                </div>
                            </div>
                            <div className="mt-4 w-full hidden peer-checked:block">
                                <span className="text-lg font-semibold">John Doe</span>
                                <p className="text-xs text-purple-300">Admin</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="relative mb-4">
                                <div className="absolute right-3 top-1 bg-red-500 w-2 h-2 rounded-full"></div>
                                <a
                                    href="#"
                                    className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group"
                                >
                                    <span className="material-symbols-outlined group-hover:text-purple-300 transition-all">
                                        notifications
                                    </span>
                                    <span className="ml-4 hidden peer-checked:block">Notifications</span>
                                </a>
                            </div>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group bg-purple-800"
                            >
                                <span className="material-symbols-outlined text-purple-300 group-hover:text-purple-300 transition-all">
                                    dashboard
                                </span>
                                <span className="ml-4 hidden peer-checked:block">Dashboard</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group"
                            >
                                <span className="material-symbols-outlined group-hover:text-purple-300 transition-all">
                                    folder
                                </span>
                                <span className="ml-4 hidden peer-checked:block">Projects</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group"
                            >
                                <span className="material-symbols-outlined group-hover:text-purple-300 transition-all">
                                    psychology
                                </span>
                                <span className="ml-4 hidden peer-checked:block">Skills</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group"
                            >
                                <span className="material-symbols-outlined group-hover:text-purple-300 transition-all">
                                    chat
                                </span>
                                <span className="ml-4 hidden peer-checked:block">Messages</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group"
                            >
                                <span className="material-symbols-outlined group-hover:text-purple-300 transition-all">
                                    person
                                </span>
                                <span className="ml-4 hidden peer-checked:block">Profile</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group"
                            >
                                <span className="material-symbols-outlined group-hover:text-purple-300 transition-all">
                                    analytics
                                </span>
                                <span className="ml-4 hidden peer-checked:block">Analytics</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group"
                            >
                                <span className="material-symbols-outlined group-hover:text-purple-300 transition-all">
                                    settings
                                </span>
                                <span className="ml-4 hidden peer-checked:block">Settings</span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 hover:bg-purple-800 transition-all group"
                            >
                                <span className="material-symbols-outlined group-hover:text-purple-300 transition-all">
                                    logout
                                </span>
                                <span className="ml-4 hidden peer-checked:block">Logout</span>
                            </a>
                        </div>
                    </div>
                    <label
                        for="sidebar-toggle"
                        className="absolute top-5 -right-3 bg-purple-600 text-white rounded-full p-2 cursor-pointer hover:bg-purple-500 transition-all shadow-lg"
                    >
                        <span className="material-symbols-outlined text-sm peer-checked:rotate-180">chevron_right</span>
                    </label>
                </div>

                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="h-16 bg-indigo-900 text-white flex items-center justify-between px-4 shadow-md">
                        <div className="flex items-center">
                            <img src="https://placehold.co/100x30/indigo/white?text=LOGO" alt="Logo" className="h-8" />
                        </div>
                        <div className="relative mx-4 flex-1 max-w-lg">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-indigo-800 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                            />
                            <span className="material-symbols-outlined absolute left-3 top-2 text-indigo-300">
                                search
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative group">
                                <span className="material-symbols-outlined cursor-pointer hover:text-purple-300 transition-all">
                                    notifications
                                </span>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    3
                                </span>
                                <div className="hidden group-hover:block absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-md shadow-lg py-1 z-50">
                                    <div className="p-3 border-b border-gray-200">
                                        <h3 className="font-bold">Notifications</h3>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-purple-100 border-b border-gray-100"
                                        >
                                            <p className="text-sm font-medium">New message from Alex</p>
                                            <p className="text-xs text-gray-500">2 minutes ago</p>
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-purple-100 border-b border-gray-100"
                                        >
                                            <p className="text-sm font-medium">Project "E-commerce" updated</p>
                                            <p className="text-xs text-gray-500">1 hour ago</p>
                                        </a>
                                        <a href="#" className="block px-4 py-2 hover:bg-purple-100">
                                            <p className="text-sm font-medium">Your skill "React" was endorsed</p>
                                            <p className="text-xs text-gray-500">3 hours ago</p>
                                        </a>
                                    </div>
                                    <div className="p-2 border-t border-gray-200 bg-gray-50">
                                        <a
                                            href="#"
                                            className="block text-center text-sm text-indigo-600 hover:text-indigo-800"
                                        >
                                            View all notifications
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-indigo-400 cursor-pointer hover:border-purple-300 transition-all"
                                />
                                <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-50">
                                    <a href="#" className="block px-4 py-2 text-sm hover:bg-purple-100">
                                        Profile
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm hover:bg-purple-100">
                                        Settings
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-sm hover:bg-purple-100">
                                        Logout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto p-4">
                        <div className="mb-6 flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                            <div className="flex items-center space-x-2">
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center transition-all shadow hover:shadow-lg">
                                    <span className="material-symbols-outlined mr-1">add</span>
                                    Add Widget
                                </button>
                                <details className="relative inline-block">
                                    <summary className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md border border-gray-300 flex items-center cursor-pointer transition-all">
                                        <span className="material-symbols-outlined mr-1">calendar_today</span>
                                        Last 30 Days
                                        <span className="material-symbols-outlined ml-1">arrow_drop_down</span>
                                    </summary>
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Today
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Last 7 Days
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Last 30 Days
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Last Quarter
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Custom Range
                                        </a>
                                    </div>
                                </details>
                                <button className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-md border border-gray-300 flex items-center transition-all">
                                    <span className="material-symbols-outlined">dark_mode</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden group">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-all">
                                            <span className="material-symbols-outlined text-indigo-600">folder</span>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-sm font-medium text-gray-500">Total Projects</h3>
                                            <p className="text-2xl font-bold">24</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-green-500 text-sm">
                                        <span className="material-symbols-outlined text-sm">trending_up</span>
                                        <span className="ml-1">12% increase</span>
                                        <span className="text-gray-400 ml-2">since last month</span>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-indigo-600"></div>
                            </div>

                            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden group">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-all">
                                            <span className="material-symbols-outlined text-green-600">chat</span>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-sm font-medium text-gray-500">Total Messages</h3>
                                            <p className="text-2xl font-bold">17</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-green-500 text-sm">
                                        <span className="material-symbols-outlined text-sm">trending_up</span>
                                        <span className="ml-1">8% increase</span>
                                        <span className="text-gray-400 ml-2">since last week</span>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-green-600"></div>
                            </div>

                            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden group">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-all">
                                            <span className="material-symbols-outlined text-purple-600">
                                                psychology
                                            </span>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-sm font-medium text-gray-500">Skills Mastered</h3>
                                            <p className="text-2xl font-bold">85%</p>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-purple-600 h-2 rounded-full"
                                                    style={{width: "85%"}}
                                                ></div>
                                            </div>
                                            <span className="ml-2 text-xs text-gray-600">85/100</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-purple-600"></div>
                            </div>

                            <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden group">
                                <div className="p-5">
                                    <div className="flex items-center">
                                        <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-all">
                                            <span className="material-symbols-outlined text-blue-600">trending_up</span>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-sm font-medium text-gray-500">User Growth</h3>
                                            <p className="text-2xl font-bold">+32%</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center text-green-500 text-sm">
                                        <span className="material-symbols-outlined text-sm">trending_up</span>
                                        <span className="ml-1">15% increase</span>
                                        <span className="text-gray-400 ml-2">since last month</span>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-blue-600"></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                            <div className="bg-white rounded-lg shadow col-span-1 lg:col-span-2">
                                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                                    <h2 className="font-semibold">Visitor Statistics</h2>
                                    <div className="flex space-x-2">
                                        <button className="text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-all">
                                            Daily
                                        </button>
                                        <button className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-all">
                                            Weekly
                                        </button>
                                        <button className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-all">
                                            Monthly
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 h-[300px] flex items-center justify-center">
                                    <svg viewBox="0 0 800 300" className="w-full h-full">
                                        <path
                                            d="M0,150 C100,50 200,250 300,150 C400,50 500,250 600,150 C700,50 800,150 800,150"
                                            fill="none"
                                            stroke="#4f46e5"
                                            strokeWidth="3"
                                        ></path>
                                        <path
                                            d="M0,150 C100,100 200,200 300,150 C400,100 500,200 600,150 C700,100 800,150 800,150"
                                            fill="none"
                                            stroke="#a855f7"
                                            strokeWidth="3"
                                            strokeDasharray="5,5"
                                        ></path>
                                        <g>
                                            <circle cx="0" cy="150" r="5" fill="#4f46e5"></circle>
                                            <circle cx="100" cy="50" r="5" fill="#4f46e5"></circle>
                                            <circle cx="200" cy="250" r="5" fill="#4f46e5"></circle>
                                            <circle cx="300" cy="150" r="5" fill="#4f46e5"></circle>
                                            <circle cx="400" cy="50" r="5" fill="#4f46e5"></circle>
                                            <circle cx="500" cy="250" r="5" fill="#4f46e5"></circle>
                                            <circle cx="600" cy="150" r="5" fill="#4f46e5"></circle>
                                            <circle cx="700" cy="50" r="5" fill="#4f46e5"></circle>
                                            <circle cx="800" cy="150" r="5" fill="#4f46e5"></circle>
                                        </g>
                                        <g>
                                            <circle cx="0" cy="150" r="5" fill="#a855f7"></circle>
                                            <circle cx="100" cy="100" r="5" fill="#a855f7"></circle>
                                            <circle cx="200" cy="200" r="5" fill="#a855f7"></circle>
                                            <circle cx="300" cy="150" r="5" fill="#a855f7"></circle>
                                            <circle cx="400" cy="100" r="5" fill="#a855f7"></circle>
                                            <circle cx="500" cy="200" r="5" fill="#a855f7"></circle>
                                            <circle cx="600" cy="150" r="5" fill="#a855f7"></circle>
                                            <circle cx="700" cy="100" r="5" fill="#a855f7"></circle>
                                            <circle cx="800" cy="150" r="5" fill="#a855f7"></circle>
                                        </g>
                                        <line x1="0" y1="280" x2="800" y2="280" stroke="#e5e7eb" strokeWidth="1"></line>
                                        <text x="0" y="295" fill="#6b7280" className="text-xs">
                                            Mon
                                        </text>
                                        <text x="100" y="295" fill="#6b7280" className="text-xs">
                                            Tue
                                        </text>
                                        <text x="200" y="295" fill="#6b7280" className="text-xs">
                                            Wed
                                        </text>
                                        <text x="300" y="295" fill="#6b7280" className="text-xs">
                                            Thu
                                        </text>
                                        <text x="400" y="295" fill="#6b7280" className="text-xs">
                                            Fri
                                        </text>
                                        <text x="500" y="295" fill="#6b7280" className="text-xs">
                                            Sat
                                        </text>
                                        <text x="600" y="295" fill="#6b7280" className="text-xs">
                                            Sun
                                        </text>
                                        <text x="700" y="295" fill="#6b7280" className="text-xs">
                                            Mon
                                        </text>
                                    </svg>
                                </div>
                                <div className="p-4 border-t border-gray-200 flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></div>
                                            <span className="text-sm text-gray-600">Visitors</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                                            <span className="text-sm text-gray-600">Page Views</span>
                                        </div>
                                    </div>
                                    <button className="text-sm px-3 py-1 text-indigo-600 hover:bg-indigo-50 rounded border border-indigo-200 flex items-center transition-all">
                                        <span className="material-symbols-outlined text-sm mr-1">download</span>
                                        Export
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow">
                                <div className="p-4 border-b border-gray-200">
                                    <h2 className="font-semibold">Recent Activity</h2>
                                </div>
                                <div className="p-0">
                                    <div className="border-l-4 border-green-500 pl-4 py-3 pr-4 hover:bg-gray-50 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium">Project Created</h3>
                                                <p className="text-sm text-gray-600">
                                                    New project "E-commerce Dashboard" added
                                                </p>
                                            </div>
                                            <span className="text-xs text-gray-500">2m ago</span>
                                        </div>
                                    </div>
                                    <div className="border-l-4 border-indigo-500 pl-4 py-3 pr-4 hover:bg-gray-50 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium">Skill Updated</h3>
                                                <p className="text-sm text-gray-600">
                                                    React.js skill level increased to 95%
                                                </p>
                                            </div>
                                            <span className="text-xs text-gray-500">1h ago</span>
                                        </div>
                                    </div>
                                    <div className="border-l-4 border-yellow-500 pl-4 py-3 pr-4 hover:bg-gray-50 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium">New Message</h3>
                                                <p className="text-sm text-gray-600">
                                                    Sarah sent you a message about collaboration
                                                </p>
                                            </div>
                                            <span className="text-xs text-gray-500">3h ago</span>
                                        </div>
                                    </div>
                                    <div className="border-l-4 border-red-500 pl-4 py-3 pr-4 hover:bg-gray-50 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium">Profile Updated</h3>
                                                <p className="text-sm text-gray-600">
                                                    Your profile information was updated
                                                </p>
                                            </div>
                                            <span className="text-xs text-gray-500">1d ago</span>
                                        </div>
                                    </div>
                                    <div className="border-l-4 border-blue-500 pl-4 py-3 pr-4 hover:bg-gray-50 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-medium">New Follower</h3>
                                                <p className="text-sm text-gray-600">
                                                    John started following your portfolio
                                                </p>
                                            </div>
                                            <span className="text-xs text-gray-500">2d ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 border-t border-gray-200 bg-gray-50">
                                    <a
                                        href="#"
                                        className="flex justify-center items-center text-indigo-600 hover:text-indigo-800 transition-all"
                                    >
                                        <span>View All Activity</span>
                                        <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Manage Projects</h2>
                            <div className="flex mb-4 space-x-2">
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    className="border border-gray-300 rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                />
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center transition-all">
                                    <span className="material-symbols-outlined mr-1">add</span>
                                    Add Project
                                </button>
                                <details className="relative inline-block">
                                    <summary className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md border border-gray-300 flex items-center cursor-pointer transition-all">
                                        <span className="material-symbols-outlined mr-1">filter_list</span>
                                        Filter
                                    </summary>
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            All Projects
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            In Progress
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Completed
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            Archived
                                        </a>
                                    </div>
                                </details>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden group">
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                            alt="Project"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end">
                                            <div className="p-4 w-full">
                                                <div className="flex space-x-1">
                                                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all">
                                                        <span className="material-symbols-outlined text-white">
                                                            edit
                                                        </span>
                                                    </button>
                                                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all">
                                                        <span className="material-symbols-outlined text-white">
                                                            visibility
                                                        </span>
                                                    </button>
                                                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all">
                                                        <span className="material-symbols-outlined text-white">
                                                            delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg mb-1">E-commerce Dashboard</h3>
                                        <p className="text-gray-600 text-sm mb-2">
                                            A comprehensive dashboard for managing online stores
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                React
                                            </span>
                                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                                Node.js
                                            </span>
                                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                                MongoDB
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex -space-x-2">
                                                <img
                                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                                    alt="User"
                                                    className="w-7 h-7 rounded-full border-2 border-white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Component