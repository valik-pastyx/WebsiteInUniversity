import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import css from "./GoodOne.module.css";
import arrow from "./img/arrow.png";
import boot from "./img/boot.jpg";

const GoodOne = (props) => {
  const sendBasket = () => {
    if (!props.login) {
      alert("Please log in to buy the product.");
    } else {
      props.sendToCart();
      alert("Yours product successful added.");
    }
  };
  if (props.oneGood.length === 0) {
    window.history.back();
  }
  const sizeElements = props?.oneGood[3]?.map((s) => {
    return (
      <label>
        <span className="bg-white">
          <div className="p-2">{s}</div>
        </span>
      </label>
    );
  });

  return (
    <div className={css.goodOne}>
      <Container>
        <Row>
          <Col className={css.photo} lg={7} md={7} xs={12} sm={12}>
            <img src={`data:image/png;base64,${props.oneGood[4]}`} />
          </Col>
          <Col className={css.infoGood} lg={5} md={5} xs={12} sm={12}>
            <h4>{props.oneGood[0]}</h4>
            <h6>{props.oneGood[1]} UAH</h6>
            <p>{props.oneGood[2]}</p>
            <form className={css.size}>
              <fieldset>
                <div className={css.listSize}>{sizeElements}</div>
              </fieldset>
            </form>
            <Button
              variant="outline-warning"
              type="submit"
              onClick={sendBasket}
              className="w-100 font-weight-bold p-2 mt-4"
            >
              ADD
            </Button>
          </Col>
        </Row>
        <img
          className={css.arrow}
          src={arrow}
          onClick={() => window.history.back()}
        />
      </Container>
    </div>
  );
};

export default GoodOne;
