import React from "react";
import css from "./Data.module.css";
import date from "./img/date.png";
import flight from "./img/flight.png";
import money from "./img/money.png";
import FindFlight from "../FindFlight/FindFlight";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Data = (props) => {
  const order = () => {
    props.orderRegistration();
  };
  const orderNon = () => {
    alert("Please, take yours ticket");
  };

  const findElements = props.findFlight.map((f) => (
    <FindFlight
      key={f._id}
      id={f._id}
      count={f.count}
      from={f.from}
      to={f.to}
      date={f.date}
      time={f.time}
      price={f.price}
      sendInfoToTicket={props.sendInfoToTicket}
    />
  ));
  return (
    <div className={css.data}>
      <div className={css.wiithoutButton}>
        <div className={css.inputData}>
          <h2>Mine ticket</h2>
          <div className={css.flight}>
            <img src={flight} />
            <div>
              {props.info[0]} {props.info.length === 0 ? "" : "-"}{" "}
              {props.info[1]}
            </div>
          </div>
          <div className={css.flight}>
            <img src={date} />
            <div>
              <span>{props.info[3]}</span> {props.info[2]}
            </div>
          </div>
          <div className={css.flight}>
            <img src={money} />
            <div>
              {props.info.length === 0 ? "" : "₴"}
              {props.info[4]}
            </div>
          </div>
        </div>
        <div className={css.foundData}>
          <h1>
            {props.info[0]} {props.info.length === 0 ? "" : "-"} {props.info[1]}
          </h1>
          {findElements}
        </div>
      </div>
      <NavLink to={props.info.length === 0 ? "/books" : "/ticket_registration"}>
        <button
          className={props.info.length === 0 ? css.disableBnt : css.unableBtn}
          type="submit"
          onClick={props.info.length === 0 ? orderNon : ""}
        >
          Continue
        </button>
      </NavLink>
    </div>
  );
};

export default Data;
