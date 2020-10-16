/* HEADER FULL */
import instagram from "../components/Footer/img/instagram.png";
import twitter from "../components/Footer/img/twitter.png";
import facebook from "../components/Footer/img/facebook.png";

const CHANGE_HOVER = "CHANGE-HOVER";
const UPDATE_NEW_SUB_TEXT = "UPDATE-NEW-SUB-TEXT";
const SET_GOODS = "SET-GOODS";
const SET_ONE_GOOD = "SET-ONE-GOOD";
const SUB_MENU = "SUB-MENU";
const CHANGE_BASKET = "CHANGE-BASKET";
const SET_GOOD_TO_BASKET = "SET-GOOD-TO-BASKET";
const SET_PRICE = "SET-PRICE";

let initialState = {
  homePageHeader: {
    socnetwork: [{ icon: instagram }, { icon: twitter }, { icon: facebook }],
  },
  hover: false,
  hoverBasket: false,
  newEquipText: "",
  newBootText: "",
  newCampText: "",
  newClothText: "",
  goods: [],
  oneGood: [],
  equipState: false,
  bootState: false,
  campState: false,
  clothState: false,
  basket: [],
  totalPrice: [],
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HOVER:
      return {
        ...state,
        hover: action.changeHover,
      };
    case UPDATE_NEW_SUB_TEXT:
      return {
        ...state,
        newEquipText: action.equip,
        newBootText: action.boot,
        newCampText: action.camp,
        newClothText: action.cloth,
      };
    case SET_GOODS:
      return {
        ...state,
        goods: action.good,
      };
    case SET_ONE_GOOD:
      return {
        ...state,
        oneGood: [
          action.tit,
          action.pri,
          action.des,
          action.siz,
          action.ima,
          action.id,
        ],
      };
    case SUB_MENU:
      return {
        ...state,
        equipState: action.eq,
        bootState: action.bo,
        campState: action.ca,
        clothState: action.cl,
      };
    case CHANGE_BASKET:
      return {
        ...state,
        hoverBasket: action.change,
      };
    case SET_GOOD_TO_BASKET:
      return {
        ...state,
        basket: action.good,
      };
    case SET_PRICE:
      return {
        ...state,
        totalPrice: action.price,
      };
    default:
      return state;
  }
};

export const hoverChange = (changeHover) => ({
  type: CHANGE_HOVER,
  changeHover,
});
export const updateNewSubText = (equip, boot, camp, cloth) => ({
  type: UPDATE_NEW_SUB_TEXT,
  equip,
  boot,
  camp,
  cloth,
});
export const setGoods = (good) => ({ type: SET_GOODS, good });
export const setOneGood = (tit, pri, des, siz, ima, id) => ({
  type: SET_ONE_GOOD,
  tit,
  pri,
  des,
  siz,
  ima,
  id,
});
export const subMenu = (eq, bo, ca, cl) => ({ type: SUB_MENU, eq, bo, ca, cl });
export const changeBasket = (change) => ({ type: CHANGE_BASKET, change });
export const setGoodToBasket = (good) => ({ type: SET_GOOD_TO_BASKET, good });
export const setPrice = (price) => ({ type: SET_PRICE, price });

export default headerReducer;
