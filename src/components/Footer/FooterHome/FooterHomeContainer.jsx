import React from 'react';
import { addName, updateNewNameText } from '../../../redux/footerReducer';
import FooterHome from './FooterHome';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        navigation: state.footer.navigation,
        newName: state.footer.newName,
        newMail: state.footer.newMail,
        newMessage: state.footer.newMessage
    }
}

const FooterHomeContainer = connect(mapStateToProps, { updateNewNameText, addName })(FooterHome);

export default FooterHomeContainer;