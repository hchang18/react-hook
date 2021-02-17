import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useBeforeLeave = onBefore => {

  const handle = (event) => {
    // console.log("leaving");
    // onBefore();
    // console.log(event);
    // only appears when you go up
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore(); 
     }
    
   }

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    // if component Unmount, cleanup function is called..
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
}

const App = () => {

  const begForLife = () => console.log("Please don't leave");

  useBeforeLeave(begForLife);

  return (
      <div className="App">
          <h1>Hi</h1>
      </div>
  )
}
 
export default App; 