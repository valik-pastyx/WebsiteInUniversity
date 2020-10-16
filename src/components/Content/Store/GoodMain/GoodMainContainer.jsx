import React from "react";
import GoodMain from "./GoodMain";
import { connect } from "react-redux";
import { setGoods, setOneGood } from "../../../../redux/headerReducer";

let mapStateToProps = (state) => {
  return {
    newEquipText: state.header.newEquipText,
    newBootText: state.header.newBootText,
    newCampText: state.header.newCampText,
    newClothText: state.header.newClothText,
    goods: state.header.goods,
  };
};

const GoodMainContainer = connect(mapStateToProps, { setGoods, setOneGood })(
  GoodMain
);

export default GoodMainContainer;
