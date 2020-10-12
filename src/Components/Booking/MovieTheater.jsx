import React, { useContext, useState } from "react";
import BookingContext from "../../Contexts/BookingContext";
import Seats from "./Seats";
import screen from "../../Assets/screen.png";

const MovieTheater = () => {
  const { booking, setBooking } = useContext(BookingContext);
  const [selectedSeat, setSelectedSeat] = useState([]);

  const theater = [
    {
      ligne: [
        { seat: "a0", available: true },
        { seat: "a1", available: true },
        { seat: "a2", available: true },
        { seat: "a3", available: false },
        { seat: "a4", available: false },
        { seat: "a5", available: true },
        { seat: "a6", available: true },
        { seat: "a7", available: true },
        { seat: "a8", available: true },
        { seat: "a9", available: true },
        { seat: "a10", available: false },
        { seat: "a11", available: true },
        { seat: "a12", available: true },
        { seat: "a13", available: true }
      ]
    },
    {
      ligne: [
        { seat: "b0", available: true },
        { seat: "b1", available: true },
        { seat: "b2", available: true },
        { seat: "b3", available: true },
        { seat: "b4", available: true },
        { seat: "b5", available: true },
        { seat: "b6", available: true },
        { seat: "b7", available: true },
        { seat: "b8", available: true },
        { seat: "b9", available: true },
        { seat: "b10", available: true },
        { seat: "b11", available: true },
        { seat: "b12", available: true },
        { seat: "b13", available: true },
        { seat: "b14", available: true },
        { seat: "b15", available: true }
      ]
    },
    {
      ligne: [
        { seat: "c0", available: true },
        { seat: "c1", available: true },
        { seat: "c2", available: true },
        { seat: "c3", available: true },
        { seat: "c4", available: true },
        { seat: "c5", available: true },
        { seat: "c6", available: true },
        { seat: "c7", available: true },
        { seat: "c8", available: true },
        { seat: "c9", available: true },
        { seat: "c10", available: true },
        { seat: "c11", available: true },
        { seat: "c12", available: true },
        { seat: "c13", available: true },
        { seat: "c14", available: true },
        { seat: "c15", available: true }
      ]
    },
    {
      ligne: [
        { seat: "d0", available: true },
        { seat: "d1", available: true },
        { seat: "d2", available: false },
        { seat: "d3", available: false },
        { seat: "d4", available: true },
        { seat: "d5", available: true },
        { seat: "d6", available: true },
        { seat: "d7", available: true },
        { seat: "d8", available: true },
        { seat: "d9", available: true },
        { seat: "d10", available: true },
        { seat: "d11", available: true },
        { seat: "d12", available: true },
        { seat: "d13", available: true },
        { seat: "d14", available: true },
        { seat: "d15", available: true },
        { seat: "d16", available: true },
        { seat: "d17", available: true },
        { seat: "d18", available: true }
      ]
    },
    {
      ligne: [
        { seat: "e0", available: true },
        { seat: "e1", available: true },
        { seat: "e2", available: true },
        { seat: "e3", available: true },
        { seat: "e4", available: true },
        { seat: "e5", available: true },
        { seat: "e6", available: true },
        { seat: "e7", available: true },
        { seat: "e8", available: true },
        { seat: "e9", available: true },
        { seat: "e10", available: true },
        { seat: "e11", available: true },
        { seat: "e12", available: true },
        { seat: "e13", available: true },
        { seat: "e14", available: true },
        { seat: "e15", available: true },
        { seat: "e16", available: true },
        { seat: "e17", available: true },
        { seat: "e18", available: true }
      ]
    },
    {
      ligne: [
        { seat: "f0", available: true },
        { seat: "f1", available: true },
        { seat: "f2", available: true },
        { seat: "f3", available: true },
        { seat: "f4", available: true },
        { seat: "f5", available: true },
        { seat: "f6", available: true },
        { seat: "f7", available: true },
        { seat: "f8", available: true },
        { seat: "f9", available: true },
        { seat: "f10", available: true },
        { seat: "f11", available: true },
        { seat: "f12", available: true },
        { seat: "f13", available: true },
        { seat: "f14", available: true },
        { seat: "f15", available: true },
        { seat: "f16", available: true },
        { seat: "f17", available: true },
        { seat: "f18", available: true }
      ]
    },
    {
      ligne: [
        { seat: "g0", available: true },
        { seat: "g1", available: true },
        { seat: "g2", available: true },
        { seat: "g3", available: true },
        { seat: "g4", available: true },
        { seat: "g5", available: true },
        { seat: "g6", available: true },
        { seat: "g7", available: true },
        { seat: "g8", available: true },
        { seat: "g9", available: true },
        { seat: "g10", available: true },
        { seat: "g11", available: true },
        { seat: "g12", available: true },
        { seat: "g13", available: false },
        { seat: "g14", available: true },
        { seat: "g15", available: true },
        { seat: "g16", available: true },
        { seat: "g17", available: true },
        { seat: "g18", available: true }
      ]
    },
    {
      ligne: [
        { seat: "h0", available: true },
        { seat: "h1", available: true },
        { seat: "h2", available: false },
        { seat: "h3", available: false },
        { seat: "h4", available: true },
        { seat: "h5", available: true },
        { seat: "h6", available: true },
        { seat: "h7", available: true },
        { seat: "h8", available: true },
        { seat: "h9", available: true },
        { seat: "h10", available: true },
        { seat: "h11", available: true },
        { seat: "h12", available: true },
        { seat: "h13", available: true }
      ]
    },
    {
      ligne: [
        { seat: "i0", available: true },
        { seat: "i1", available: true },
        { seat: "i2", available: true },
        { seat: "i3", available: false },
        { seat: "i4", available: false },
        { seat: "i5", available: false },
        { seat: "i6", available: false },
        { seat: "i7", available: false },
        { seat: "i8", available: true },
        { seat: "i9", available: true },
        { seat: "i10", available: true },
        { seat: "i11", available: true },
        { seat: "i12", available: true },
        { seat: "i13", available: true }
      ]
    }
  ];

  const handleClick = (e, seat) => {
    const array = [...selectedSeat];
    const index = selectedSeat.indexOf(seat);

    if (array.length < 7) {
      if (e.currentTarget.classList.contains("active")) {
        e.currentTarget.classList.remove("active");
      } else {
        e.currentTarget.classList.add("active");
      }
      if (index > -1) {
        array.splice(index, 1);
      } else {
        array.push(seat);
      }
      setSelectedSeat(array);
      setBooking({ ...booking, selectedSeat: array });
    } else if (array.length === 7) {
      e.currentTarget.classList.remove("active");
      if (index > -1) {
        array.splice(index, 1);
      } else {
        array.push(seat);
      }
      setSelectedSeat(array);
      setBooking({ ...booking, selectedSeat: array });
    }
  };

  return (
    <>
      <div className="movie-theater">
        <img src={screen} className="screen" alt="" />
        <div className="places">
          {theater.map((ligne, index) => (
            <div key={index} className="lignes">
              {ligne.ligne.map((seat) => (
                <Seats
                  key={seat.seat}
                  onClick={(e) => handleClick(e, seat.seat)}
                  available={seat.available}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieTheater;
