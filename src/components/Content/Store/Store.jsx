import React from "react";
import css from "./Store.module.css";
import equipment from "./video/equipment.mp4";
import camp from "./video/camp.mp4";
import boots from "./video/boots.mp4";
import clothes from "./video/clothes.mp4";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { NavLink } from "react-router-dom";
import HeaderMainContainer from "../../Header/HeaderMain/HeaderMainContainer";
import FooterMainContainer from "../../Footer/FooterMain/FooterMainContainer";
import CategoryContainer from "./Category/CategoryContainer";
import MiniBasketContainer from "../../Basket/MiniBasket/MiniBasketContainer";

const Store = () => {
  return (
    <div className={css.store}>
      <div className={css.header}>
        <CategoryContainer />
        <HeaderMainContainer />
        <div className={css.basket}>
          <MiniBasketContainer />
        </div>
      </div>
      <AwesomeSlider className={css.slider}>
        <div className={css.intro}>
          <div className={css.title}>
            <h1>Equipment</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias unde quibusdam accusantium rem voluptates amet!
            </p>
            <NavLink to="/good_main">
              <button>View</button>
            </NavLink>
          </div>
          <div className={css.video}>
            <div className={css.colorOverlay}>
              <video autoPlay loop muted>
                <source src={equipment} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className={css.intro}>
          <div className={css.title}>
            <h1>Camp</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias unde quibusdam accusantium rem voluptates amet!
            </p>
            <NavLink to="/good_main">
              <button>View</button>
            </NavLink>
          </div>
          <div className={css.video}>
            <div className={css.colorOverlay}>
              <video autoPlay loop muted>
                <source src={camp} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className={css.intro}>
          <div className={css.title}>
            <h1>Boots</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias unde quibusdam accusantium rem voluptates amet!
            </p>
            <NavLink to="/good_main">
              <button>View</button>
            </NavLink>
          </div>
          <div className={css.video}>
            <div className={css.colorOverlay}>
              <video autoPlay loop muted>
                <source src={boots} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className={css.intro}>
          <div className={css.title}>
            <h1>Clothes</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias unde quibusdam accusantium rem voluptates amet!
            </p>
            <NavLink to="/good_main">
              <button>View</button>
            </NavLink>
          </div>
          <div className={css.video}>
            <div className={css.colorOverlay}>
              <video autoPlay loop muted>
                <source src={clothes} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </AwesomeSlider>
      <div className={css.footer}>
        <FooterMainContainer />
      </div>
    </div>
  );
};

export default Store;
