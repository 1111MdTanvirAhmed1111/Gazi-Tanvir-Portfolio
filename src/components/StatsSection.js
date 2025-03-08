// components/StatsSection.js
const StatsSection = () => {
    const stats = [
      { value: 4, label: 'Programming Languages' },
      { value: 6, label: 'Development Tools' },
      { value: 8, label: 'Years of Experience' },
    ];
  
    return (
      <div className="w-full lg:w-[12%] bg-gray-900 rounded-3xl p-4 flex flex-col justify-center h-fit my-auto">
        {stats.map((stat, index) => (
          <div key={index} className="mb-5 flex items-center justify-between text-sm sm:text-base">
            <span className="text-3xl sm:text-4xl font-bold text-cyan-300 flex-grow">{stat.value}</span>
            <p className="text-xs sm:text-sm text-gray-400 flex-grow text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatsSection;
  