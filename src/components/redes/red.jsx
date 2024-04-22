import React  from 'react';
import './red.scss';
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const Red = () => {
	return(
      <div className="container-1">
        <div className="wrapper">
         <div className="slider-1">
          <div className="item-1">
           <a href='#'><img className="img-1" src={youtube} alt=""/></a>
          </div>
          <div className="item-1">
           <a href='#'><img className="img-1" src={linkedin} alt=""/></a>
          </div>
          <div className="item-1">
           <a href='#'><img className="img-1" src={twitter} alt=""/></a>
          </div>
         </div> 
        </div>
      </div>
	)
}

export default Red;