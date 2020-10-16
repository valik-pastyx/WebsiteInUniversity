import React from "react";
import css from "./FooterHome.module.css";
import SocNetFoot from "../SocNetFoot/SocNetFoot";
import copyright from ".././img/copyright.png";

const FooterHome = (props) => {
  const navigationElements = props.navigation.map((n) => (
    <SocNetFoot icon={n.icon} />
  ));

  const userName = React.createRef();
  const userText = React.createRef();
  const userMail = React.createRef();

  const sendName = () => {
    let text = userName.current.value;
    props.addName();
    alert(`${text} your message successfull sended and wait for the answer`);
  };

  const onNameChange = () => {
    let n = userName.current.value;
    let t = userText.current.value;
    let m = userMail.current.value;
    props.updateNewNameText(n, t, m);
  };

  return (
    <div className={css.footerHome}>
      <div className={css.footerHomeContent}>
        <div className={css.footerHomeWithoutButton}>
          <div className={css.social}>
            <div className={css.title}>
              <span>Time</span>travel
            </div>
            <nav>{navigationElements}</nav>
          </div>
          <div className={css.subscribe}>
            <div className={css.placeholders}>
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
                  ref={userText}
                  value={props.newMail}
                  onChange={onNameChange}
                />
              </div>
              <div className={css.name}>
                <label>Message</label>
                <textarea
                  ref={userMail}
                  value={props.newMessage}
                  onChange={onNameChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <button onClick={sendName}>Send</button>
      </div>

      <div className={css.reserve}>
        <img src={copyright} />
        <h3>
          Timetravel 2020. All Right Reserved.
        </h3>
      </div>
    </div>
  );
};

export default FooterHome;
