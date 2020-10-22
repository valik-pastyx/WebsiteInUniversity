import React from "react";
import css from "./TicketRegistration.module.css";
import date from "../Books/Data/img/date.png";
import flight from "../Books/Data/img/flight.png";
import money from "../Books/Data/img/money.png";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const TicketRegistration = (props) => {
  return (
    <div className={css.ticket}>
      <Container>
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
                  <Col
                    lg={8}
                    md={8}
                    sm={12}
                    xs={12}
                    className="text-capitalize"
                  >
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
          <Col className={css.rightSide}
            lg={{ offset: 1, span: 8 }}
            md={{ offset: 1, span: 7 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            >
            <div className={css.contactData}>
              <h2>Contact data</h2>
              <p>
                The following contact details will be used to send you a ticket
                and other important information relatimported to your booking.
              </p>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="mail" lg={6}>
                    <Form.Label>E-mail*</Form.Label>
                    <Form.Control type="email" placeholder="example@mail.com" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="name" lg={6}>
                    <Form.Label>User name*</Form.Label>
                    <Form.Control type="text" placeholder="Joe Doe" />
                  </Form.Group>
                </Form.Row>
              </Form>
            </div>
            <h2>Passenger</h2>
            <Row className={css.passenger}>
              <Col className={css.personalData} lg={6} md={6} sm={12} xs={12}>
                <h3>Personal information</h3>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="name" lg={12}>
                      <Form.Label>Name*</Form.Label>
                      <Form.Control type="text" placeholder="Joe" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="name" lg={12}>
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control type="text" placeholder="Doe" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="name" lg={12}>
                      <Form.Label>Date of birth*</Form.Label>
                      <Form.Control type="date" placeholder="Doe" />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Col>
              <Col className={css.passport} lg={6} md={6} sm={12} xs={12}>
                <h3>Passport</h3>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="name" lg={12}>
                      <Form.Label>Passport number*</Form.Label>
                      <Form.Control type="number" placeholder="225588" />
                    </Form.Group>
                    <Form.Group controlId="SelectCustom" lg={12}>
                      <Form.Label>Сountry of issue*</Form.Label>
                      <Form.Control as="select" custom>
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
                    <Form.Group as={Col} controlId="name" lg={12}>
                      <Form.Label>Date of birth*</Form.Label>
                      <Form.Control type="date" placeholder="Doe" />
                    </Form.Group>
                    <Form.Group controlId="SelectCustom" lg={12}>
                      <Form.Label>Citizenship*</Form.Label>
                      <Form.Control as="select" custom>
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
                  </Form.Row>
                </Form>
              </Col>
            </Row>
            <Button
              type="submit"
              variant="primary"
              className="float-right clearfix"
              onClick={props.send}
            >
              Order
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TicketRegistration;
