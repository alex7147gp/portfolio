import React from 'react'
import './PortfolioList.scss'


const PortfolioList = ({ id, title, active, setSelect}) => {

	return(
      <li className={active ? 'portfolioList active' : 'portfolioList'} 
        onClick={()=> setSelect(id)}>
        {title}
      </li>
    )
}

export default PortfolioList