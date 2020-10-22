import React from "react";
import css from "./App.module.css";
import HomePage from "./pages/HomePage";
import BooksPage from "./pages/BooksPage";
import StorePage from "./pages/StorePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import FooterContainer from "./components/Footer/FooterContainer";
import Gallery from "./components/Content/Gallery/Gallery";
import NavibarContainer from "./components/Header/Navibar/NavibarContainer";
import StoreHeader from "./components/Header/StoreHeader/StoreHeader";
import AccountContainer from "./components/Account/AccountContainer";

const App = () => {
  return (
    <div className={css.app}>
      <NavibarContainer />
      <StoreHeader />
      <Route exact path="/" render={() => <HomePage />} />
      <Route path="/gallery" render={() => <Gallery />} />
      <BooksPage />
      <StorePage />
      <Route path="/account" render={() => <AccountContainer />} />
      <FooterContainer />
    </div>
  );
};

export default App;
