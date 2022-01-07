import React from "react";
import SS2EArticles from "./SS2EArticles.jsx/SS2EArticles";

const SS2Entertainment = ({news}) => {
  return (
    <div
      className="herald-module col-lg-12 col-md-12 col-sm-12"
      id="herald-module-1-1"
      data-col="12"
    >

      <div className="herald-mod-wrap">
        <div className="herald-mod-head herald-cat-6">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">
              Entertainment
              <i
                className="fa fa-angle-down herald-sub-cat-icon"
                aria-hidden="true"
              ></i>
              <div className="herald-mod-subnav-mobile">
                <a href="https://demo.mekshq.com/herald/?cat=48">Celebrities</a>
                <a href="https://demo.mekshq.com/herald/?cat=43">Movies</a>
                <a href="https://demo.mekshq.com/herald/?cat=42">Music</a>
              </div>
            </h2>
          </div>
          <div className="herald-mod-subnav">
            <a href="https://demo.mekshq.com/herald/?cat=48">Celebrities</a>
            <a href="https://demo.mekshq.com/herald/?cat=43">Movies</a>
            <a href="https://demo.mekshq.com/herald/?cat=42">Music</a>
          </div>
          <div className="herald-mod-actions">
            <a
              className="herald-all-link"
              href="https://demo.mekshq.com/herald/?cat=6"
            >
              View All
            </a>
            <div
              className="herald-slider-controls"
              data-col="4"
              data-autoplay="0"
            ></div>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height herald-slider">
        {news.slice(0,9).map((News,index) => (
          <SS2EArticles news={News} key={index} id={index}/>
        ))}
        
        
        
      </div>
    </div>
  );
};

export default SS2Entertainment;
