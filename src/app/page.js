
import { Header } from './../components/Header';
import About from './../components/About';

import TechBar from '@/components/TechBar';
import Sidebar from '@/components/Sidebar';
import { Contact } from './../components/Contact';
import { Skills } from './../components/Skills';
function page() {
  return (
    <div>
      <Sidebar/>
      <Header/>
      <TechBar/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default page
