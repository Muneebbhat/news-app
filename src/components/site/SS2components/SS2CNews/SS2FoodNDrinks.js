import React from "react";
import SS2FNDSubArticles from "./SS2FNDArticles/SS2FNDSubArticles";
import SS2FNDTopArticles from "./SS2FNDArticles/SS2FNDTopArticles";

const SS2FoodNDrinks = ({science}) => {
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
        <SS2FNDTopArticles news={science[0]}/>

        {science?.slice(1,5).map((News) => (
          <SS2FNDSubArticles news={News}/>
        ))}
        
      </div>
    </div>
  );
};

export default SS2FoodNDrinks;
