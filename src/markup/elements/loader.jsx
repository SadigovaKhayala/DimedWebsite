import React , {useState, useEffect} from 'react';
import '../../scss/loader.scss'; // Create a corresponding CSS file

const Loader = () => {

  return (
  <div className="LoaderMain">
      <div className="loader">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="-466.4 259.6 280.2 47.3"
      enableBackground="new -466.4 259.6 280.2 47.3"
      xmlSpace="preserve"
    >
      <polyline
        className="animation"
        points="-465.4,281 -436,281 -418.9,281 -423.9,281 -363.2,281 -355.2,269 -345.2,303 -335.2,263 -325.2,291 -319.2,281 -187.2,281"
      ></polyline>
    </svg>
  </div>
  </div>
  

  );
};

export default Loader;

