import React, { useState, useEffect} from "react";

const useNetwork = (onChange) => {
  
  const [status, setStatus] = useState(navigator.onLine || true);
  
  const handleChange = () => {
    if (onChange && typeof onChange === "function") {
      // we are going to execute the function on navigator.onLine.. 
      onChange(navigator.onLine); 
     }
    setStatus(navigator.onLine);
  };

  useEffect(() => { 
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []);
  
  
  return status;
}


const App = () => {

  const handleNetworkChange = isOnline => {
    console.log(isOnline? "We just went online" : "We are offline");
  }

  const isOnline = useNetwork(handleNetworkChange); 
  return (
      <div className="App">
        <h1>{ isOnline? "Online" : "Offline"}</h1>
      </div>
  )
}
 
export default App; 