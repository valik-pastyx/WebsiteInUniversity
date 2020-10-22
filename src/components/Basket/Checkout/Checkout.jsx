import React from "react";
import css from "./Checkout.module.css";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Form } from "react-bootstrap";

const Checkout = (props) => {
  const buy = (event) => {
    event.preventDefault();
    props.buyByID();
    alert("Your's product successful purchased, nice to meet you))");
  };
  return (
    <div className={css.checkout}>
      <Container>
        <h2>Specify Data</h2>
        <Form>
          <Form.Row className={css.forma}>
            <Col sm={3} className="m-4">
              <Form.Label srOnly>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Col>
            <Col sm={3} className="m-4">
              <Form.Label srOnly>Adress</Form.Label>
              <Form.Control type="text" placeholder="Adress" />
            </Col>
            <Col sm={3} className="m-4">
              <Form.Label srOnly>Postcode</Form.Label>
              <Form.Control type="number" placeholder="Postcode" />
            </Col>
            <Col sm={3} className="m-4">
              <Form.Label srOnly>City</Form.Label>
              <Form.Control type="number" placeholder="City" />
            </Col>
            <Col sm={3} className="m-4">
              <Form.Label srOnly>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Col>
            <Col sm={3} className="m-4">
              <Form.Label srOnly>Phone number</Form.Label>
              <Form.Control type="number" placeholder="Phone number" />
            </Col>
            <Col sm={3} className="m-4">
              <Form.Label srOnly>Delivery method</Form.Label>
              <Form.Control type="text" placeholder="Delivery method" />
            </Col>
            <Col sm={3} className="m-4">
              <Form.Label srOnly>Payment method</Form.Label>
              <Form.Control type="text" placeholder="Payment method" />
            </Col>
          </Form.Row>
        </Form>
        <div className={css.continue}>
          <Button
            variant="outline-danger"
            onClick={() => window.history.back()}
          >
            go back
          </Button>
          <span>{`total ${props.totalPrice},00 UAH`}</span>
          <Button variant="outline-primary" onClick={buy}>
            checkout
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
