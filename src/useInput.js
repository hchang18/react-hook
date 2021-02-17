export const useInput = (initialValue, validator) => {
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