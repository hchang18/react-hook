import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useConfirm = (message, callback, rejection) => {
  if (!callback && typeof callback !== "function") {
    return;
  }

  if (!rejection && typeof rejection !== "function") { 
    return;
  }

  const confirmAction = () => { 
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  }

  return confirmAction;
}

const App = () => {
  const deleteWord = () => console.log("Deleting the word...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

  return (

    <div className="App">
      <h1>Hi</h1>
      <button onClick={ confirmDelete }>Delete the word</button>
    </div>
  );
};


export default App;
