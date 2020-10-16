import React from "react";
import css from "./Good.module.css";
import image from "./img/boot.jpg";
import { NavLink } from "react-router-dom";

const Good = (props) => {
  const getID = () => {
    if (props.id) {
      return props.setOneGood(
        props.title,
        props.price,
        props.description,
        props.size,
        props.image,
        props.id
      );
    }
  };

  return (
    <div className={css.good}>
      <NavLink to="/good_one">
        <img src={`data:image/png;base64,${props.image}`} onClick={getID} />
      </NavLink>
      <div className={css.name} onClick={getID}>
        {props.title}
      </div>
      <div className={css.price}>{props.price} UAH</div>
    </div>
  );
};

export default Good;
