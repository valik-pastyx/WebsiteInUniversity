/* FOOTER FULL */
const ADD_NAME = "ADD-NAME";
const UPDATE_NEW_NAME_TEXT = "UPDATE-NEW-NAME-TEXT";

let initialState = {
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