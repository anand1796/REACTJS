import React, { useState, useEffect } from "react";
import "./App.css";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // componentDidMount and componentDidUpdate combined
    console.log("Component mounted or updated");
    return () => {
      // componentWillUnmount
      console.log("Component will unmount");
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => (count ? setCount(count - 1) : count)}>
        decrement
      </button>
    </div>
  );
}

export default MyComponent;
