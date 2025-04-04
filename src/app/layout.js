
import { Geist, Geist_Mono , Poppins, Roboto , Orbitron, Open_Sans, Lato,  } from "next/font/google";
import "./globals.css";

import { Navbar } from './../components/Navbar';
import MouseFollowClient from './../components/MouseFollowClient';
import Footer from '../components/Home/Footer';
import { Suspense } from "react";

import { HeroUiProvider } from "@/Providers/HeroUiProvider";

import StartLoadProvider from './../Providers/StartLoadProvider';
import Loading from "./loading";


const orbitron = Orbitron({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata = {
  title: "Md Tanvir Ahmed",
  description: "Hi Im Gazi Tanvir Ahmed. A Full Stack Developer. I Love to Code. ",
  icons: {
    icon: '/logo.ico', // Path to the favicon file in the public directory
  },
};

export const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
export const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })

export default function RootLayout({ children }) {




  return (
    <html lang="en">
      <meta name="msvalidate.01" content="AF1BD6501856D238A7FD2A97BB6FB7DD" />
      <body
        className={`${geistSans.variable} overflow-x-hidden ${openSans.variable} ${lato.variable}  ${orbitron.variable}  ${geistMono.variable} ${poppins.variable} ${roboto.variable} antialiased relative`}>
        <div className="fixed inset-0 -z-10 bg-[#00516b] bg-[url('/design.svg')] bg-repeat opacity-20"></div>
        <div>


           <MouseFollowClient/>
        <Navbar/>

        
        <HeroUiProvider>
        <div className=" mx-auto">
          <Suspense fallback={<Loading/>}>
          <div className="bg-[#00516b] squre" style={
            {
              backgroundImage: "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e')",
              backgroundRepeat: "repeat",
              backgroundSize: "10px 10px",
              backgroundPosition: "0 0",
              backgroundAttachment: "fixed",

            }
          }>



        
      
          {children}
        


          </div>
  
        </Suspense> 
        </div>
        </HeroUiProvider>



    <Footer/>
  
    </div>
   
      </body>
    </html>
  );
}
