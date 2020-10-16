import React from "react";
import css from "./Ticket.module.css";
import title from "./img/title.png";
import altName from "./img/altName.png";
import handStart from "./img/handStart.png";
import handEnd from "./img/handEnd.png";

const Ticket = (props) => {
  return (
    <div className={css.ticket}>
      <div className={css.banner}
      onMouseEnter={() => props.changeIcon(!props.hoverOnTicket)}
      onMouseLeave={() => props.changeIcon(!props.hoverOnTicket)}
      >
        <img
          src={props.hoverOnTicket ? handEnd : handStart}
          className={props.hoverOnTicket ? css.bannerImageEnd : css.bannerImageStart}
        />
        <div className={css.bannerCntent}>
          <div className={css.title}>
            <img src={title} />
            <h1>Air ticket</h1>
          </div>
          <div className={css.altName}>
            <span className={css.from}>{props?.from}</span>
            <img src={altName} />
            <span className={css.to}>{props.to}</span>
          </div>
          <div className={css.infoFlight}>
            <div className={css.passenger}>
              <h3>Passenger</h3>
              <span>{props.dataUser.user.name}</span>
            </div>
            <div className={css.gate}>
              <h3>Gate</h3>
              <span>23A</span>
            </div>
            <div className={css.departure}>
              <h3>Departure</h3>
              <span>{props.time}</span>
              <span>{props.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
