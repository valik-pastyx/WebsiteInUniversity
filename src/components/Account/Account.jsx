import React from "react";
import css from "./Account.module.css";
import FooterMainContainer from "../Footer/FooterMain/FooterMainContainer";
import Ticket from "./Ticket/Ticket";
import Good from "./Good/Good";
import { NavLink } from "react-router-dom";
import user from "./img/user.png";
import signWhite from "../Header/img/signWhite.png";
import signOut from "../Header/img/signOut.png";

const Account = (props) => {
  const ticketElements = props.dataUser.tickets?.map((t) => (
    <Ticket
      key={t.id}
      from={t.from}
      to={t.to}
      date={t.date}
      time={t.time}
      price={t.price}
      dataUser={props.dataUser}
      changeIcon={props.changeIcon}
      hoverOnTicket={props.hoverOnTicket}
    />
  ));
  const goodElements = props.dataUser.products?.map((p) => (
    <Good price={p.price} title={p.title} image={p.image} />
  ));

  return (
    <div className={css.cabinet}>
      <div className={css.withoutFooter}>
        <div className={css.header}>
          <div className={css.menuNavigation}>
            <div
              className={css.menu}
              onMouseEnter={() => props.changeMenu(!props.hoverOnMenu)}
              onMouseLeave={() => props.changeMenu(!props.hoverOnMenu)}
            >
              <div className={css.burger}></div>
            </div>
            <div
              className={
                props.hoverOnMenu ? css.navigation : css.navigationFixed
              }
              onMouseEnter={() => props.changeMenu(props.hoverOnMenu)}
              onMouseLeave={() => props.changeMenu(!props.hoverOnMenu)}
            >
              <nav className={css.navigation}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/store">Store</NavLink>
              </nav>
            </div>
          </div>
          <div className={css.panelUser}>
            <img src={user} />
            <span className={css.name}>{props.dataUser.user?.name}</span>
            <span className={css.email}>{props.dataUser.user?.email}</span>
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
                <NavLink to="/cabinet">
                  <div>{props.dataUser.user?.name}</div>
                </NavLink>
                <button type="submit" onClick={props.sendToken}>
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={css.dataUser}>
          <div className={css.flight}>
            <h1>Flights data</h1>
            {ticketElements}
          </div>
          <div className={css.good}>
            <h1>Purchase data</h1>
            {goodElements}
          </div>
        </div>
      </div>
      <FooterMainContainer navigation={props.navigation} />
    </div>
  );
};

export default Account;
