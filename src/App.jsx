import { useState } from "react";
// import Accordian from "./components/accordian/index.jsx";
// import RandomColors from "./components/random-colors/index.jsx";
import StarRating from "./components/star-rating/index.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StarRating numOfStars={10} />
    </>
  );
}

export default App;
