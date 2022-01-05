import React from "react";
import SS3SPArticles from "./SS3SProducts/SS3SPArticles";

const SS3SelectedProducts = () => {
  return (
    <div
      className="herald-module col-lg-12 col-md-12 col-sm-12"
      id="herald-module-2-1"
      data-col="12"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Selected Products</h2>
          </div>
          <div className="herald-mod-actions">
            <div
              className="herald-slider-controls"
              data-col="3"
              data-autoplay="0"
            ></div>
          </div>
        </div>
      </div>

      <div className="row herald-posts row-eq-height herald-slider">
        

        <SS3SPArticles/>
        <SS3SPArticles/>
        <SS3SPArticles/>
        <SS3SPArticles/>
        <SS3SPArticles/>
        <SS3SPArticles/>
        <SS3SPArticles/>
        <SS3SPArticles/>

        
      </div>
    </div>
  );
};

export default SS3SelectedProducts;
