import React, { useState, useEffect } from "react";
import MenuList from "./menu-list";
import data from "./data";
import "./styles.css";

export default function TreeView({ menus = data }) {
  return (
    <div className="tree-view-container">
      <MenuList list={data} />
    </div>
  );
}
