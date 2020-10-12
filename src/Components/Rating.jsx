import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rate }) => {
  const [stars, setStars] = useState([]);

  const Rating = (rate) => {
    const array = [];
    const floor = Math.floor(rate);
    for (let i = 0; i < 5; i++) {
      if (i < floor) {
        array.push(<FaStar />);
      } else if (rate % 1 !== 0 && rate > i) {
        array.push(<FaStarHalfAlt />);
      } else {
        array.push(<FaRegStar />);
      }
    }
    setStars(array);
  };

  useEffect(() => {
    Rating(rate);
  }, [rate]);

  return (
    <>
      <p className="rate">
        {stars.map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </p>
    </>
  );
};

export default Rating;
