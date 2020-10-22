import React, { useState } from "react";
import css from "./Navibar.module.css";
import logo from "./img/logo2.svg";
import { Link } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import EntryContainer from "../../Account/Login/Entry/EntryContainer";
import RegistrationContainer from "../../Account/Login/Registration/RegistrationContainer";

const Navibar = (props) => {

  return (
    <div className={css.header}>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/" className={css.logo}>
            <img
              alt="logo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block"
            />
            TRVL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav defaultActiveKey="/" className={css.naviagtion}>
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="gallery">Gallery</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/books">Book</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/store">Store</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {props.login === false ? (
                <Nav className={css.auth}>
                  <Button
                    variant="outline-light"
                    className="mr-2"
                    onClick={() => props.showLogin(!props.showL)}
                  >
                    Log In
                  </Button>
                  <Button variant="outline-light" onClick={() => props.showRegistration(!props.showR)}>
                    Sign up
                  </Button>
                </Nav>
              ) : (
                <Nav>
                    <Nav.Link className={css.name}>
                    <Link to="/account">{props.dataUser.user?.name}</Link>
                  </Nav.Link>
                  <Button variant="outline-light" onClick={props.sendToken}>
                    Sign Out
                  </Button>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <EntryContainer />
        <RegistrationContainer />
      </Container>
    </div>
  );
};

export default Navibar;
