import React from 'react'
import './Works.scss'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {useState} from 'react'
import list from '../../util/proyect.json';

const Works = () => {

  const proyect = list;

  const [container, setContainer] = useState(0)
  const handeClick = (direction)=>{
    
    const position = (proyect.length - 1);

    if(direction === 'left'){
      setContainer(container > 0 ? container - 1 : 0)
      console.log(position)
      
    }  
    else{
      setContainer(container < position ?container + 1 : position )
      console.log(position)
    }
  }



	return(
      <div className='works' id='works'>         
        <div className='arrowLeft' direction = 'left' onClick={()=>handeClick('left')}>
          <img src='assets/arrow.png' alt=''/>
        </div>                                
        <div className='sliders' container={container} style={{transform : `translateX(${container  * -100}vw)`}}>
          {proyect.map(items=>
          <div className='container'>
            <div className='items'>
              <div className='left'>
                 <div className='imgContainer'>
                    <img src='assets/mobile.png'alt='' />
                  </div>
                 <h3>{items.title}</h3>
                 <span>{items.desc}</span>
                 <a href={items.link}>Proyects</a>
              </div>
              <div className='right' >
                <img src={items.img} alt=''></img>
              </div> 
            </div>
          </div>
          )}
        </div> 
        <div className='arrowRight' direction='rigth' onClick={()=>handeClick('right')}>
           <img src='assets/arrow.png' alt=''/> 
        </div>     
      </div>
    )
}

export default Works 