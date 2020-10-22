import React from "react";
import { Route } from "react-router-dom";
import GoodMainContainer from "../components/Content/Store/GoodMain/GoodMainContainer";
import GoodOneContainer from "../components/Content/Store/GoodOne/GoodOneContainer";
import BasketContainer from "../components/Basket/BasketContainer";
import CheckoutContainer from "../components/Basket/Checkout/CheckoutContainer";
import StoreHeader from "../components/Header/StoreHeader/StoreHeader";
import Store from "../components/Content/Store/Store";

const StorePage = () => {
  return (
    <>
      <Route path="/store" render={() => <Store />} />
      <Route path="/good_main" render={() => <GoodMainContainer />} />
      <Route path="/good_one" render={() => <GoodOneContainer />} />
      <Route path="/basket" render={() => <BasketContainer />} />
      <Route path="/checkout" render={() => <CheckoutContainer />} />
    </>
  );
};

export default StorePage;
