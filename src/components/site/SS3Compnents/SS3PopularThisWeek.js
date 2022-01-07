import React from "react";
import SS3ArticleWI from "./SS3News/SS3ArticleWI";
import SS3ArticleWOI from "./SS3News/SS3ArticleWOI";

const SS3PopularThisWeek = ({SportsNews}) => {
  return (
    <div
      className="herald-module col-lg-12 col-md-12 col-sm-12"
      id="herald-module-2-0"
      data-col="12"
    >
      <div className="herald-mod-wrap">
        <div className="herald-mod-head">
          <div className="herald-mod-title">
            <h2 className="h6 herald-mod-h herald-color">Sports</h2>
          </div>
        </div>
      </div>
      <div className="row herald-posts row-eq-height">
      {SportsNews?.slice(0,12)?.map((news) =>(
        <SS3ArticleWI {...news}/>
      ))}
        
        
        {SportsNews?.slice(12,16)?.map((news)=>(
          <SS3ArticleWOI {...news}/>
        ))}
       

      </div>
    </div>
  );
};

export default SS3PopularThisWeek;
