
import { Header } from '../components/Home/Header';
import About from '../components/Home/About';

import TechBar from '@/components/Home/TechBar';
import Sidebar from '@/components/Home/Sidebar';
import { Contact } from '../components/Home/Contact';
import { Skills } from '../components/Home/Skills';
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
