import { useState } from "react";
// import Accordian from "./components/accordian/index.jsx";
// import RandomColors from "./components/random-colors/index.jsx";
// import StarRating from "./components/star-rating/index.jsx";
import ImageSlider from "./components/image-slider/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImageSlider url={"https://picsum.photo/v2/list"} limit="10" page="1" />
    </>
  );
}

export default App;
