import React from "react";
import { Route } from "react-router-dom";
import StoreContainer from "../components/Content/Store/StoreContainer";
import GoodMainContainer from "../components/Content/Store/GoodMain/GoodMainContainer";
import GoodOneContainer from "../components/Content/Store/GoodOne/GoodOneContainer";
import BasketContainer from "../components/Basket/BasketContainer";
import CheckoutContainer from "../components/Basket/Checkout/CheckoutContainer";

const StorePage = () => {
  return (
    <div>
      <Route path="/store" render={() => <StoreContainer />} />
      <Route path="/good_main" render={() => <GoodMainContainer />} />
      <Route path="/good_one" render={() => <GoodOneContainer />} />
      <Route path="/basket" render={() => <BasketContainer />} />
      <Route path="/checkout" render={() => <CheckoutContainer />} />
    </div>
  );
};

export default StorePage;
