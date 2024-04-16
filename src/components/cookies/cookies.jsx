import React from 'react';
import { useState } from 'react';
import './cookies.scss';
const Cookies = () => {
    
    const [cook, setCook] = useState(false);

    const handleCook = (e) => {
      e.preventDefault();
      setCook(true);
      console.log(cook);
    }

	return(
      <div className={"cookies "+ (cook && "active")}>
      	<div className="container-2">
      	  <h1 className="title-2">Hello Cookies</h1>
      	  <div className="wrapper-2">
      	    <p>The site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy</p>
      	    <div clasName="container-button">
      	      <button className="button" onClick={handleCook}>ACCEPT COOKIES</button>
      	    </div>
      	  </div>
      	</div>  
      </div>
	)
}

export default Cookies;