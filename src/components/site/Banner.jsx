import React from "react";
import HeaderArticles from "./SiteHeaderArticle/HeaderArticles";

const SiteHeader = ({topNews}) => {
  return (
    <div
      className="herald-section container herald-no-sid"
      id="herald-section-0"
    >
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <div
              className="herald-module col-lg-12 col-md-12 col-sm-12"
              id="herald-module-0-0"
            >
              <div className="herald-fa-wrapper herald-fa-2">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="herald-fa-list">
                    {topNews?.sort(function(){return .5 - Math.random()}).slice(0,4).map((News) =>(
                      <HeaderArticles New={News}/>
                    ))}
                      

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
