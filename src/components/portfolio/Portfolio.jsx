import React from 'react'
import './Portfolio.scss'
import list from '../../util/protfolio.json';
import {Fectured, Webapp, Mobileapp, Desing, Branding} from '../../util/data.jsx';
import PortfolioList from './PortfolioList' 
import {useState, useEffect} from 'react' 


const Portfolio = () => {

  const port =  list
  

  const [select, setSelect] = useState(port[0].id)

  const [data, setData] = useState([])
  
  useEffect(()=>{
    switch(select){
     case 'Fectured':
      setData(Fectured);
      break;
     case 'Web App':  
      setData(Webapp);  
      break;
     case 'Mobile App': 
      setData(Mobileapp);
      break;
     case 'Desing': 
      setData(Desing);
      break;
     case 'Branding': 
      setData(Branding);
      break;
      default:
      setData(Fectured) 
    }

  }
    , [select])
	return(
      <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul> 
          {port.map(item=> 
          <PortfolioList title={item.title} 
           active={select === item.id} 
           setSelect={setSelect}
           id={item.id}
          />
          )}
        </ul>
        <div className='container'>
            {data.map(item=>
              <div className='item'>
                <img src={item.img} />
                <h3>{item.title}</h3>
              </div>  
            )}  
        </div>
      </div>
    )
}

export default Portfolio 