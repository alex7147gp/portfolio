import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import {useEffect, useRef} from 'react';
import man from "../../assets/man.png";
import down from "../../assets/down.png";


const Intro = () => {

  const  textRef = useRef();

  useEffect(()=>{
     init(textRef.current, {
       backDelay:  1500, 
       showCursor: true,
       strings: ['Frontend Web Developer', 'Website Development', 'Web Application Development' ] 
     })
  },[])

	return(
      <div className='intro' id='intro'>
        <div className='left'>
          <div className='imgContainer'>
              <img src={man} />
          </div>
        </div>
        <div className='right'>
          <div className='wrapper'>
            <h2>Hi There, I'm</h2>
            <h1>John Cedillo Calle</h1>  
            <h3>FreeLance <spam ref={textRef}></spam></h3>
          </div>
          <a href="#portfolio">
            <img src={down} />
          </a>
        </div>
      </div>
    )
}

export default Intro 