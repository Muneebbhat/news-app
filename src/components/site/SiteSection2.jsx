import React from "react";
import SS2Main from "./SS2components/SS2Main";
import SS2Side from "./SS2components/SS2Side";

const SiteSection2 = ({topNews}) => {
  return (
    <div className="herald-section container" id="herald-section-1">
      <div className="row">
        <SS2Main News={topNews}/>
        {console.log(topNews,"helooo")}
        <SS2Side/>  
      </div>
    </div>
  );
};

export default SiteSection2;
