import React from "react";
import { connect } from "react-redux";
import Basket from "./Basket";
import { setGoodToBasket, setPrice } from "../../redux/headerReducer";

class GoodInBasket extends React.Component {
  constructor(props) {
    super(props);
    this.store = JSON.parse(localStorage.getItem("login"));
    if (this.props.login) {
      this.reload = () => {
        this.token = `Bearer ${this.store.token}`;
        fetch(`https://valentine-online-shop-api.herokuapp.com/shop/cart`, {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        }).then((response) => {
          response.json().then((result) => {
            this.props.setGoodToBasket(result);
            console.log(result);
            this.showTotal();
          });
        });
      };
      this.reload();
    }
  }

  deleteGood = (id) => {
    this.token = `Bearer ${this.store.token}`;
    fetch(
      `https://valentine-online-shop-api.herokuapp.com/shop/cart/delete/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: this.token,
        },
      }
    );
    this.reload();
    this.reload();
  };

  showTotal = () => {
    const total = [];

    this.props.basket.forEach((item) => total.push(item.price));
    const countTotal = total.reduce(function (accumulator, currentValue) {
      accumulator += currentValue;
      return accumulator;
    }, 0);

    this.props.setPrice(countTotal);
  };

  render() {
    return (
      <Basket
        basket={this.props.basket}
        totalPrice={this.props.totalPrice}
        deleteGood={this.deleteGood}
        login={this.props.login}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    basket: state.header.basket,
    IDGood: state.header.IDGood,
    totalPrice: state.header.totalPrice,
    login: state.login.login,
  };
};

const BasketContainer = connect(mapStateToProps, { setGoodToBasket, setPrice })(
  GoodInBasket
);

export default BasketContainer;
