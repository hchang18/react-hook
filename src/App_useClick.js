import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  
  const element = useRef();

  // useEffect works when componentDidMount 
  useEffect(() => {
    
    // when componentDidMount, this will only happen once because there's no dependency
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // theoretically, we should clean up after the event
    // we are returning a function and this function will be called when componentWillUnMount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); // no dependency []
  return element; 
} 

const App = () => {

  // way to select any part of our components
  // equivalent to "getElementById"
  const potato = useRef(); 
  // setTimeout(() => console.log(potato), 5000);
  // the problem arises when the code executes before mounting
  // below makes sure that mounting happens first then setTimeout focus
  useEffect(() => { setTimeout(() => potato.current.focus(), 5000) });
  

  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <input ref={potato} placeholder="la" />
    </div>
  );
};


export default App;