import React from "react";
import SS2FNDSubArticles from "./SS2FNDArticles/SS2FNDSubArticles";
import SS2FNDTopArticles from "./SS2FNDArticles/SS2FNDTopArticles";

const SS2FoodNDrinks = () => {
  return (
    <div
      className="herald-module col-lg-4 col-md-4 col-sm-4"
      id="herald-module-1-5"
      data-col="4"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head herald-cat-4">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Food & Drinks</h2>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height">
        <SS2FNDTopArticles/>

        <SS2FNDSubArticles/>
        <SS2FNDSubArticles/>
        <SS2FNDSubArticles/>
        <SS2FNDSubArticles/>

        
      </div>
    </div>
  );
};

export default SS2FoodNDrinks;
