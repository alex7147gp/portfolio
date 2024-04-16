import React from 'react'
import './topbar.scss'
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import '../../Global.scss';
 


const Topbar = ({menuOpen, setMenuOpen}) =>{

	return(
      <div className={'topbar ' + (menuOpen && 'active')}>
          <div className='wraper'>
            <div className='left'>
              <a href="#contact" className='logo' style={{color:`${menuOpen === true ? 'white':'#171e40'}`}}>Center.com</a>            
              <div className='itemContainer'>
                <PersonIcon className='icon'/>
                <spam>+0878292827</spam>
              </div>
               <div className='itemContainer'>
                <MailIcon className='icon'/>
                <spam>johncedillo77@gmail.com</spam>
              </div>             
            </div>     
            <div className='right'>
                  <div className='salsa'>
                        <spam className='punto1' style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
                        <spam className='punto2' style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
                        <spam className='punto3' style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
                  </div>        
                  <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <spam className='linea1' style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam >
                        <spam className='linea2' style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
                        <spam className='linea3' style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
                  </div>          
            </div>
          </div> 
      </div>
    )
}

export default Topbar