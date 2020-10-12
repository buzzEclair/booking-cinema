import React, { useContext, useEffect, useState } from "react";
import BookingContext from "../../Contexts/BookingContext";

const DatePicker = () => {
  const [dates, setDates] = useState([{}]);
  const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const { booking, setBooking } = useContext(BookingContext);
  const date = () => {
    const array = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date();
      const nextDay = new Date(day);
      const transform = nextDay.setDate(day.getDate() + i);
      if (i === 0) {
        const dDate = new Date(transform).getDate();
        const dDay = daysInWeek[new Date(transform).getDay()];
        setBooking({ ...booking, date: [dDate, dDay] });
      }
      array.push({
        date: new Date(transform).getDate(),
        day: new Date(transform).getDay()
      });
    }
    setDates(array);
  };

  const handleClick = (e, dDate, dDay) => {
    const allDate = document.getElementsByClassName("date");
    for (let i = 0; i < allDate.length; i++) {
      allDate[i].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    setBooking({ ...booking, date: [dDate, dDay] });
  };

  useEffect(() => {
    date();
    setBooking({ ...booking, date: ["00", "00"] });
    document.getElementsByClassName("date")[0].classList.add("active");
  }, []);

  return (
    <>
      <div className="content-date-picker content-block">
        <h2>Select a date :</h2>
        <div className="date-picker">
          {dates.map((date, index) => (
            <div
              onClick={(event) =>
                handleClick(event, date.date, daysInWeek[date.day])
              }
              className="date"
              key={index}
            >
              <p className="date-number">{("0" + date.date).slice(-2)}</p>
              <p className="date-day">{daysInWeek[date.day]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DatePicker;
