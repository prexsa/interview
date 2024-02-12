// import Accordian from "./components/accordian/index.jsx";
// import RandomColors from "./components/random-colors/index.jsx";
// import StarRating from "./components/star-rating/index.jsx";
// import ImageSlider from "./components/image-slider/index.jsx";
// import LoadMore from "./components/load-more/index.jsx";
// import TreeView from "./components/tree-view/index.jsx";
// import QRCode from "./components/qr-code/index.jsx";
// import LightDarkMode from "./components/light-dark-mode/index.jsx";
// import ScrollIndicator from "./components/scroll-indicator/index.jsx";
// import CustomTabs from "./components/custom-tabs/index.jsx";
// import Modal from "./components/modal/index.jsx";
// import AutoComplete from "./components/autocomplete/index.jsx";
// import TicTacToe from "./components/tic-tac-toe/index.jsx";
import FeatureFlags from "./components/feature-flag/index.jsx";
import FeatureFlagsGlobalState from "./components/feature-flag/context.jsx";
import UseFetchTest from "./components/custom-hooks/useFetchTest.jsx";

function App() {
  return (
    <FeatureFlagsGlobalState>
      {/*
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      */}
      <UseFetchTest />
    </FeatureFlagsGlobalState>
  );
}

export default App;
