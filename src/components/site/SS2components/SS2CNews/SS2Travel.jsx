import React from "react";
import SS2TRSubArticle from "./SS2TRArticles/SS2TRSubArticle.jsx";
import SS2TRTopArticle from "./SS2TRArticles/SS2TRTopArticle.jsx"

const SS2Travel = ({business}) => {
  return (
    <div
      className="herald-module col-lg-4 col-md-4 col-sm-4"
      id="herald-module-1-3"
      data-col="4"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head herald-cat-2">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Business</h2>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height">

        <SS2TRTopArticle News={business[0]}/>
        {business.slice(1,5).map((news,index) => (
          <SS2TRSubArticle News={news} key={index} id={index}/>
        ))}
       
        

        
      </div>
    </div>
  );
};

export default SS2Travel;
