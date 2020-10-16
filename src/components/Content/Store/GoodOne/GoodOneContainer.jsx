import React from "react";
import GoodOne from "./GoodOne";
import { connect } from "react-redux";

class AddGood extends React.Component {
  constructor(props) {
    super(props);
    this.store = JSON.parse(localStorage.getItem("login"));
  }

  sendToCart = () => {
    this.token = `Bearer ${this.store.token}`;
    fetch(
      `https://valentine-online-shop-api.herokuapp.com/shop/addtocart/${this.props.oneGood[5]}`,
      {
        method: "POST",
        headers: {
          Authorization: this.token,
        },
      }
    );
  };

  render() {
    return (
      <GoodOne
        oneGood={this.props.oneGood}
        login={this.props.login}
        sendToCart={this.sendToCart}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    oneGood: state.header.oneGood,
    login: state.login.login,
  };
};

const GoodOneContainer = connect(mapStateToProps)(AddGood);

export default GoodOneContainer;
