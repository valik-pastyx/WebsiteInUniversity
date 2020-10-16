const UPDATE_NEW_TEXT = "UPDATE-NEW-TEXT";
const SET_INFO = "SET-INFO";
const SEND_INFO_TO_TICKET = "SEND-INFO-TO-TICKET";
const ADD_DATA_USER = "ADD-DATA-USER";
const CHANEG_ICON = "CHANEG-ICON";
const SHOW_MENU = "SHOW-MENU";

let initialState = {
  findFlight: [],
  info: [],
  dataUser: {},
  newFromText: "",
  newToText: "",
  hoverOnTicket: false,
  hoverOnMenu: false,
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_TEXT:
      return {
        ...state,
        newFromText: action.from,
        newToText: action.to,
      };
    case SET_INFO:
      return {
        ...state,
        findFlight: action.info,
      };
    case SEND_INFO_TO_TICKET:
      return {
        ...state,
        info: [
          action.fromInfo,
          action.toInfo,
          action.dateInfo,
          action.timeInfo,
          action.priceInfo,
          action.IDinfo
        ],
      };
    case ADD_DATA_USER:
      return {
        ...state,
        dataUser: action.data,
      };
    case CHANEG_ICON:
      return {
        ...state,
        hoverOnTicket: action.choiceIcon,
      }
    case SHOW_MENU:
      return {
        ...state,
        hoverOnMenu: action.menu,
      }
    default:
      return state;
  }
};

export const updateNewText = (from, to) => ({
  type: UPDATE_NEW_TEXT,
  from,
  to,
});
export const setInfo = (info) => ({ type: SET_INFO, info });
export const sendInfoToTicket = (
  fromInfo,
  toInfo,
  dateInfo,
  timeInfo,
  priceInfo,
  IDinfo
) => ({
  type: SEND_INFO_TO_TICKET,
  fromInfo,
  toInfo,
  dateInfo,
  timeInfo,
  priceInfo,
  IDinfo
});
export const addDataUser = (data) => ({ type: ADD_DATA_USER, data });
export const changeIcon = (choiceIcon) => ({ type: CHANEG_ICON, choiceIcon });
export const changeMenu = (menu) => ({type: SHOW_MENU, menu});

export default contentReducer;
