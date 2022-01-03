import React from "react";

const SideNews = () => {
  return (
    <div className="herald-sidebar col-lg-3 col-md-3 herald-sidebar-right">
      <div id="herald_posts_widget-8" className="widget herald_posts_widget">
        <h4 className="widget-title h6">
          <span>Media of the day</span>
        </h4>

        <div className="row">
          <article
            className="
                herald-lay-f
                post-61 post
                type-post
                status-publish
                format-video
                has-post-thumbnail
                hentry
                category-travel
                tag-company-culture tag-environment-2
                post_format-post-format-video
              "
          >
            <div className="herald-post-thumbnail herald-format-icon-middle">
              <a
                href="https://demo.mekshq.com/herald/?p=61"
                title="Add some flair to your relationship: go hiking together"
              >
                <img
                  width="300"
                  height="168"
                  src="https://mksdmcdn-9b59.kxcdn.com/herald/wp-content/uploads/2015/11/herald058-300x168.jpg"
                  className="
                      attachment-herald-lay-f
                      size-herald-lay-f
                      wp-post-image
                    "
                  alt=""
                  loading="lazy"
                />
                <span className="herald-format-icon">
                  <i className="fa fa-play"></i>
                </span>
              </a>
            </div>

            <div className="entry-header">
              <h2 className="entry-title h5">
                <a href="https://demo.mekshq.com/herald/?p=61">
                  Add some flair to your relationship: go hiking together
                </a>
              </h2>
            </div>
          </article>
          {/* <article
              className="
                herald-lay-f
                post-134 post
                type-post
                status-publish
                format-gallery
                has-post-thumbnail
                hentry
                category-fashion
                tag-fashoin tag-future tag-magazine
                post_format-post-format-gallery
              "
            >
              <div className="herald-post-thumbnail herald-format-icon-middle">
                <a
                  href="https://demo.mekshq.com/herald/?p=134"
                  title="Thinking about a new haircut? These 6 styles will get you started"
                >
                  <img
                    width="300"
                    height="168"
                    src="https://mksdmcdn-9b59.kxcdn.com/herald/wp-content/uploads/2015/11/herald134-300x168.jpg"
                    className="
                      attachment-herald-lay-f
                      size-herald-lay-f
                      wp-post-image
                    "
                    alt=""
                    loading="lazy"
                  />
                  <span className="herald-format-icon"
                    ><i className="fa fa-camera"></i
                  ></span>
                </a>
              </div>

              <div className="entry-header">
                <h2 className="entry-title h5">
                  <a href="https://demo.mekshq.com/herald/?p=134"
                    >Thinking about a new haircut? These 6 styles will get
                    you started</a
                  >
                </h2>
              </div>
            </article> */}
        </div>
      </div>
      {/* <div className="herald-sticky">
          <div id="mks_ads_widget-12" className="widget mks_ads_widget">
            <ul className="mks_adswidget_ul large">
              <li data-showind="0">
                <div style="width: 300px; height: 250px">
                  <a href="javascript:void(0);" className="mks-ep-trigger-open"
                    ><img
                      src="https://mekshq.com/static/herald/td_herald_300.jpg"
                  /></a>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
    </div>
  );
};

export default SideNews;
