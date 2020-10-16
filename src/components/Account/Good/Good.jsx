import React from "react";
import css from "./Good.module.css";
import basketShop from "./img/shop.png";

const Good = (props) => {
  return (
    <div className={css.good}>
      <div className={css.banner}>
        <img src={basketShop}  />
        <div className={css.bannerContent}>
          <img src={`data:image/png;base64,${props.image}`} />
          <div className={css.text}>
            <div className={css.title}>{props.title}</div>
            <div className={css.price}>{props.price} UAH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
