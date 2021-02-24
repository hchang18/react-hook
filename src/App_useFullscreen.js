import React, { useState, useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef(); 
  const triggerFull = () => { 
    if (element.current) {
      element.current.requestFullscreen(); 
      if (callback && typeof callback === "function") { 
        callback(true);
      }
     }
  }
  const exitFull = (callback) => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
     }
   }
  return { element, triggerFull, exitFull}; 
 }

const App = () => {

  const onFullS = (isFull) => { 
    console.log(isFull ? "We are full" : "We are small");
  } 
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);

  return (
    <div className="App">
      <div ref={element}>
        <img src="https://cdn.britannica.com/16/77416-120-6D5A3D41/volcano-Mount-St-Helens-south-eruption-May-18-1980.jpg" alt="volcano" />
        <button onClick={ exitFull }>Exit fullscreen</button> 
      </div>
      <button onClick={ triggerFull }>Make fullscreen</button>
      </div>
  )
}
 
export default App; 