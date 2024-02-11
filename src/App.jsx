import { useState } from "react";
// import Accordian from "./components/accordian/index.jsx";
import RandomColors from "./components/random-colors/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RandomColors />
    </>
  );
}

export default App;
