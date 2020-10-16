import React from "react";
import css from "./FindFlight.module.css";

const FindFlight = (props) => {
  const sendInfo = () => {
    if (props.id) {
      return props.sendInfoToTicket(
        props.from,
        props.to,
        props.date,
        props.time,
        props.price,
        props.id
      );
    }
  };
  return (
    <div className={css.find}>
      <div className={css.flightData}>
        <div className={css.cities}>
          {props.from} -> {props.to}
        </div>
        <div className={css.flightInfo}>
          <div className={css.departure}>
            <label>Departure:</label>
            <div>
              {props.time}
              <span>{props.date}</span>
            </div>
          </div>
          <div className={css.seats}>
            <label>Seats:</label>
            <div>{props.count}</div>
          </div>
        </div>
      </div>
      <div className={css.price}>
        <div className={css.econom}>
          <span>Econom</span>
          <div onClick={sendInfo}>₴{props.price}</div>
        </div>
        <div className={css.business}>
          <span>Business</span>
          <div onClick={sendInfo}>₴{props.price * 3}</div>
        </div>
      </div>
    </div>
  );
};

export default FindFlight;
