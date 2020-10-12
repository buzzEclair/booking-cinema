import React from "react";
import DatePicker from "../Components/Booking/DatePicker";
import TimeTable from "../Components/Booking/TimeTable";
import "../Scss/Booking.scss";
import poster from "../Assets/poster.jpg";
import MovieTheater from "../Components/Booking/MovieTheater";
import Ticket from "../Components/Booking/Ticket";

const Booking = () => {
  return (
    <>
      <div className="content" style={{ background: "rgb(20, 20, 20)" }}>
        <div className="content-center">
          <div className="booking">
            <div className="left-part">
              <DatePicker />
              <TimeTable />
              <div className="info-movie">
                <img src={poster} alt="" />
              </div>
            </div>
            <div className="center-part">
              <MovieTheater />
            </div>
            <div className="right-part">
              <Ticket />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
