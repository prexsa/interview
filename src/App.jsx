import { useState } from "react";
// import Accordian from "./components/accordian/index.jsx";
// import RandomColors from "./components/random-colors/index.jsx";
// import StarRating from "./components/star-rating/index.jsx";
// import ImageSlider from "./components/image-slider/index.jsx";
// import LoadMore from "./components/load-more/index.jsx";
// import TreeView from "./components/tree-view/index.jsx";
import QRCode from "./components/qr-code/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QRCode />
    </>
  );
}

export default App;
