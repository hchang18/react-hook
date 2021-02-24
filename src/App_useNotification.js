import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return; 
  }
  const fireNotif = () => { 
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => { 
        if (permission === "granted") { 
          new Notification(title, options);
        }
      })
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
 }

const App = () => {

  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi don't you"
  });
  return (
      <div className="App">
        <button onClick={ triggerNotif }>Hello</button>
      </div>
  )
}
 
export default App; 