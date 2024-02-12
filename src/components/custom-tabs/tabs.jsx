import React, { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnClick = (index) => {
    setCurrentIndex(index);
    onChange(index);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentIndex === index ? "active" : ""}`}
            key={tabItem.label}
            onClick={() => handleOnClick(index)}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentIndex] && tabsContent[currentIndex].content}
      </div>
    </div>
  );
}
