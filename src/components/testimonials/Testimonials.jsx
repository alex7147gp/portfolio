import React from 'react'
import './Testimonials.scss'
import comentarios from '../../util/testimonials.json';


const Testimonials = () => {

  const list = comentarios;

	return(
      <div className='testimonials' id='testimonials'>
          <h1 className='title'>Testimonials</h1>
          <div className='container'>
            {list.map(items=>
            <div className='items'>
              <div className='user'>
                <div className='containerArrow'>
                   <img src='assets/right-arrow.png' alt='' />
                </div>
                <div className='containerUser'>
                   <img src={items.img} alt='' />
                </div>
                <div className='containerRed'>
                   <img src={items.imgRed} alt='' />
                </div>
              </div>
              <div className='desc'>
                <div className='containerDesc'>  
                  <span>
                   {items.desc}
                  </span>
                </div>  
              </div>
              <div className='client'>
                <div className='containerClient'>
                  <h2 className='name'>
                    {items.name}
                  </h2>
                  <span className='speciality'>
                    {items.speciality}
                  </span>
                </div>
              </div>
            </div>
            )}
          </div>
      </div>
  )
}

export default Testimonials 