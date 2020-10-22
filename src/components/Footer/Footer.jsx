import React from "react";
import css from "./Footer.module.css";
import copyright from "./Copyright.svg";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = (props) => {

  const userName = React.createRef();
  const userMail = React.createRef();
  const userMessage = React.createRef();

  const addName = () => {
    let text = userName.current.value;
    props.addName();
    alert(`${text} your name successfull sended (*)>`);
  };

  const onNameChange = () => {
    let n = userName.current.value;
    let t = userMail.current.value;
    let m = userMessage.current.value;
    props.updateNewNameText(n, t, m);
  };

  return (
    <div className={css.footer}>
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg={"auto"} md={"auto"} sm={"auto"}>
            <span className={css.title}>Time</span>travel
          </Col>
          <Col lg={"auto"} md={"auto"} sm={"auto"} className={css.socnetwork}>
            <Link to="#">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </Link>
          </Col>
        </Row>
        <Form className={css.inputs}>
          <Form.Row className="align-items-start">
            <Form.Group as={Col} controlId="NameM" lg={3} md={3} sm={12} xs={12}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="inlineFormInput"
                placeholder="Svyatoslav"
                type="text"
                ref={userName}
                value={props.newName}
                onChange={onNameChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="EmailA" lg={3} md={3} sm={12} xs={12}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                ref={userMail}
                value={props.newMail}
                onChange={onNameChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="Textarea1" lg={4} md={4} sm={12} xs={12}>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="I'd like...."
                rows={3}
                ref={userMessage}
                value={props.newMessage}
                onChange={onNameChange}
                style={{ resize: "none", fontSize: "12px" }}
              />
            </Form.Group>
            <Form.Group as={Col} lg={1} md={2} sm={12} xs={12}>
              <Button variant="outline-warning" type="submit" onClick={addName} className="w-100">
                Send
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
        <Container
          fluid
          style={{ textAlign: "center", fontSize: "12px" }}
        >
          <p>
            <img src={copyright} style={{width: "12px", marginRight: "5px"}} />
            Timetravel 2020. All Right Reserved.
          </p>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
