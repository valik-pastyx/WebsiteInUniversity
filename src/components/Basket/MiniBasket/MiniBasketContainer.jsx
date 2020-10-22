import React from "react";
import MiniBasket from "./MiniBasket";
import { connect } from "react-redux";
import { changeBasket, setGoodToBasket } from "../../../redux/headerReducer";
import { loginStore } from "../../../redux/loginReducer";

class GoodInBasket extends React.Component {
  constructor(props) {
    super(props);
    this.store = JSON.parse(localStorage.getItem("login"));
    if (this.store && this.store.login) {
      this.props.loginStore(this.store.login);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.basket === prevProps.basket) {
      if (this.props.login) {
        this.token = `Bearer ${this.store.token}`;
        fetch(`https://valentine-online-shop-api.herokuapp.com/shop/cart`, {
          method: "GET",
          headers: {
            Authorization: this.token,
          },
        })
          .then((response) => {
            response.json().then((result) => {
              this.props.setGoodToBasket(result);
            });
          })
          .catch((error) => {
            alert(error);
          });
      }
    }
  }

  render() {
    return (
      <MiniBasket
        hoverBasket={this.props.hoverBasket}
        changeBasket={this.props.changeBasket}
        basket={this.props.basket}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    hoverBasket: state.header.hoverBasket,
    basket: state.header.basket,
    login: state.login.login,
  };
};

const MiniBasketContainer = connect(mapStateToProps, {
  changeBasket,
  setGoodToBasket,
  loginStore,
})(GoodInBasket);

export default MiniBasketContainer;
