import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import css from "./Books.module.css";
import Data from "./Data/Data";

const Books = (props) => {
  const from = React.createRef();
  const to = React.createRef();

  let onTextChange = () => {
    let f = from.current.value;
    let t = to.current.value;
    props.updateNewText(f, t);
  };

  const addTicket = (event) => {
    event.preventDefault();
    props.addTicket();
  };

  return (
    <div className={css.books}>
      <Container>
        <Data
          findFlight={props.findFlight}
          info={props.info}
          sendInfoToTicket={props.sendInfoToTicket}
          orderRegistration={props.orderRegistration}
          newFromText={props.newFromText}
          newToText={props.newToText}
        />
        <Form className={css.back}>
          <Form.Row className="w-100">
            <Form.Group lg={12} md={12} sm={12} as={Col} controlId="formGridState" className={css.info}>
              <Form.Label srOnly>From</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                ref={from}
                onChange={onTextChange}
                value={props.newFromText}
                className={css.selectOwn}
              >
                <option value="Argentina">Argentina</option>
                <option value="Aruba">Aruba</option>
                <option value="Brazil">Brazil</option>
                <option value="Egypt">Egypt</option>
                <option value="Mexico">Mexico</option>
                <option value="Poland">Poland</option>
                <option value="Russia">Russia</option>
                <option value="Spain">Spain</option>
                <option value="Turkey">Turkey</option>
                <option value="Ukraine">Ukraine</option>
              </Form.Control>
            </Form.Group>
            <Form.Group lg={12} md={12} sm={12}  as={Col} controlId="formGridState" className={css.info}>
              <Form.Label srOnly>To</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose..."
                ref={to}
                onChange={onTextChange}
                value={props.newToText}
                className={css.selectOwn}
              >
                <option value="Argentina">Argentina</option>
                <option value="Aruba">Aruba</option>
                <option value="Brazil">Brazil</option>
                <option value="Egypt">Egypt</option>
                <option value="Mexico">Mexico</option>
                <option value="Poland">Poland</option>
                <option value="Russia">Russia</option>
                <option value="Spain">Spain</option>
                <option value="Turkey">Turkey</option>
                <option value="Ukraine">Ukraine</option>
              </Form.Control>
            </Form.Group>
            <Form.Group lg={12} md={12} sm={12} as={Col} className="mb-0">
              <Button variant="outline-dark" type="submit" className="w-100" onClick={addTicket}>
                Search
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
};

export default Books;
