import React from "react";

const SS4SideNav = () => {
  return (
    <div className="herald-sidebar col-lg-3 col-md-3 herald-sidebar-right">
      <div id="categories-3" className="widget widget_categories">
        <h4 className="widget-title h6">
          <span>All Topics</span>
        </h4>
        <ul>
          <li className="cat-item cat-item-48">
            <a href="https://demo.mekshq.com/herald/?cat=48">
              <span className="category-text">Celebrities</span>
              <span className="count">5</span>
            </a>
          </li>
          <li className="cat-item cat-item-6">
            <a href="https://demo.mekshq.com/herald/?cat=6">
              <span className="category-text">Entertainment</span>
              <span className="count">7</span>
            </a>
          </li>
          <li className="cat-item cat-item-3">
            <a href="https://demo.mekshq.com/herald/?cat=3">
              <span className="category-text">Fashion</span>
              <span className="count">7</span>
            </a>
          </li>
          <li className="cat-item cat-item-4">
            <a href="https://demo.mekshq.com/herald/?cat=4">
              <span className="category-text">Food &amp; Drinks</span>
              <span className="count">10</span>
            </a>
          </li>
          <li className="cat-item cat-item-43">
            <a href="https://demo.mekshq.com/herald/?cat=43">
              <span className="category-text">Movies</span>
              <span className="count">5</span>
            </a>
          </li>
          <li className="cat-item cat-item-42">
            <a href="https://demo.mekshq.com/herald/?cat=42">
              <span className="category-text">Music</span>
              <span className="count">5</span>
            </a>
          </li>
          <li className="cat-item cat-item-5">
            <a href="https://demo.mekshq.com/herald/?cat=5">
              <span className="category-text">Sports</span>
              <span className="count">9</span>
            </a>
          </li>
          <li className="cat-item cat-item-7">
            <a href="https://demo.mekshq.com/herald/?cat=7">
              <span className="category-text">Technology</span>
              <span className="count">7</span>
            </a>
          </li>
          <li className="cat-item cat-item-2">
            <a href="https://demo.mekshq.com/herald/?cat=2">
              <span className="category-text">Travel</span>
              <span className="count">7</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="herald-sticky">
        <div id="mks_ads_widget-10" className="widget mks_ads_widget">
          <ul className="mks_adswidget_ul custom">
            <li data-showind="0">
              <div style={{ width: "300px", height: "250px" }}>
                <a href="/" className="mks-ep-trigger-open">
                  <img
                    src="https://mekshq.com/static/herald/td_herald_300.jpg"
                    alt="muneeb"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SS4SideNav;
