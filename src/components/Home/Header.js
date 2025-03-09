// components/Header.js
import Sidebar from './Sidebar';
import ProfileCard from './ProfileCard';
import ContentSection from './ContentSection';
import StatsSection from './StatsSection';

export const Header = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full h-auto bg-gray-800 flex items-center justify-center p-8 overflow-hidden font-sans text-white">
        <Sidebar />
        <div className="flex flex-col lg:flex-row justify-between w-full max-w-[90%]">
          
          <div className="flex flex-col lg:flex-row justify-between w-full mt-[80px] space-y-8 lg:space-y-0 lg:space-x-8">
            <ProfileCard />
            <ContentSection />
            <StatsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

