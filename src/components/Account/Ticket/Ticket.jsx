import React from "react";
import css from "./Ticket.module.css";
import title from "./img/title.png";
import altName from "./img/altName.png";
import handStart from "./img/handStart.png";
import handEnd from "./img/handEnd.png";
import { Col, Row } from "react-bootstrap";

const Ticket = (props) => {
  return (
    <>
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
          <Row className={css.infoFlight}>
            <Col>
              <h3>Passenger</h3>
              <span>{props.dataUser.user.name}</span>
            </Col>
            <Col>
              <h3>Gate</h3>
              <span>23A</span>
            </Col>
            <Col className="mr-2">
              <h3>Departure</h3>
              <span>{props.time}</span>
              <span>{props.date}</span>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Ticket;
