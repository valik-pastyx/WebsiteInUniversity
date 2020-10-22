import React from "react";
import Account from "./Account";
import { connect } from "react-redux";
import {
  addDataUser,
  changeIcon,
} from "../../redux/contentReducer";

class UserData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Account
        hoverOnMenu={this.props.hoverOnMenu}
        dataUser={this.props.dataUser}
        changeIcon={this.props.changeIcon}
        hoverOnTicket={this.props.hoverOnTicket}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dataUser: state.content.dataUser,
    hoverOnTicket: state.content.hoverOnTicket,
  };
};

const AccountContainer = connect(mapStateToProps, {
  addDataUser,
  changeIcon,
})(UserData);

export default AccountContainer;
