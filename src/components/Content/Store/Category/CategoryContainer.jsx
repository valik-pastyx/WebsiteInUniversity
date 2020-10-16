import React from "react";
import Category from "./Category";
import {
  hoverChange,
  updateNewSubText,
  subMenu,
  setGoods,
} from "../../../../redux/headerReducer";
import { connect } from "react-redux";

class getGoods extends React.Component {
  constructor(props) {
    super(props);
  }
  showProducts = () => {
    if (this.props.newEquipText != "") {
      fetch(
        `https://valentine-online-shop-api.herokuapp.com/shop?category=equipment&subcategory=${this.props.newEquipText}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      ).then((response) => {
        response.json().then((result) => {
          console.log(result);
          this.props.setGoods(result);
        });
      });
    } else if (this.props.newBootText != "") {
      fetch(
        `https://valentine-online-shop-api.herokuapp.com/shop?category=boots&subcategory=${this.props.newBootText}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      ).then((response) => {
        response.json().then((result) => {
          console.log(result);
          this.props.setGoods(result);
        });
      });
    } else if (this.props.newCampText != "") {
      fetch(
        `https://valentine-online-shop-api.herokuapp.com/shop?category=camp&subcategory=${this.props.newCampText}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      ).then((response) => {
        response.json().then((result) => {
          console.log(result);
          this.props.setGoods(result);
        });
      });
    } else if (this.props.newClothText != "") {
      fetch(
        `https://valentine-online-shop-api.herokuapp.com/shop?category=clothes&subcategory=${this.props.newClothText}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      ).then((response) => {
        response.json().then((result) => {
          console.log(result);
          this.props.setGoods(result);
        });
      });
    }
  };

  render() {
    return (
      <Category
        hover={this.props.hover}
        newEquipText={this.props.newEquipText}
        newBootText={this.props.newBootText}
        newCampText={this.props.newClothText}
        newClothText={this.props.newClothText}
        equipState={this.props.equipState}
        bootState={this.props.bootState}
        campState={this.props.campState}
        clothState={this.props.clothState}
        hoverChange={this.props.hoverChange}
        updateNewSubText={this.props.updateNewSubText}
        subMenu={this.props.subMenu}
        showProducts={this.showProducts}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    hover: state.header.hover,
    newEquipText: state.header.newEquipText,
    newBootText: state.header.newBootText,
    newCampText: state.header.newCampText,
    newClothText: state.header.newClothText,
    equipState: state.header.equipState,
    bootState: state.header.bootState,
    campState: state.header.campState,
    clothState: state.header.clothState,
  };
};

const CategoryContainer = connect(mapStateToProps, {
  hoverChange,
  updateNewSubText,
  subMenu,
  setGoods,
})(getGoods);

export default CategoryContainer;
