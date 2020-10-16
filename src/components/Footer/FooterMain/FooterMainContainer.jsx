import React from "react";
import { addName, updateNewNameText } from "../../../redux/footerReducer";
import FooterMain from "./FooterMain";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    navigation: state.footer.navigation,
    newName: state.footer.newName,
    newMail: state.footer.newMail,
    newMessage: state.footer.newMessage,
  };
};

const FooterMainContainer = connect(mapStateToProps, {
  updateNewNameText,
  addName,
})(FooterMain);

export default FooterMainContainer;
