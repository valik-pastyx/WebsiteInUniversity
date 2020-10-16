import React from "react";
import css from "./Gallery.module.css";
import HeaderMainContainer from "../../Header/HeaderMain/HeaderMainContainer";
import FooterMainContainer from "../../Footer/FooterMain/FooterMainContainer";
import icon1 from "./img/icon1.jpg";
import icon2 from "./img/icon2.jpg";
import icon3 from "./img/icon3.jpg";
import icon4 from "./img/icon4.jpg";
import icon5 from "./img/icon5.jpg";
import icon6 from "./img/icon6.jpg";
import icon7 from "./img/icon7.jpg";
import icon8 from "./img/icon8.jpg";
import icon9 from "./img/icon9.jpg";
import icon10 from "./img/icon10.jpg";
import icon11 from "./img/icon11.jpg";
import icon12 from "./img/icon12.jpg";
import icon13 from "./img/icon13.jpg";
import icon14 from "./img/icon14.jpg";
import icon15 from "./img/icon15.jpg";

const Gallery = () => {
  return (
    <div className={css.gallery}>
      <div className={css.header}>
        <HeaderMainContainer />
      </div>

      <div className={css.description}>
        <span>see the amazing view here</span>
        <h2>
          <span>Photo</span> Gallery
        </h2>
        <p>
          One day I discovered to my amazement that the popular view grounded in
          superstition, and not the medical one, comes nearer to the truth about
          dreams.
        </p>
      </div>
      <div className={css.slider}>
        <div class={css.row}>
          <div className={css.column}>
            <img src={icon1} />
            <img src={icon2} />
            <img src={icon3} />
            <img src={icon4} />
            <img src={icon5} />
            <img src={icon6} />
            <img src={icon7} />
          </div>

          <div class={css.column}>
            <img src={icon8} />
            <img src={icon9} />
            <img src={icon10} />
            <img src={icon11} />
            <img src={icon12} />
            <img src={icon13} />
          </div>

          <div class={css.column}>
            <img src={icon14} />
            <img src={icon15} />
            <img src={icon1} />
            <img src={icon2} />
            <img src={icon3} />
            <img src={icon4} />
            <img src={icon5} />
          </div>

          <div class={css.column}>
            <img src={icon6} />
            <img src={icon7} />
            <img src={icon8} />
            <img src={icon9} />
            <img src={icon10} />
            <img src={icon11} />
          </div>
        </div>
      </div>
      <div className={css.footer}>
        <FooterMainContainer />
      </div>
    </div>
  );
};

export default Gallery;
