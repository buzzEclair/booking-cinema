import React, { useState } from "react";
import bg from "../Assets/lalaland.jpg";
import "../Scss/Home.scss";
import { GoCalendar } from "react-icons/go";
import { MdTimer } from "react-icons/md";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";

const Home = () => {
  const [bgStyle] = useState({
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center center",
    backgroundReapeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  });

  const [data] = useState({
    id: 1,
    title: "la la land",
    cats: [{ name: "Romance" }, { name: "Drama" }],
    year: "2019",
    duration: "128",
    director: "Damien Chazelle",
    stars: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
    summary_text:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    rate: 4.5,
    code: "PG-13"
  });

  return (
    <>
      <div className="content" style={bgStyle}>
        <div className="overlay">
          <div className="content-center">
            <div className="left-info">
              <h2>{data.title}</h2>
              <div>
                {data.cats.map((cat, index) => (
                  <p className="cats" key={index}>
                    {cat.name}
                    {index === 0 && ","}
                  </p>
                ))}
                <p className="year">
                  <GoCalendar /> {data.year}
                </p>
                <p className="duration">
                  <MdTimer />
                  {data.duration} min
                </p>
              </div>
              <div>
                <Rating rate={data.rate} />
                <p className="code">{data.code}</p>
              </div>
              <Link to={"/booking/" + data.id} className="booking">
                Book
              </Link>
            </div>
            <div className="right-info">
              <p>
                {data.director} : <span className="yellow">Director</span>
              </p>
              <p className="stars">
                {data.stars.map((star, index) => (
                  <span key={index}>{star}</span>
                ))}{" "}
                : <span className="yellow">Stars</span>
              </p>
              <p className="summary">{data.summary_text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
