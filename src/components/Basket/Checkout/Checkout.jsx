import React from "react";
import css from "./Checkout.module.css";
import HeaderMainContainer from "../../Header/HeaderMain/HeaderMainContainer";
import FooterMainContainer from "../../Footer/FooterMain/FooterMainContainer";
import { NavLink } from "react-router-dom";

const Checkout = (props) => {
  const buy = (event) => {
    event.preventDefault();
    props.buyByID();
  };
  return (
    <div className={css.checkout}>
      <div className={css.header}>
        <HeaderMainContainer />
      </div>
      <div className={css.basketContent}>
        <h2>Specify Data</h2>
        <div className={css.goodContent}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Adress" />
          <input type="number" placeholder="Postcode" />
          <input type="text" placeholder="Region" />
          <input type="text" placeholder="District" />
          <input type="text" placeholder="City" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone number" />
          <input type="text" placeholder="Delivery method" />
          <input type="text" placeholder="Payment method" />
        </div>
      </div>
      <div className={css.continue}>
        <button className={css.toBack} onClick={() => window.history.back()}>
          go back
        </button>
        <span>{`total ${props.totalPrice},00 UAH`}</span>
        <NavLink to="/checkout" className={css.toForward} onClick={buy}>
          Checkout
        </NavLink>
      </div>
      <div className={css.footer}>
        <FooterMainContainer />
      </div>
    </div>
  );
};

export default Checkout;
