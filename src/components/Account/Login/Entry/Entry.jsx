import React from "react";
import css from "./Entry.module.css";
import arrow from "../../../Content/Store/GoodOne/img/arrow.png";

const Entry = (props) => {
  const userEmail = React.createRef();
  const userPassword = React.createRef();

  const onChange = () => {
    let email = userEmail.current.value;
    let password = userPassword.current.value;
    props.updateNewTextEntr(email, password);
  };

  const signIn = () => {
    props.addUser();
  };
  if (props.login === true) {
    window.location.replace("http://localhost:3000/books");
  }

  return (
    <div className={css.registration}>
      <h1>Log in</h1>
      <form className={css.data}>
        <div>
          <input
            type="email"
            value={props.newEmailText}
            onChange={onChange}
            placeholder="your email..."
            ref={userEmail}
          />
        </div>
        <div>
          <input
            type="password"
            value={props.newPasswordText}
            onChange={onChange}
            placeholder="your password..."
            ref={userPassword}
          />
        </div>
      </form>
      <button type="submit" onClick={signIn}>
        Login
      </button>
      <img
        className={css.arrow}
        src={arrow}
        onClick={() => window.history.back()}
      />
    </div>
  );
};

export default Entry;
