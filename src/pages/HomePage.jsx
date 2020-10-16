import React from "react";
import { Route } from "react-router-dom";
import Home from '../components/Content/Home/Home';

const HomePage = () => {
  return (
    <div>
     <Route exact path="/" render={() => <Home />} />
    </div>
  );
};

export default HomePage;