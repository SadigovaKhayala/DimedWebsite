import React from 'react';
import Markup from './markup/markup';
import Loader from './markup/elements/loader';
import { useEffect, useState } from 'react';

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Fonts
import "./vendor/line-awesome/css/line-awesome.min.css";
import "./vendor/font-awesome/css/all.min.css";
import "./vendor/themify/themify-icons.css";

// StyleSheet
import './App.scss';



function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	  // Simulate loading by setting a timeout
	  const loaderTimeout = setTimeout(() => {
		setIsLoading(false);
	  }, 1200); // 3000 milliseconds (3 seconds)
  
	  // Clear the timeout if the component unmounts
	  return () => {
		clearTimeout(loaderTimeout);
	  };
	}, []); 


  
	
	return (


	


		<div className="page-wraper">
		  {isLoading ? (

        <Loader />
      ) : (
        
        <Markup />
      )}
	


		</div>
	);
}

export default App;
