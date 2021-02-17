import React, { useState, useEffect } from "react";
import "./styles.css";

// useEffect works like didMount 

const useTitle = (initialTitle) => { 
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title; 
  }
  // when component mounts, useEffect
  // if title updates, I'm going to use updated title
  useEffect(updateTitle, [title]);
  return setTitle;
}

const App = () => {

  const titleUpdater = useTitle("Loading...");
  // since we are returning setTitle() in useTitle 
  // titleUpdater == setTitle()
  // if we pass in "Home", the parameter will be passed into setTitle("Home")
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
};


export default App;