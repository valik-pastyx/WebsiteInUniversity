import { addName, updateNewNameText } from "../../redux/footerReducer";
import { connect } from "react-redux";
import Footer from "./Footer";

let mapStateToProps = (state) => {
  return {
    navigation: state.footer.navigation,
    newName: state.footer.newName,
    newMail: state.footer.newMail,
    newMessage: state.footer.newMessage,
  };
};

const FooterContainer = connect(mapStateToProps, {
  updateNewNameText,
  addName,
})(Footer);

export default FooterContainer;
