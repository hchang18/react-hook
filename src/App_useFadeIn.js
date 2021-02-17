import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

// include animations in hook

const useFadeIn = (duration = 1, delay = 0) => {

  const element = useRef(); 
  
  useEffect(() => {
    if (element.current) { 
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  
  return { ref: element, style: {opacity:0}};
}


const App = () => {

  const fadeInH1 = useFadeIn(5, 1);
  const fadeInP = useFadeIn(3, 2);

  return (
    <div className="App">
      <h1 {...fadeInH1} >Hello there!!</h1>
      <p {...fadeInP}>lorem ipsum ... </p>
    </div>
  )
}
 
export default App; 