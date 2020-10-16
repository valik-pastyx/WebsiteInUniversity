import React from "react";
import css from "./Books.module.css";
import Data from "./Data/Data";
import HeaderMainContainer from "../../Header/HeaderMain/HeaderMainContainer";
import FooterMainContainer from "../../Footer/FooterMain/FooterMainContainer";

const Books = (props) => {
  const from = React.createRef();
  const to = React.createRef();

  let onTextChange = () => {
    let f = from.current.value;
    let t = to.current.value;
    props.updateNewText(f, t);
  };

  const addTicket = (event) => {
    event.preventDefault();
    props.addTicket();
  };

  return (
    <div className={css.books}>
      <div className={css.header}>
        <HeaderMainContainer />
      </div>

      <div className={css.booksContent}>
        <Data
          findFlight={props.findFlight}
          info={props.info}
          sendInfoToTicket={props.sendInfoToTicket}
          orderRegistration={props.orderRegistration}
        />
        <div className={css.searchData}>
          <form className={css.back}>
            <div className={css.info}>
              <select
                ref={from}
                onChange={onTextChange}
                value={props.newFromText}
              >
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
            <div className={css.info}>
              <select ref={to} onChange={onTextChange} value={props.newToText}>
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
            <div className={css.btn}>
              <button type="submit" onClick={addTicket}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={css.footer}>
        <FooterMainContainer />
      </div>
    </div>
  );
};

export default Books;
