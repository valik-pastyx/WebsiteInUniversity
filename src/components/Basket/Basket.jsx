import React from "react";
import css from "./Basket.module.css";
import HeaderMainContainer from "../Header/HeaderMain/HeaderMainContainer";
import FooterMainContainer from "../Footer/FooterMain/FooterMainContainer";
import { NavLink } from "react-router-dom";

const Basket = (props) => {
  const goodElements = props.basket.map((b) => {
    const IDToDelete = () => {
      if (b._id) {
        props.deleteGood(b._id);
      }
    };
    return (
      <div className={css.good}>
        <img src={`data:image/png;base64,${b.image}`} />
        <div className={css.text}>
          <div className={css.name}>{b.title}</div>
          <div className={css.price}>{b.price} UAH</div>
        </div>
        <button className={css.delete} onClick={IDToDelete}>
          delete
        </button>
      </div>
    );
  });

  return (
    <div className={css.basket}>
      <div className={css.header}>
        <HeaderMainContainer />
      </div>
      <div className={css.basketContent}>
        <h2>Basket</h2>
        <div className={css.count}>{`${props.basket.length} goods`}</div>
        <div className={css.goodContent}>{goodElements}</div>
      </div>
      <div className={css.continue}>
        <button className={css.toBack} onClick={() => window.history.back()}>
          go back
        </button>
        <span>{`total ${props.totalPrice},00 UAH`}</span>
        <NavLink to="/checkout" className={css.toForward}>
          Continue
        </NavLink>
      </div>
      <div className={css.footer}>
        <FooterMainContainer />
      </div>
    </div>
  );
};

export default Basket;
