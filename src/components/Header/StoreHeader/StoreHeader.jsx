import React from "react";
import MiniBasketContainer from "../../Basket/MiniBasket/MiniBasketContainer";
import CategoryContainer from "../../Content/Store/Category/CategoryContainer";
import css from "./StoreHeader.module.css";

const StoreHeader = () => {
  return (
    <div className={css.header}>
      <CategoryContainer />
      <MiniBasketContainer />
    </div>
  );
};

export default StoreHeader;