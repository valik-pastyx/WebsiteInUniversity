import React from "react";
import css from "./Account.module.css";
import Ticket from "./Ticket/Ticket";
import Good from "./Good/Good";
import user from "./img/user.png";
import { Col, Container, Row } from "react-bootstrap";

const Account = (props) => {
  const ticketElements = props.dataUser.tickets?.map((t) => (
    <Ticket
      key={t.id}
      from={t.from}
      to={t.to}
      date={t.date}
      time={t.time}
      price={t.price}
      dataUser={props.dataUser}
      changeIcon={props.changeIcon}
      hoverOnTicket={props.hoverOnTicket}
    />
  ));
  const goodElements = props.dataUser.products?.map((p) => (
    <Good price={p.price} title={p.title} image={p.image} />
  ));

  return (
    <div className={css.cabinet}>
      <Container>
        <div className={css.panelUser}>
          <img src={user} alt="user" />
          <span>{props.dataUser.user?.name}</span>
          <span>{props.dataUser.user?.email}</span>
        </div>
        <Row className={css.dataUser}>
          <Col lg={6} md={6} xs={12} sm={12} className={css.flight}>
            <h3>Flights data</h3>
            {ticketElements}
          </Col>
          <Col lg={6} md={6} xs={12} sm={12} className={css.good}>
            <h3>Purchase data</h3>
            {goodElements}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Account;
