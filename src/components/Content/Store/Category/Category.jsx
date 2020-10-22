import React from 'react';
import css from './Category.module.css';
import { NavLink } from 'react-router-dom';

const Category = (props) => {

    const eqip = React.createRef();
    const boot = React.createRef();
    const camp = React.createRef();
    const cloth = React.createRef();
    const onTextChange = () => {
      let e = eqip.current.value;
      let b = boot.current.value;
      let ca = camp.current.value;
      let cl = cloth.current.value;
      props.updateNewSubText(e, b, ca, cl);
    };
  
    return (
      <div className={css.category}>
        <div
          className={css.menu}
          onMouseEnter={() => props.hoverChange(!props.hover)}
          onMouseLeave={() => props.hoverChange(props.hover)}
        >
          <div className={css.burger}></div>
        </div>
        <div
          className={props.hover ? css.categories : css.categoriesFixed}
          onMouseEnter={() => props.hoverChange(props.hover)}
          onMouseLeave={() => props.hoverChange(!props.hover)}
        >
          <div className={css.equipment}>
            <h3 onClick={ () => props.subMenu(!props.equipState, false, false, false)} >Equipment</h3>
            <NavLink to="/good_main" className={props.equipState ? css.subcategories : css.subcategoriesNon}> 
              <select
                multiple
                size="4"
                ref={eqip}
                onChange={onTextChange}
                value={props.newEquipText}
                onClick={() => props.showProducts()}
              >
                <option value="backpack">backpack</option>
                <option value="flashlight">flashlight</option>
                <option value="helmets">helmets</option>
                <option value="carabines,ropes and ice axes">
                  carabines,ropes and ice axes
                </option>
              </select>
            </NavLink>
          </div>
          <div className={css.boots}>
            <h3 onClick={ () => props.subMenu(false, !props.bootState, false, false)} >Boots</h3>
            <NavLink to="/good_main" className={props.bootState === true ? css.subcategories : css.subcategoriesNon}>
              <select
                multiple
                size="3"
                ref={boot}
                onChange={onTextChange}
                value={props.newBootText}
                onClick={() => props.showProducts()}
              >
                <option value="boots">boots</option>
                <option value="sneakers">sneakers</option>
                <option value="sandals">sandals</option>
              </select>
            </NavLink>
          </div>
          <div className={css.camp}>
            <h3 onClick={ () => props.subMenu(false, false, !props.campState, false)} >Camp</h3>
            <NavLink to="/good_main" className={props.campState === true ? css.subcategories : css.subcategoriesNon}>
              <select
                multiple
                size="4"
                ref={camp}
                onChange={onTextChange}
                value={props.newCampText}
                onClick={() => props.showProducts()}
              >
                <option value="tents">tents</option>
                <option value="sleeping bags">sleeping bags</option>
                <option value="camping utensils">camping utensils</option>
                <option value="camping furniture">camping furniture</option>
              </select>
            </NavLink>
          </div>
          <div className={css.clothes}>
            <h3 onClick={ () => props.subMenu(false, false, false, !props.clothState)} >Clothes</h3>
            <NavLink to="/good_main" className={props.clothState === true ? css.subcategories : css.subcategoriesNon}>
              <select
                multiple
                size="4"
                ref={cloth}
                onChange={onTextChange}
                value={props.newClothText}
                onClick={() => props.showProducts()}
              >
                <option value="thermal underwear">thermal underwear</option>
                <option value="hats">hats</option>
                <option value="gloves">gloves</option>
                <option value="fleece">fleece</option>
              </select>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  export default Category;