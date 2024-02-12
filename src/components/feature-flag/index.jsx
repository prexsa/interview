import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-colors";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import menus from "../tree-view/data";
import CustomTabs from "../custom-tabs/index";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  const checkEnabledFlags = (currentKey) => enabledFlags[currentKey];

  if (loading) <h1>Loading</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((compItem) =>
        checkEnabledFlags(compItem.key) ? compItem.component : null,
      )}
    </div>
  );
}
