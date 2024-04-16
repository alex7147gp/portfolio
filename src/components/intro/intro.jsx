import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import {useEffect, useRef} from 'react'




const Intro = () => {

  const  textRef = useRef();

  useEffect(()=>{
     init(textRef.current, {
       backDelay:  1500, 
       showCursor: true,
       strings: ['Developer', 'Designer', 'Content Creator' ] 
     })
  },[])

	return(
      <div className='intro' id='intro'>
        <div className='left'>
          <div className='imgContainer'>
              <img src="/assets/man.png" />
          </div>
        </div>
        <div className='right'>
          <div className='wrapper'>
            <h2>Hi There, I'm</h2>
            <h1>John Cedillo Calle</h1>  
            <h3>FreeLance <spam ref={textRef}></spam></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" />
          </a>
        </div>
      </div>
    )
}

export default Intro 