import React from "react";
import css from "./Data.module.css";
import date from "./img/date.png";
import flight from "./img/flight.png";
import money from "./img/money.png";
import FindFlight from "../FindFlight/FindFlight";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Col, Container, Row } from "react-bootstrap";

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
      <Row>
        <Col
          lg={{ offset: 0, span: 3 }}
          md={{ offset: 0, span: 4 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
          className={css.inputData}
        >
          <Row className="align-items-center">
            <Col lg={12} md={12} sm={3} xs={3}>
              <h2>Mine ticket</h2>
            </Col>
            <Col lg={12} md={12} sm={3} xs={3}>
              <Row className={css.info}>
                <Col lg={2} md={2} sm={12} xs={12}>
                  <img src={flight} />
                </Col>
                <Col lg={8} md={8} sm={12} xs={12} className="text-capitalize">
                  {props.info[0]} {props.info.length === 0 ? "" : "-"}{" "}
                  {props.info[1]}
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} sm={3} xs={3}>
              <Row className={css.info}>
                <Col lg={2} md={2} sm={12} xs={12}>
                  <img src={date} />
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  <span>{props.info[3]}</span>
                  <span>{props.info[2]}</span>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} sm={3} xs={3}>
              <Row className={css.info}>
                <Col lg={2} md={2} sm={12} xs={12}>
                  <img src={money} />
                </Col>
                <Col lg={8} md={8} sm={12} xs={12}>
                  {props.info.length === 0 ? "" : "₴"}
                  {props.info[4]}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          lg={{ offset: 1, span: 8 }}
          md={{ offset: 1, span: 7 }}
          sm={{ span: 12 }}
          xs={{ span: 12 }}
          className={css.foundData}
        >
          <h1>{props.newFromText} - {props.newToText}</h1>
          {findElements}
        </Col>
      </Row>
      {props.info.length ? (
        <NavLink
          to="/ticket_registration"
          className="float-right clearfix mt-2"
        >
          <Button type="submit" variant="light">
            Continue
          </Button>
        </NavLink>
      ) : (
        <Button
          type="submit"
          variant="dark"
          disabled
          className="float-right clearfix mt-2"
        >
          Continue
        </Button>
      )}
    </div>
  );
};

export default Data;
