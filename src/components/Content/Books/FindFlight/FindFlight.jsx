import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
    <Container>
    <Row className={css.ticket}>
      <Col className={css.price} lg={4} md={5} sm={12} xs={12}>
        <div className={css.econom}>
          <Button variant="primary" onClick={sendInfo}>Econom</Button>
          <span>₴{props.price}</span>
        </div>
        <div className={css.business}>
          <Button variant="warning" onClick={sendInfo}>Business</Button>
          <span>₴{props.price*3}</span>
        </div>
      </Col>
      <Col className={css.flightData} lg={8} md={7} sm={12} xs={12}>
        <Row className="text-center mt-4 align-items-baseline">
          <Col className="text-uppercase" lg={4} md={4} sm={4} xs={4}>
            <h5>{props.from}</h5>
            <h5>{props.to}</h5>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <p className="font-weight-bold m-0">Departure:</p>
            <div>
              <span>{props.time}</span> {props.date}
            </div>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <p className="font-weight-bold m-0">Seats:</p>
            <div>{props.count}</div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  );
};

export default FindFlight;
