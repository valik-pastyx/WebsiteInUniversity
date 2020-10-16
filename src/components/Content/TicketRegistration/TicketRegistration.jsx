import React from "react";
import css from "./TicketRegistration.module.css";
import date from "../Books/Data/img/date.png";
import flight from "../Books/Data/img/flight.png";
import money from "../Books/Data/img/money.png";
import HeaderMainContainer from "../../Header/HeaderMain/HeaderMainContainer";
import FooterMainContainer from "../../Footer/FooterMain/FooterMainContainer";

const TicketRegistration = (props) => {
  return (
    <div className={css.ticket}>
      <div className={css.header}>
        <HeaderMainContainer />
      </div>
      <div className={css.ticketContent}>
        <div className={css.leftSide}>
          <div className={css.inputData}>
            <h2>Mine ticket</h2>
            <div className={css.flight}>
              <img src={flight} />
              <div>
                {props.info[0]} {props.info.length === 0 ? "" : "-"}{" "}
                {props.info[1]}
              </div>
            </div>
            <div className={css.flight}>
              <img src={date} />
              <div>
                <span>{props.info[3]}</span> {props.info[2]}
              </div>
            </div>
            <div className={css.flight}>
              <img src={money} />
              <div>
                {props.info.length === 0 ? "" : "₴"}
                {props.info[4]}
              </div>
            </div>
          </div>
        </div>
        <div className={css.rightSide}>
          <div className={css.contactData}>
            <h2>Contact data</h2>
            <p>
              The following contact details will be used to send you a ticket
              and other important information relatimported to your booking.
            </p>
            <div className={css.data}>
              <label>E-mail*</label>
              <input type="email"></input>
            </div>
            <div className={css.data}>
              <label>Number phone*</label>
              <input type="number"></input>
            </div>
          </div>
          <div className={css.passenger}>
            <h2>Passenger</h2>
            <div className={css.personalData}>
              <h3>Personal information</h3>
              <div className={css.data}>
                <label>Name*</label>
                <input type="text"></input>
              </div>
              <div className={css.data}>
                <label>Last name*</label>
                <input type="text"></input>
              </div>
              <div className={css.data}>
                <label>Date of birth*</label>
                <input type="date"></input>
              </div>
            </div>
            <div className={css.passport}>
              <h3>Passport</h3>
              <div className={css.data}>
                <label>Passport number*</label>
                <input type="number"></input>
              </div>
              <div className={css.data}>
                <label>Сountry of issue*</label>
                <select>
                  <option value="Argentina">Argentina</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Poland">Poland</option>
                  <option value="Russia">Russia</option>
                  <option value="Spain">Spain</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Ukraine">Ukraine</option>
                </select>
              </div>
              <div className={css.data}>
                <label>Valid until*</label>
                <input type="date"></input>
              </div>
              <div className={css.data}>
                <label>Citizenship*</label>
                <select>
                  <option value="Argentina">Argentina</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Poland">Poland</option>
                  <option value="Russia">Russia</option>
                  <option value="Spain">Spain</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Ukraine">Ukraine</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className={css.disableBnt} onClick={props.send}>
            Order
          </button>
        </div>
      </div>
      <div className={css.footer}>
        <FooterMainContainer navigation={props.navigation} />
      </div>
    </div>
  );
};

export default TicketRegistration;
