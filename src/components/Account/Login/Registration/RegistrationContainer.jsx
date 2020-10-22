import React from "react";
import { updateNewTextReg, loginStore, showRegistration } from "../../../../redux/loginReducer";
import Registration from "./Registration";
import { connect } from "react-redux";

class SignUpAPIComponent extends React.Component {
  storeColector = () => {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store.login) {
      console.log(store.login);
      this.props.loginStore(store.login);
    }
  };

  addUser = () => {
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.props.newNameText,
        email: this.props.newEmailText,
        password: this.props.newPasswordText,
      }),
    };
    fetch(
      "https://valentine-online-shop-api.herokuapp.com/signup",
      requestOptions
    ).then((response) => {
      response.json().then((result) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: result.token,
          })
        );
        this.storeColector();
      });
    })
    .catch((error) => {
      alert(error);
    });
  };

  render() {
    return <Registration {...this.props} addUser={this.addUser} showRegistration={this.props.showRegistration} />
  }
}

let mapStateToProps = (state) => {
  return {
    newNameText: state.login.newNameText,
    newEmailText: state.login.newEmailText,
    newPasswordText: state.login.newPasswordText,
    login: state.login.login,
    showR: state.login.showR
  };
};

const RegistrationContainer = connect(mapStateToProps, {
  updateNewTextReg,
  loginStore,
  showRegistration
})(SignUpAPIComponent);

export default RegistrationContainer;
