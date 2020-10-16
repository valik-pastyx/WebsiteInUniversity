import React from "react";
import { connect } from "react-redux";
import TicketRegistration from "./TicketRegistration";

class SendTicket extends React.Component {
  constructor(props) {
    super(props);
    this.store = JSON.parse(localStorage.getItem("login"));
  }

  send = () => {
    this.token = `Bearer ${this.store.token}`;
    fetch(
      `https://valentine-online-shop-api.herokuapp.com/flight/book/${this.props.info[5]}`,
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
      <TicketRegistration
        navigation={this.props.navigation}
        info={this.props.info}
        send={this.send}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    navigation: state.footer.navigation,
    info: state.content.info,
  };
};

const TicketRegistrationContainer = connect(mapStateToProps)(SendTicket);

export default TicketRegistrationContainer;
