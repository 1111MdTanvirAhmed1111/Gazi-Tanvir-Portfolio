import { Geist, Geist_Mono , Poppins, Roboto , Orbitron, Open_Sans, Lato,  } from "next/font/google";
import "./globals.css";
import { Navbar } from './../components/Navbar';
import MouseFollowClient from './../components/MouseFollowClient';
import Footer from '../components/Home/Footer';


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
  description: "Generated by create next app",
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
        className={`${geistSans.variable} ${openSans.variable} ${lato.variable}  ${orbitron.variable}  ${geistMono.variable} ${poppins.variable} ${roboto.variable} antialiased`}
      >
        <div className="bg-[#1a1e23]">
           <MouseFollowClient/>
        <Navbar/>
        <div className="max-w-[90%]  mx-auto">
        {children}
        </div>
    <Footer/>
    </div>
      </body>
    </html>
  );
}
