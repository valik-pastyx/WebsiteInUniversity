import React from "react";
import About from "../components/Content/Home/About";
import Blog from "../components/Content/Home/Blog";
import MainHome from "../components/Content/Home/MainHome";

const HomePage = () => {
  return (
    <div>
     <MainHome />
     <About />
     <Blog />
    </div>
  );
};

export default HomePage;