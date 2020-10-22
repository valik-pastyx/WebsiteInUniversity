import React from "react";
import css from "./Basket.module.css";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const Basket = (props) => {
  const goodElements = props.basket.map((b) => {
    const IDToDelete = () => {
      if (b._id) {
        props.deleteGood(b._id);
      }
    };
    return (
      <Col lg={3} md={3} sm={3} xs={3} className={css.good}>
        <img src={`data:image/png;base64,${b.image}`} />
        <Row>
          <Col lg={6} md={6} sm={12} xs={12} >
            <h6 className="font-weight-bold">{b.title}</h6>
            <p>{b.price} UAH</p>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} >
            <Button variant="outline-warning" onClick={IDToDelete}>
              delete
            </Button>
          </Col>
        </Row>
      </Col>
    );
  });

  return (
    <div className={css.basket}>
      <Container>
        <h2>Basket</h2>
        <div className={css.count}>{`${props.basket.length} goods`}</div>
        <Row className={css.goodContent}>{goodElements}</Row>
        <div className={css.continue}>
          <Button variant="outline-danger" onClick={() => window.history.back()}>
            go back
          </Button>
          <span>{`total ${props.totalPrice},00 UAH`}</span>
          <NavLink to="/checkout">
            <Button variant="outline-primary">continue</Button>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Basket;
