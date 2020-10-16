import React from "react";
import { updateNewTextEntr, loginStore } from "../../../../redux/loginReducer";
import Entry from "./Entry";
import { connect } from "react-redux";

class SignInAPIComponent extends React.Component {
  storeColector = () => {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.login) {
      this.props.loginStore(store.login);
    }
  };
  addUser = () => {
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.props.newEmailText,
        password: this.props.newPasswordText,
      }),
    };

    fetch(
      "https://valentine-online-shop-api.herokuapp.com/signin",
      requestOptions
    )
      .then((response) => {
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
    return <Entry {...this.props} addUser={this.addUser} />;
  }
}

let mapStateToProps = (state) => {
  return {
    newEmailText: state.login.newEmailText,
    newPasswordText: state.login.newPasswordText,
    login: state.login.login,
  };
};

const EntryContainer = connect(mapStateToProps, {
  updateNewTextEntr,
  loginStore,
})(SignInAPIComponent);

export default EntryContainer;
