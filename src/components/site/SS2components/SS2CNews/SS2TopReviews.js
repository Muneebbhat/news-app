import React from "react";
import SS2TRVWArticles from "./SS2TRVWArticles/SS2TRVWArticles"

const SS2TopReviews = ({tech}) => {
  return (
    <div
      className="herald-module col-lg-12 col-md-12 col-sm-12"
      id="herald-module-1-6"
      data-col="12"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Techonology</h2>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height">
        {tech?.sort(function(){return .5 - Math.random()}).slice(0,6).map((News,index) => (
          <SS2TRVWArticles news={News} key={index} id={index}/>
        ))}
    
      </div>
    </div>
  );
};

export default SS2TopReviews;
