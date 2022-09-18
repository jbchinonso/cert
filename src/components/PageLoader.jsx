import React from "react";
import Loader from "react-js-loader";

function PageLoader() {
  return (
    <div className="loading_modal">
      <Loader
        type="spinner-cub"
        bgColor={"#fff"}
        title={""}
        color={"#000000"}
        size={100}
      />
    </div>
  );
}

export default PageLoader;
