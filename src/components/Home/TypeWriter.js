'use client'
import { Typewriter } from 'react-simple-typewriter';
import { Josefin_Sans } from "next/font/google";


const josefin_sans = Josefin_Sans({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
  });
function TypeWriter() {
  return (
    <Typewriter
    className={josefin_sans.className}
    words={['Full Stack Web Developer', '3D Artist', 'NextJs Dev!']}
    loop={Infinity}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
  )
}

export default TypeWriter
