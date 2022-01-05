import React from "react";
import SS2SideNewsImg from "./SS2CNews/SS2SideNews/SS2SideNewsImg";
import SS2sideNewsVid from "./SS2CNews/SS2SideNews/SS2sideNewsVid";

const SS2Side = () => {
  return (
    <div className="herald-sidebar col-lg-3 col-md-3 herald-sidebar-right">
      <div id="herald_posts_widget-8" className="widget herald_posts_widget">
        <h4 className="widget-title h6">
          <span>Media of the day</span>
        </h4>

        <div className="row">
          <SS2sideNewsVid/>
         <SS2SideNewsImg/>
        </div>
      </div>
      {/* ads appear here */}
      {/* <div className="herald-sticky">
        <div id="mks_ads_widget-12" className="widget mks_ads_widget">
          <ul className="mks_adswidget_ul large">
            <li data-showind="0">
              <div style={{ width: "300px", height: "250px" }}>
                <a href=";" className="mks-ep-trigger-open">
                  <img
                    src="https://mekshq.com/static/herald/td_herald_300.jpg"
                    alt="muneeb"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default SS2Side;
