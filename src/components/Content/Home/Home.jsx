import React from "react";
import css from "./Home.module.css";
import blog from "./img/blog.jpg";
import ReactPlayer from "react-player";
import HeaderHomeContainer from "../../Header/HeaderHome/HeaderHomeContainer";
import FooterHomeContainer from "../../Footer/FooterHome/FooterHomeContainer";

const Home = () => {
  return (
    <div className={css.home}>
      <div className={css.header}>
        <HeaderHomeContainer />
      </div>
      <div>
        <div className={css.video}>
          <span className={css.stick}>History of tourism</span>
          <h2>
            <span>Tourism</span> History
          </h2>
          <p>
            Tourism is travel for pleasure or business; also the theory and
            practice of touring, the business of attracting, accommodating, and
            entertaining tourists, and the business of operating tours.The World
            Tourism Organization defines tourism more generally, in terms which
            go "beyond the common perception of tourism as being limited to
            holiday activity only", as people "traveling to and staying in
            places outside their usual environment for not more than one
            consecutive year for leisure and not less than 24 hours, business
            and other purposes".
          </p>
          <a href="https://en.wikipedia.org/wiki/Tourism" target="_blank">
            <button>Show more -></button>
          </a>
          <div className={css.playerWrapper}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=EHgqbLk50EY&t=4s"
              className={css.player}
              playing
              width="600px"
              height="300px"
              light
            />
          </div>
        </div>
        <div className={css.blog}>
          <img src={blog} />
          <div className={css.text}>
            <div className={css.textTitle}>
              Top <span>7</span> Reasons to <span>Travel</span>
            </div>
            <ul>
              <li>Improving the health.</li>
              <li>You learn without even trying.</li>
              <li>You interact with different people.</li>
              <li>You can practice or learn a new language.</li>
              <li>You learn to get around in a new environment.</li>
              <li>
                You are more likely to do things you wouldn’t normally do at
                home.
              </li>
              <li>You grow and become a better you.</li>
            </ul>
            <a
              href="https://www.topuniversities.com/blog/top-7-reasons-travel-abroad"
              target="_blank"
            >
              <button>More ->></button>
            </a>
          </div>
        </div>
      </div>
      <div className={css.footer}>
        <FooterHomeContainer />
      </div>
    </div>
  );
};

export default Home;
