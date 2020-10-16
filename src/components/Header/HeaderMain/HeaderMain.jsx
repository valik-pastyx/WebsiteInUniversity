import React from "react";
import css from "./HeaderMain.module.css";
import signWhite from "../img/signWhite.png";
import signOut from "../img/signOut.png";
import { NavLink } from "react-router-dom";

const HeaderMain = (props) => {
  return (
    <div className={css.headerMain}>
      <div className={css.logo}>
        <NavLink to="/home">
          <span>TRVL</span>
        </NavLink>
      </div>
      <div className={css.frame}>
        <div className={css.navigation}>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/store">Store</NavLink>
          </nav>
        </div>
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
  );
};

export default HeaderMain;
