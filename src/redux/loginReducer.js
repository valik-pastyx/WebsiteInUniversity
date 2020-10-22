/* FOOTER FULL */
const UPDATE_NEW_TEXT_REG = "UPDATE-NEW-TEXT-REG";
const UPDATE_NEW_TEXT_ENTR = "UPDATE-NEW-TEXT-ENTR";
const LOGIN = "LOGIN";
const NAME_USER = "NAME-USER";
const SHOW_LOGIN = "SHOW-LOGIN";
const SHOW_REGISTRATION = "SHOW-REGISTRATION";

let initialState = {
  newNameText: "",
  newEmailText: "",
  newPasswordText: "",
  login: false,
  showL: false,
  showR: false,
  name: "",
};

const footerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_TEXT_REG:
      return {
        ...state,
        newNameText: action.name,
        newEmailText: action.email,
        newPasswordText: action.password,
      };
    case UPDATE_NEW_TEXT_ENTR:
      return {
        ...state,
        newEmailText: action.email,
        newPasswordText: action.password,
      };
    case LOGIN:
      return {
        ...state,
        login: action.login,
      };
    case NAME_USER:
      return {
        ...state,
        name: action.name,
      };
    case SHOW_LOGIN:
      return {
        ...state,
        showL: action.showL,
      };
    case SHOW_REGISTRATION:
      return {
        ...state,
        showR: action.showR,
      };
    default:
      return state;
  }
};

export const updateNewTextReg = (name, email, password) => ({
  type: UPDATE_NEW_TEXT_REG,
  name,
  email,
  password,
});
export const updateNewTextEntr = (email, password) => ({
  type: UPDATE_NEW_TEXT_ENTR,
  email,
  password,
});
export const loginStore = (login) => ({ type: LOGIN, login });
export const nameUser = (name) => ({ type: NAME_USER, name });
export const showLogin = (showL) => ({ type: SHOW_LOGIN, showL });
export const showRegistration = (showR) => ({ type: SHOW_REGISTRATION, showR });

export default footerReducer;
