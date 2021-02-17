import React, { useState, useEffect } from "react";
import "./styles.css";

// useEffect works like didMount 

const App = () => {
  const sayHello = () => console.log("Hello");

  // it prints out hello anytime buttons are clicked
  // useEffect(() => {
  //   sayHello();
  // })
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  // it prints out hello anytime buttons are clicked
  // useEffect(() => {
  //   sayHello();
  // })
  useEffect(sayHello,);
  // hello is printed out only once at the beginning
  // if the dependency is empty []
  useEffect(sayHello, []);
  // hello only if number is updated 
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={ () => setAnumber(aNumber + 1)}>{ aNumber}</button>
    </div>
  );
};


export default App;