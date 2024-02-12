import React, { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";

export default function useOutsideClick() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>Click outside container</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
