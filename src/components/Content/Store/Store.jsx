import React from "react";
import css from "./Store.module.css";
import equipment from "./video/equipment.mp4";
import camp from "./video/camp.mp4";
import boots from "./video/boots.mp4";
import clothes from "./video/clothes.mp4";
import "react-awesome-slider/dist/styles.css";
import { Carousel } from "react-bootstrap";

const Store = () => {
  return (
    <div className={css.store}>
      <Carousel className={css.slider}>
        <Carousel.Item className={css.item}>
          <video autoPlay loop muted>
            <source src={equipment} type="video/mp4" />
          </video>
          <Carousel.Caption className={css.caption}>
            <h1>Equipment</h1>
            <p>
              Sit aute aliquip ea tempor ut laborum aliquip et aliquip aute enim
              mollit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={css.item}>
          <video autoPlay loop muted>
            <source src={camp} type="video/mp4" />
          </video>
          <Carousel.Caption className={css.caption}>
            <h1>Camp</h1>
            <p>
              Sit aute aliquip ea tempor ut laborum aliquip et aliquip aute enim
              mollit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={css.item}>
          <video autoPlay loop muted>
            <source src={boots} type="video/mp4" />
          </video>
          <Carousel.Caption className={css.caption}>
            <h1>Boots</h1>
            <p>
              Sit aute aliquip ea tempor ut laborum aliquip et aliquip aute enim
              mollit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={css.item}>
          <video autoPlay loop muted>
            <source src={clothes} type="video/mp4" />
          </video>
          <Carousel.Caption className={css.caption}>
            <h1>Clothes</h1>
            <p>
              Sit aute aliquip ea tempor ut laborum aliquip et aliquip aute enim
              mollit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Store;
