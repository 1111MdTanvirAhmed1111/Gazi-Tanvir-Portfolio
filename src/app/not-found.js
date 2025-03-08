import { FaHome, FaArrowRight, FaClipboardList } from 'react-icons/fa';

const Component = () => {
    // Array for "Let's get you back on track" buttons
    const buttons = [
        {
            href: '/',
            label: 'Go to the Home Page',
            icon: <FaHome className="w-5 h-5" />,
            bgClass: 'bg-[#4ECDC4] hover:bg-[#56E0D7]',
            textClass: 'text-[#1D2731]',
        },
        {
            href: '/portfolio',
            label: 'Browse My Portfolio',
            icon: <FaClipboardList className="w-5 h-5" />,
            bgClass: 'bg-transparent hover:bg-[#4ECDC4]/20',
            textClass: 'text-[#4ECDC4]',
        }
    ];

    // Array for the "Recent Work" items
    const projects = [1, 2, 3, 4];

    return (
        <div id="webcrumbs">
            <div className="min-h-[600px] bg-[#1D2731] flex flex-col items-center justify-center p-12 text-[#D1D9E6] font-sans w-full">
                <div className="text-center max-w-[100%] sm:max-w-[600px] mb-10 px-4">
                    <div className="flex justify-center mb-6">
                        <svg
                            className="w-24 h-24 text-[#4ECDC4] animate-pulse"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 13.5C10 14.3284 9.32843 15 8.5 15C7.67157 15 7 14.3284 7 13.5C7 12.6716 7.67157 12 8.5 12C9.32843 12 10 12.6716 10 13.5Z"
                                fill="currentColor"
                            />
                            <path
                                d="M17 13.5C17 14.3284 16.3284 15 15.5 15C14.6716 15 14 14.3284 14 13.5C14 12.6716 14.6716 12 15.5 12C16.3284 12 17 12.6716 17 13.5Z"
                                fill="currentColor"
                            />
                            <path
                                d="M12 17C10.8954 17 10 16.1046 10 15H8C8 17.2091 9.79086 19 12 19C14.2091 19 16 17.2091 16 15H14C14 16.1046 13.1046 17 12 17Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                                fill="currentColor"
                            />
                            <path
                                d="M15.5 7C15.5 7.82843 16.1716 8.5 17 8.5C17.8284 8.5 18.5 7.82843 18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7Z"
                                fill="currentColor"
                            />
                            <path
                                d="M5.5 7C5.5 7.82843 6.17157 8.5 7 8.5C7.82843 8.5 8.5 7.82843 8.5 7C8.5 6.17157 7.82843 5.5 7 5.5C6.17157 5.5 5.5 6.17157 5.5 7Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">404 - Page Not Found</h1>
                    <p className="text-xl leading-relaxed mb-8">
                        Oops! Looks like you've wandered off the map. The page you're looking for doesn't exist or has
                        been moved. But don't worry, you're still in the right place for discovering my work.
                    </p>
                    <p className="text-lg mb-6">Let's get you back on track:</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                        {buttons.map((button, index) => (
                            <a
                                key={index}
                                href={button.href}
                                className={`${button.bgClass} ${button.textClass} font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg flex items-center gap-2`}
                            >
                                {button.icon}
                                {button.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-[100%] sm:max-w-[800px] px-4">
                    <h3 className="text-center text-white text-xl font-medium mb-6">Recent Work</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {projects.map((item) => (
                            <a
                                key={item}
                                href="/portfolio"
                                className="group bg-[#2A3842] overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:shadow-[#4ECDC4]/20"
                            >
                                <div className="h-36 bg-gradient-to-br from-[#4ECDC4]/80 to-[#2A3842] flex items-center justify-center">
                                    <FaArrowRight className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <div className="p-3">
                                    <h3 className="text-white font-medium mb-1 group-hover:text-[#4ECDC4] transition-colors duration-300">
                                        Project {item}
                                    </h3>
                                    <p className="text-sm text-[#D1D9E6]/70">Category</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component;
