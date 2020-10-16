import React from "react";
import css from "./GoodMain.module.css";
import HeaderMainContainer from "../../../Header/HeaderMain/HeaderMainContainer";
import FooterMainContainer from "../../../Footer/FooterMain/FooterMainContainer";
import Good from "./Good/Good";
import MiniBasketContainer from "../../../Basket/MiniBasket/MiniBasketContainer";
import CategoryContainer from "../../../Content/Store/Category/CategoryContainer";

const GoodMain = (props) => {
  const goodsElements = props.goods.map((g) => (
    <Good
      key={g._id}
      id={g._id}
      price={g.price}
      title={g.title}
      image={g.image}
      description={g.description}
      size={g.size}
      setOneGood={props.setOneGood}
    />
  ));

  return (
    <div className={css.goodMain}>
      <div className={css.header}>
        <CategoryContainer />
        <HeaderMainContainer />
        <div className={css.basket}>
          <MiniBasketContainer />
        </div>
      </div>
      <div className={css.contentGood}>{goodsElements}</div>
      <div className={css.footer}>
        <FooterMainContainer />
      </div>
    </div>
  );
};

export default GoodMain;
