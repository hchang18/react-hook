import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  // const onChange = (event) => {
  //   console.log(event.target);
  // };
  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    // if length < 10, set the value, otherwise proceed
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

// functional programming way
const App = () => {
  // item and modifier function
  // const [item, setItem] = useState(1);
  // const incrementItem = () => setItem(item + 1);
  // const decrementItem = () => setItem(item - 1);
  // return (
  //   <div className="App">
  //     <h1>Hello CodeSandbox {item}</h1>
  //     <button onClick={incrementItem}> Increment </button>
  //     <button onClick={decrementItem}> Decrement </button>
  //   </div>
  // );

  // useInput
  // validator function : any function that returns true false
  // const maxLen = (value) => value.length < 10;
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* this is how you bring the value inside input tag */}
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      {/* instead, unpack name.value and name.onChange as {...name} */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

// old way
// class AppUgly extends React.Component {
//   state = {
//     item: 1
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox Ugly {item}</h1>
//         <button onClick={this.incrementItem}> Increment </button>
//         <button onClick={this.decrementItem}> Decrement </button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };

//   decrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item - 1
//       };
//     });
//   };
// }

export default App;
