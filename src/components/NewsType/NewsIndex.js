import React from "react";
import BreakingNews from "./BreakingNews";
import SideNews from "./SideNews";

const NewsIndex = () => {
  return (
    <div className="herald-section container" id="herald-section-1">
      <div className="row">
        
        <BreakingNews />
        <SideNews/>
      </div>
    </div>
  );
};

export default NewsIndex;
