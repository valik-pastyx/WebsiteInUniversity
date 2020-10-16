import React from "react";
import css from "./GoodOne.module.css";
import arrow from "./img/arrow.png";
import FooterMainContainer from "../../../Footer/FooterMain/FooterMainContainer";
import CategoryContainer from "../../../Content/Store/Category/CategoryContainer";
import MiniBasketContainer from "../../../Basket/MiniBasket/MiniBasketContainer";

const GoodOne = (props) => {
  const sendBasket = () => {
    if (!props.login) {
      alert("Please log in to buy the product.");
    } else {
      props.sendToCart();
      alert("Yours product successful added.");
    }
  };
  if (props.oneGood.length === 0) {
    window.history.back();
  }
  const sizeElements = props?.oneGood[3]?.map((s) => {
    return (
      <label>
        <span>
          <div className={css.text}>{s}</div>
        </span>
      </label>
    );
  });

  return (
    <div className={css.goodOne}>
      <div className={css.header}>
        <CategoryContainer />
        <div className={css.basket}>
          <MiniBasketContainer />
        </div>
      </div>
      <div className={css.contentGoodOne}>
        <div className={css.photo}>
          <img src={`data:image/png;base64,${props.oneGood[4]}`} />
        </div>
        <div className={css.infoGood}>
          <div className={css.title}>{props.oneGood[0]}</div>
          <div className={css.price}>{props.oneGood[1]} UAH</div>
          <div className={css.description}>{props.oneGood[2]}</div>
          <form className={css.size}>
            <fieldset>
              <div
                className={
                  props.oneGood[3]?.length === 1
                    ? css.listSizeZero
                    : css.listSize
                }
              >
                {sizeElements}
              </div>
            </fieldset>
          </form>
          <button type="submit" onClick={sendBasket}>
            ADD
          </button>
        </div>
      </div>
      <img
        className={css.arrow}
        src={arrow}
        onClick={() => window.history.back()}
      />
      <div className={css.footer}>
        <FooterMainContainer />
      </div>
    </div>
  );
};

export default GoodOne;
