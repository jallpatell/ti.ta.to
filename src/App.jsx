import "./App.css";
import { useState } from "react";

export default function App() {
  <div>
    <h1>Hello World</h1>
    <MyButton />
    <MyButton />
  </div>;
}

function MyButton() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
