import React from "react";
import SS2FsnSubArticles from "./SS2FSNArticles/SS2FsnSubArticles";
import SS2FsnTopArticles from "./SS2FSNArticles/SS2FsnTopArticles";

const SS2Fashion = () => {
  return (
    <div
      className="herald-module col-lg-4 col-md-4 col-sm-4"
      id="herald-module-1-4"
      data-col="4"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head herald-cat-3">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Fashion</h2>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height">
        <SS2FsnTopArticles/>

        <SS2FsnSubArticles/>
        <SS2FsnSubArticles/>
        <SS2FsnSubArticles/>
        <SS2FsnSubArticles/>

        
      </div>
    </div>
  );
};

export default SS2Fashion;
