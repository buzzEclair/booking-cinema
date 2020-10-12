import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import BookingContext from "./Contexts/BookingContext";
import Booking from "./Pages/Booking";
import Home from "./Pages/Home";
import "./Scss/Styles.scss";

export default function App() {
  const [booking, setBooking] = useState({
    timeTable: "13:00",
    date: [],
    selectedSeat: []
  });

  return (
    <div className="App">
      <BookingContext.Provider value={{ booking, setBooking }}>
        <HashRouter>
          <Switch>
            <Route path="/booking/:id" component={Booking} />
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </BookingContext.Provider>
    </div>
  );
}
