import React from "react";
import { connect } from "react-redux";
import Books from "./Books";
import {
  updateNewText,
  setInfo,
  sendInfoToTicket,
} from "../../../redux/contentReducer";

class BooksAPIComponent extends React.Component {
  orderRegistration = () => {
    window.location.replace("http://localhost:3000/ticket_registration");
  };

  addTicket = () => {
    fetch(
      `https://valentine-online-shop-api.herokuapp.com/flight?from=${this.props.newFromText}&to=${this.props.newToText}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      response.json().then((result) => {
        console.log(result);
        this.props.setInfo(result);
      });
    });
  };

  render() {
    return (
      <Books
        findFlight={this.props.findFlight}
        info={this.props.info}
        updateNewText={this.props.updateNewText}
        addTicket={this.addTicket}
        sendInfoToTicket={this.props.sendInfoToTicket}
        orderRegistration={this.orderRegistration}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    newFromText: state.content.newFromText,
    newToText: state.content.newToText,
    findFlight: state.content.findFlight,
    info: state.content.info,
  };
};

const BooksContainer = connect(mapStateToProps, {
  updateNewText,
  setInfo,
  sendInfoToTicket,
})(BooksAPIComponent);

export default BooksContainer;
