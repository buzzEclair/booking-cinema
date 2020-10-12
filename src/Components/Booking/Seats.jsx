import React from "react";

const Seats = ({ onClick, available }) => {
  return (
    <>
      {!available ? (
        <div onClick={onClick} className="seats desable"></div>
      ) : (
        <div onClick={onClick} className="seats "></div>
      )}
    </>
  );
};

export default Seats;
