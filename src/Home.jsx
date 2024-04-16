import Contact from './components/contact/Contact.jsx';
import Intro from "./components/intro/intro";
import Topbar from './components/Top/Topbar.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Works from './components/works/Works.jsx';
import './Home.scss'
import Menu from './components/menu/Menu.jsx';
import Red from './components/redes/red.jsx';
import Cookies from './components/cookies/cookies.jsx';

import {useState} from 'react' 

function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="home">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Cookies menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className={'slider ' + (menuOpen && 'active')} onClick={()=>setMenuOpen(!menuOpen)}></div>
       <div className={'sections ' + (menuOpen && 'active')}>
          <Intro/>
          <Portfolio/>
          <Works/>
          <Testimonials/>
          <Contact/>   
       </div>
    </div>
  );
}

export default Home;
