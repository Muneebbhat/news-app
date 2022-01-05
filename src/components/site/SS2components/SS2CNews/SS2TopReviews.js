import React from "react";
import SS2TRVWArticles from "./SS2TRVWArticles/SS2TRVWArticles"

const SS2TopReviews = () => {
  return (
    <div
      className="herald-module col-lg-12 col-md-12 col-sm-12"
      id="herald-module-1-6"
      data-col="12"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Top Reviews</h2>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height">
        
    <SS2TRVWArticles/>
    <SS2TRVWArticles/>
    <SS2TRVWArticles/>
       
      </div>
    </div>
  );
};

export default SS2TopReviews;
