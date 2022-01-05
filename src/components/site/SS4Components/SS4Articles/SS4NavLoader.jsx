import React from "react";

const SS4NavLoader = () => {
  return (
    <nav className="herald-pagination herald-load-more">
      <a href="https://demo.mekshq.com/herald/?paged=2">Load More</a>
      <div className="herald-loader">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </nav>
  );
};

export default SS4NavLoader;
