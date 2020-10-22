import React from "react";
import {
  loginStore,
  showLogin,
  showRegistration,
} from "../../../redux/loginReducer";
import { addDataUser } from "../../../redux/contentReducer";
import { connect } from "react-redux";
import Navibar from "./Navibar";

class Token extends React.Component {
  constructor(props) {
    super(props);
    this.store = JSON.parse(localStorage.getItem("login"));
    if (this.store && this.store.login) {
      this.props.loginStore(this.store.login);
    }
  }

  componentDidUpdate() {
    if (this.props.login) {
      this.token = `Bearer ${this.store.token}`;
      fetch("https://valentine-online-shop-api.herokuapp.com/me", {
        method: "GET",
        headers: {
          Authorization: this.token,
        },
      }).then((response) => {
        response.json().then((result) => {
          this.props.addDataUser(result);
        });
      });
    }
  }

  sendToken = () => {
    let token = `Bearer ${this.store.token}`;
    fetch("https://valentine-online-shop-api.herokuapp.com/signout", {
      method: "POST",
      headers: {
        Authorization: token,
      },
    })
      .then(() => localStorage.removeItem("login"))
      .then(() => this.props.loginStore(false));
  };

  render() {
    return (
      <Navibar
        login={this.props.login}
        dataUser={this.props.dataUser}
        showL={this.props.showL}
        showR={this.props.showR}
        sendToken={this.sendToken}
        showLogin={this.props.showLogin}
        showRegistration={this.props.showRegistration}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.login.login,
    dataUser: state.content.dataUser,
    showL: state.login.showL,
    showR: state.login.showR,
  };
};

const NavibarContainer = connect(mapStateToProps, {
  loginStore,
  showLogin,
  showRegistration,
  addDataUser,
})(Token);

export default NavibarContainer;
