/* FOOTER FULL */
import linkedin from '../components/Footer/img/linkedin.png';
import instagram from '../components/Footer/img/instagram.png';
import twitter from '../components/Footer/img/twitter.png';
import facebook from '../components/Footer/img/facebook.png';


const ADD_NAME = "ADD-NAME";
const UPDATE_NEW_NAME_TEXT = "UPDATE-NEW-NAME-TEXT";

let initialState = {
    navigation: [
        { icon: instagram },
        { icon: linkedin },
        { icon: facebook },
        { icon: twitter },
    ],
    newName: '',
    newMail: '',
    newMessage: '',
    dataUser: []
}

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            let newUser = {
                name: state.newName,
                mail: state.newMail,
                message: state.newMessage
            };
            return {
                ...state,
                dataUser: [...state.dataUser, newUser],
                newName: "",
                newMail: "",
                newMessage: "",
            }
        case UPDATE_NEW_NAME_TEXT:
            return {
                ...state,
                newName: action.name,
                newMail: action.mail,
                newMessage: action.message
            }
        default:
            return state;
    }
};

export const addName = () => ({ type: ADD_NAME });
export const updateNewNameText = (name, mail, message) => ({
    type: UPDATE_NEW_NAME_TEXT, name, mail, message
});


export default footerReducer;