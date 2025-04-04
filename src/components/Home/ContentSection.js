
// components/ContentSection.js
import { Poppins, Roboto, Lobster, Josefin_Sans, Alike, Playwrite_IT_Moderna } from 'next/font/google';
import { Image } from 'next/image';

import TypeWriter from '@/components/Home/TypeWriter'

const alike = Alike({
  weight: '400',
  subsets: ['latin'],
});

const josefin_sans = Josefin_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});
const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});
const mordena = Playwrite_IT_Moderna({
  weight: '400',
  subsets: ['latin'],
});
const ContentSection = () => {
  return (
    <div className="w-full lg:w-[60%] max-lg:text-center px-4 py-2 mx-auto">
      <div className="text-cyan-300 text-xs sm:text-sm mb-1">&lt;h1&gt;</div>
      <div className={`${josefin_sans.className} text-6xl sm:text-4xl lg:text-5xl font-bold mb-1 leading-tight`}>
        <span className='text-3xl'>
        Hey
        </span>
        <br />
        I'm <span className={`text-cyan-300 ${lobster.className}`}>Gazi Tanvir Ahmed</span>,<br />
        <div className={`${mordena.className} text-2xl`} >
      <TypeWriter/>
      </div>
      </div>
      <div className="text-cyan-300 text-xs sm:text-sm mb-4">&lt;/h1&gt;</div>

      <div className="text-cyan-300 text-xs sm:text-sm mb-1">&lt;p&gt;</div>
      <p className={`${alike.className} text-xs sm:text-sm leading-relaxed text-gray-300 mb-1`}>
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
