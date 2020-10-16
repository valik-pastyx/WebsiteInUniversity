import React from "react";
import css from "./App.module.css";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import BooksPage from "./pages/BooksPage";
import StorePage from './pages/StorePage';
import AccountPage from "./pages/AccountPage";

const App = () => {
  return (
    <div className={css.app}>
      <HomePage />
      <GalleryPage />
      <BooksPage />
      <StorePage />
      <AccountPage />
    </div>
  );
};

export default App;
