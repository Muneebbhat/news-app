import React from "react";
import SS2BArticle from "./SSCBArticle/SS2BArticle";

const SS2Breaking = ({news}) => {
  return (
    <div
      className="herald-module col-lg-12 col-md-12 col-sm-12"
      id="herald-module-1-0"
      data-col="12"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Breaking News</h2>
          </div>
        </div>
      </div>


      <div className="row herald-posts row-eq-height">
      {news?.slice(0,2)?.map((news, index)=>(
        <SS2BArticle topNews={news} key={index} id={index}/>
         
      ))}
        

        
      </div>
    </div>
  );
};

export default SS2Breaking;
