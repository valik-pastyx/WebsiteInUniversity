import React from "react";
import css from "./MiniBasket.module.css";
import basket from "./img/backpack.png";
import { NavLink } from "react-router-dom";

const MiniBasket = (props) => {
  const goodElements = props.basket.map((b) => {
    return (
      <div className={css.good}>
        <img src={`data:image/png;base64,${b.image}`} />
        <div className={css.text}>
          <div className={css.name}>{b.title}</div>
          <div className={css.price}>{b.price} UAH</div>
        </div>
      </div>
    );
  });

  return (
    <div className={css.miniBasket}>
      <img
        src={basket}
        alt="basket"
        onMouseEnter={() => props.changeBasket(!props.hoverBasket)}
        onMouseLeave={() => props.changeBasket(props.hoverBasket)}
      />
      <div
        className={
          props.hoverBasket === true ? css.aroundBasket : css.aroundBasketNon
        }
      >
        <div
          className={
            props.basket.length > 3 ? css.backBasketMore : css.backBasketThree
          }
          onMouseEnter={() => props.changeBasket(props.hoverBasket)}
          onMouseLeave={() => props.changeBasket(!props.hoverBasket)}
        >
          <div className={css.contentBasket}>{goodElements}</div>
          {props.basket.length > 3 ? (
            <NavLink to="/basket" className={css.otherGood}>{`${
              props.basket.length - 3
            } good`}</NavLink>
          ) : (
            ""
          )}
          <NavLink to="/basket" className={css.toBasket}>
            see cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MiniBasket;