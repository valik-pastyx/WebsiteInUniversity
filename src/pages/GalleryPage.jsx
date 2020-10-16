import React from "react";
import { Route } from "react-router-dom";
import Gallery from '../components/Content/Gallery/Gallery';

const GalleryPage = () => {
  return (
    <div>
     <Route path="/gallery" render={() => <Gallery />} />
    </div>
  );
};

export default GalleryPage;