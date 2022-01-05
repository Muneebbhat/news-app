import React from "react";
import SS2TRSubArticle from "./SS2TRArticles/SS2TRSubArticle.jsx";
import SS2TRTopArticle from "./SS2TRArticles/SS2TRTopArticle.jsx"

const SS2Travel = () => {
  return (
    <div
      className="herald-module col-lg-4 col-md-4 col-sm-4"
      id="herald-module-1-3"
      data-col="4"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head herald-cat-2">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Travel</h2>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height">
        <SS2TRTopArticle/>
        <SS2TRSubArticle/>
        <SS2TRSubArticle/>
        <SS2TRSubArticle/>
        <SS2TRSubArticle/>
        

        
      </div>
    </div>
  );
};

export default SS2Travel;
