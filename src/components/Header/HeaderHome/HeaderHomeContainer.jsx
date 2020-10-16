import React from "react";
import HeaderHome from "./HeaderHome";
import { loginStore, nameUser } from "../../../redux/loginReducer";
import { connect } from "react-redux";

class Token extends React.Component {
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
          this.props.nameUser(result?.user?.name);
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
      <HeaderHome
        socnetwork={this.props.socnetwork}
        login={this.props.login}
        name={this.props.name}
        sendToken={this.sendToken}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    socnetwork: state.header.homePageHeader.socnetwork,
    login: state.login.login,
    name: state.login.name,
  };
};

const HeaderHomeContainer = connect(mapStateToProps, { loginStore, nameUser })(
  Token
);

export default HeaderHomeContainer;
