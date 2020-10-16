import React from "react";
import Account from "./Account";
import { connect } from "react-redux";
import {
  addDataUser,
  changeIcon,
  changeMenu,
} from "../../redux/contentReducer";
import { loginStore } from "../../redux/loginReducer";

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.store = JSON.parse(localStorage.getItem("login"));
    if (this.store && this.store.login) {
      this.props.loginStore(this.store.login);
    }

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
      <Account
        navigation={this.props.navigation}
        hoverOnMenu={this.props.hoverOnMenu}
        dataUser={this.props.dataUser}
        changeMenu={this.props.changeMenu}
        changeIcon={this.props.changeIcon}
        hoverOnTicket={this.props.hoverOnTicket}
        sendToken={this.sendToken}
        login={this.props.login}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    navigation: state.footer.navigation,
    hoverOnMenu: state.content.hoverOnMenu,
    dataUser: state.content.dataUser,
    hoverOnTicket: state.content.hoverOnTicket,
    login: state.login.login,
  };
};

const AccountContainer = connect(mapStateToProps, {
  changeMenu,
  addDataUser,
  changeIcon,
  loginStore,
})(UserData);

export default AccountContainer;
