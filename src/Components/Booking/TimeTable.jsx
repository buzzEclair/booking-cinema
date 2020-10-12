import React, { useContext, useEffect, useState } from "react";
import BookingContext from "../../Contexts/BookingContext";

const TimeTable = () => {
  const [times] = useState(["13:00", "15:00", "17:00", "19:00", "21:00"]);
  const { booking, setBooking } = useContext(BookingContext);

  const handleClick = (e, time) => {
    const allDate = document.getElementsByClassName("times-block");
    for (let i = 0; i < allDate.length; i++) {
      allDate[i].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    setBooking({ ...booking, timeTable: time });
  };

  useEffect(() => {
    document.getElementsByClassName("times-block")[0].classList.add("active");
    const day = new Date();
    const nextDay = new Date(day);
    const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dDate = new Date(nextDay).getDate();
    const dDay = daysInWeek[new Date(nextDay).getDay()];
    setBooking({ ...booking, date: [dDate, dDay] });
    setBooking({
      ...booking,
      timeTable: times[0],
      date: [dDate, dDay],
      selectedSeat: []
    });
  }, []);

  return (
    <>
      <div className="content-time-table content-block">
        <h2>Timetable :</h2>
        <div className="times">
          {times.map((time, index) => (
            <div
              onClick={(event) => handleClick(event, time)}
              key={index}
              className="times-block"
            >
              {time}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeTable;
