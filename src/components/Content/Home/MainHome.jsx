import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import css from "./MainHome.module.css";

const MainHome = () => {
  return (
    <>
      <Jumbotron className={css.jumbo}>
        <div className={css.overlay}></div>
        <Container className={css.container}>
          <h1 className={css.title}>Travel</h1>
          <div className={css.socnetwork}>
            <Link to="#">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </Link>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default MainHome;
