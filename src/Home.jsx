import Contact from './components/contact/Contact.jsx';
import Intro from "./components/intro/intro";
import AcercaMi from "./components/AcercaMi/AcercaMi.jsx";
import Topbar from './components/Top/Topbar.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Works from './components/works/Works.jsx';
import './Home.scss'
import Menu from './components/menu/Menu.jsx';
import Red from './components/redes/red.jsx';
import ProyectosD from "./components/proyectosD/ProyectosD.jsx"

import {useState} from 'react' 

function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="home">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className={'slider ' + (menuOpen && 'active')} onClick={()=>setMenuOpen(!menuOpen)}></div>
       <div className={'sections ' + (menuOpen && 'active')}>
          <Intro/>
          <AcercaMi/>
          <ProyectosD/> 
          <Works/>
          <Testimonials/>
          <Contact/>  
       </div>
    </div>
  );
}

export default Home;
