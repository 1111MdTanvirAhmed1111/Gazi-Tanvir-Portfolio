
// components/ContentSection.js
import { Poppins, Roboto } from 'next/font/google';
import { Image } from 'next/image';


const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});

const ContentSection = () => {
  return (
    <div className="w-full lg:w-[60%] max-lg:text-center px-4 py-2 mx-auto">
      <div className="text-cyan-300 text-xs sm:text-sm mb-1">&lt;h1&gt;</div>
      <p className={`${poppins.className} text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 leading-tight`}>
        Hey
        <br />
        I'm <span className="text-cyan-300">Gazi Tanvir Ahmed</span>,<br />
        Full-Stack Developer
      </p>
      <div className="text-cyan-300 text-xs sm:text-sm mb-4">&lt;/h1&gt;</div>

      <div className="text-cyan-300 text-xs sm:text-sm mb-1">&lt;p&gt;</div>
      <p className={`${roboto.className} text-xs sm:text-sm leading-relaxed text-gray-300 mb-1`}>
        I help businesses grow by crafting amazing web experiences. If you're looking for a
        developer that likes to get stuff done,
      </p>
      <div className="text-cyan-300 text-xs sm:text-sm mb-4">&lt;/p&gt;</div>

      <button className={`${poppins.className} bg-transparent text-cyan-300 border border-cyan-300 px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-cyan-900/30 hover:transform hover:translate-y-[-2px]`}>
        Let's Talk
        <span className="material-symbols-outlined text-sm">mail</span>
      </button>
    </div>
  );
};


export default ContentSection;
