import React from "react";
import css from "./HeaderHome.module.css";
import SocNetHead from "../SocNetHead/SocNetHead";
import signWhite from "../img/signWhite.png";
import signOut from "../img/signOut.png";
import { NavLink } from "react-router-dom";

const HeaderHome = (props) => {
  const socnetworkElements = props.socnetwork.map((s) => {
    return <SocNetHead icon={s.icon} />;
  });

  return (
    <div className={css.headerHome}>
      <div className={css.frame}>
        <div className={css.logo}>
          <div className={css.logoMail}>
            <NavLink to="/home">
              <span>TRVL</span>
            </NavLink>
            <a href="">valikpastyx123@gmail.com</a>
          </div>
          <div className={css.authorization}>
            {props.login === false ? (
              <img src={signWhite} />
            ) : (
              <img src={signOut} />
            )}
            {props.login === false ? (
              <div className={css.signIn}>
                <NavLink to="/registration">
                  <div>Sign up</div>
                </NavLink>
                <NavLink to="/entry">
                  <div>Sign in</div>
                </NavLink>
              </div>
            ) : (
              <div className={css.signOut}>
                <NavLink to="/account">
                  <div>{props.name}</div>
                </NavLink>
                <button type="submit" onClick={props.sendToken}>
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={css.navigation}>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/store">Store</NavLink>
          </nav>
        </div>
        <div className={css.socnetwork}>{socnetworkElements}</div>
        <div className={css.title}>Travel</div>
        <div className={css.line}></div>
      </div>
    </div>
  );
};

export default HeaderHome;
