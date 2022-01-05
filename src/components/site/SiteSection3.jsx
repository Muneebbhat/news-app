import React from "react";
import SS3PopularThisWeek from "./SS3Compnents/SS3PopularThisWeek";
import SS3SelectedProducts from "./SS3Compnents/SS3SelectedProducts";

const SiteSection3 = () => {
  return (
    <div
      className="herald-section container herald-no-sid"
      id="herald-section-2"
    >
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
          
            <SS3PopularThisWeek />
            <SS3SelectedProducts />

          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSection3;
