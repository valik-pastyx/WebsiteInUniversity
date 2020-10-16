import React from "react";
import Checkout from "./Checkout";
import { connect } from "react-redux";

class BuyProduct extends React.Component {
  constructor(props) {
    super(props);
    this.store = JSON.parse(localStorage.getItem("login"));
  }
  buyByID = () => {
    debugger;
    this.props.basket.map((b) => {
      this.token = `Bearer ${this.store.token}`;
      return fetch(
        `https://valentine-online-shop-api.herokuapp.com/shop/buy/${b._id}`,
        {
          method: "POST",
          headers: {
            Authorization: this.token,
          },
        }
      ).then((response) => {
        response.json().then((result) => {
          console.log(result);
        });
      });
    });
  };
  render() {
    return (
      <Checkout
        basket={this.props.basket}
        totalPrice={this.props.totalPrice}
        buyByID={this.buyByID}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    basket: state.header.basket,
    totalPrice: state.header.totalPrice,
  };
};

const CheckoutContainer = connect(mapStateToProps)(BuyProduct);

export default CheckoutContainer;
