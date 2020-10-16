import React from "react";
import css from "./Registration.module.css";
import arrow from "../../../Content/Store/GoodOne/img/arrow.png";

const Registration = (props) => {
  const userName = React.createRef();
  const userEmail = React.createRef();
  const userPassword = React.createRef();

  const onChange = () => {
    let name = userName.current.value;
    let email = userEmail.current.value;
    let password = userPassword.current.value;
    props.updateNewTextReg(name, email, password);
  };

  const sendData = () => {
    props.addUser();
  };

  return (
    <div className={css.registration}>
      <h1>Sign up</h1>
      <form className={css.data}>
        <div>
          <input
            type="text"
            value={props.newNameText}
            onChange={onChange}
            ref={userName}
            placeholder="your name..."
          />
        </div>
        <div>
          <input
            type="email"
            value={props.newEmailText}
            onChange={onChange}
            ref={userEmail}
            placeholder="your email..."
          />
        </div>
        <div>
          <input
            type="password"
            value={props.newPasswordText}
            onChange={onChange}
            ref={userPassword}
            placeholder="your password..."
          />
        </div>
      </form>
      <button type="submit" onClick={sendData}>
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

export default Registration;
