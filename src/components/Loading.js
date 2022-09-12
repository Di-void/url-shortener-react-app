import React from "react";
import loadingImage from "../assets/images/preloader.gif";

const Loading = () => {
  return (
    <main className="loading-img">
      <img src={loadingImage} alt="loading" />
    </main>
  );
};

export default Loading;
