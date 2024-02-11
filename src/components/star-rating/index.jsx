import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ numOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseMove = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}
