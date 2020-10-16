import React from "react";
import css from "./FooterMain.module.css";
import SocNetFoot from "../SocNetFoot/SocNetFoot";
import copyright from ".././img/copyright.png";

const FooterMain = (props) => {
  const navigationElements = props.navigation.map((n) => {
    return <SocNetFoot icon={n.icon} />;
  });

  const userName = React.createRef();
  const userMail = React.createRef();
  const userMessage = React.createRef();

  const addName = () => {
    let text = userName.current.value;
    props.addName();
    alert(`${text} your name successfull sended (*)>`);
  };

  const onNameChange = () => {
    let n = userName.current.value;
    let t = userMail.current.value;
    let m = userMessage.current.value;
    props.updateNewNameText(n, t, m);
  };

  return (
    <div className={css.FooterMain}>
      <div className={css.footerMainContent}>
        <div className={css.footerMainWithoutButton}>
          <div className={css.social}>
            <div className={css.title}>
              <span>Time</span>travel
            </div>
            <nav>{navigationElements}</nav>
          </div>
          <div className={css.subscribe}>
            <div className={css.name}>
              <label>Name</label>
              <input
                type="text"
                ref={userName}
                value={props.newName}
                onChange={onNameChange}
              />
            </div>
            <div className={css.name}>
              <label>Email</label>
              <input
                type="email"
                ref={userMail}
                value={props.newMail}
                onChange={onNameChange}
              />
            </div>
            <div className={css.name}>
              <label>Message</label>
              <textarea
                ref={userMessage}
                value={props.newMessage}
                onChange={onNameChange}
              ></textarea>
            </div>
            <button onClick={addName}>Send</button>
          </div>
        </div>
      </div>
      <div className={css.reserve}>
        <img src={copyright} />
        <h3>Timetravel 2020. All Right Reserved.</h3>
      </div>
    </div>
  );
};

export default FooterMain;
