import React from "react";
import css from "./GoodMain.module.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const GoodMain = (props) => {
  return (
    <div className={css.goodMain}>
      <Container>
        <Row className="justify-content-center">
          {props.goods.map((g) => {
            const getID = () => {
              if (g._id) {
                return props.setOneGood(
                  g.title,
                  g.price,
                  g.description,
                  g.size,
                  g.image,
                  g._id
                );
              }
            };
            return (
              <Col lg={3} md={3} xs={3} sm={3} className={css.good}>
                <Link to="/good_one">
                  <img
                    src={`data:image/png;base64,${g.image}`}
                    onClick={getID}
                  />
                </Link>
                <div className={css.name} onClick={getID}>
                  {g.title}
                </div>
                <div className={css.price}>{g.price} UAH</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default GoodMain;
