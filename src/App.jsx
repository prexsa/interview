import { useState } from "react";
import Accordian from "./components/accordian/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordian />
    </>
  );
}

export default App;
