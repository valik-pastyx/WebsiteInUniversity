/* FOOTER FULL */
const UPDATE_NEW_TEXT_REG = "UPDATE-NEW-TEXT-REG";
const UPDATE_NEW_TEXT_ENTR = "UPDATE-NEW-TEXT-ENTR";
const LOGIN = "LOGIN";
const NAME_USER = "NAME-USER";

let initialState = {
    newNameText: '',
    newEmailText: '',
    newPasswordText: '',
    login: false,
    name: '',
}

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_TEXT_REG:
            return {
                ...state,
                newNameText: action.name,
                newEmailText: action.email,
                newPasswordText: action.password
            }
        case UPDATE_NEW_TEXT_ENTR:
            return {
                ...state,
                newEmailText: action.email,
                newPasswordText: action.password
            }
        case LOGIN:
            return {
                ...state,
                login: action.login,
            }
        case NAME_USER:
            return {
                ...state,
                name: action.name
            }
        default:
            return state;
    }
};

export const updateNewTextReg = (name, email, password) => ({
    type: UPDATE_NEW_TEXT_REG, name, email, password
});
export const updateNewTextEntr = (email, password) => ({
    type: UPDATE_NEW_TEXT_ENTR, email, password
});
export const loginStore = (login) => ({type: LOGIN, login});
export const nameUser = (name) => ({type: NAME_USER, name})

export default footerReducer;