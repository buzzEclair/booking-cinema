import React, { useContext } from "react";
import BookingContext from "../../Contexts/BookingContext";
import ticket from "../../Assets/ticket.png";

const Ticket = () => {
  const { booking } = useContext(BookingContext);

  const seats = booking.selectedSeat;
  console.log(seats);
  return (
    <>
      <div className="ticket">
        <div className="info">
          <h2>Tickets</h2>
          <div className="date">
            {booking.date.map((date) => (
              <span>{date}</span>
            ))}
          </div>
          <div className="timetable">{booking.timeTable}</div>
          <div className="seats-selected">
            {booking.selectedSeat.map((seat) => (
              <p>{seat} 10$</p>
            ))}
          </div>
          {booking.selectedSeat.length === 7 && (
            <span className="warning">7 tickets available by person</span>
          )}
        </div>

        <img src={ticket} alt="" />
      </div>
    </>
  );
};

export default Ticket;
