import { useState, useEffect } from "react";

// Define useField custom hook for textField
export const useField = (initialState) => {
    const [value, setValue] = useState(initialState);
  
    const onChange = (event) => {
      setValue(event.target.value);
    };
  
    return {
      value,
      onChange,
      setValue
    };
  };

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setdebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}