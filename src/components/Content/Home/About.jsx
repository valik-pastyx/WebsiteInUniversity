import React from "react";
import { Button, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import css from "./About.module.css";

const About = () => {
  return (
    <>
        <div className={css.back}>
      <Container className={css.container}>
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
          <Link href="https://en.wikipedia.org/wiki/Tourism" target="_blank">
            <Button variant="outline-warning">Show more</Button>
          </Link>
          <div className={css.playerWrapper}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=EHgqbLk50EY&t=4s"
              className={css.player}
              playing
              light
            />
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default About;
