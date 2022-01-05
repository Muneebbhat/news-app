import React from "react";
import SS4MainArticles from "./SS4Components/SS4MainArticles";
import SS4SideNav from "./SS4Components/SS4SideNav";

const SiteSection4 = () => {
  return (
    <div className="herald-section container" id="herald-section-3">
      <div className="row">
        <SS4MainArticles />
        <SS4SideNav />
      </div>
    </div>
  );
};

export default SiteSection4;
