import React from "react";
import SS2FsnSubArticles from "./SS2FSNArticles/SS2FsnSubArticles";
import SS2FsnTopArticles from "./SS2FSNArticles/SS2FsnTopArticles";

const SS2Fashion = ({health}) => {
  return (
    <div
      className="herald-module col-lg-4 col-md-4 col-sm-4"
      id="herald-module-1-4"
      data-col="4"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head herald-cat-3">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Health</h2>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height">
        <SS2FsnTopArticles news={health[0]}/>
        {health?.slice(1,5).map((News,index) => (
          <SS2FsnSubArticles news={News} key={index} id={index}/>

        ))}
        

        
      </div>
    </div>
  );
};

export default SS2Fashion;
