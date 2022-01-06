import React from "react";

const SS2TRSubArticle = ({News}) => {
  return (
    <article
      className="
                      herald-lay-g
                      post-125 post
                      type-post
                      status-publish
                      format-standard
                      has-post-thumbnail
                      hentry
                      category-travel
                      tag-company tag-eco tag-environment-2
                    "
    >
      <div className="row">
        <div className="col-lg-4 col-xs-3 col-sm-4">
          <div className="herald-post-thumbnail">
            <a
              href="https://demo.mekshq.com/herald/?p=125"
              title="Why do people think the beach is a good idea?"
            >
              <img
                width="74"
                height="55"
                src={News?.urlToImage}
                className="
                                attachment-herald-lay-g1
                                size-herald-lay-g1
                                wp-post-image
                              "
                alt=""
                loading="lazy"
                sizes="(max-width: 74px) 100vw, 74px"
              />
            </a>
          </div>
        </div>

        <div className="col-lg-8 col-xs-9 col-sm-8 herald-no-pad">
          <div className="entry-header">
            <span className="meta-category meta-small">
              <a
                href="https://demo.mekshq.com/herald/?cat=2"
                className="herald-cat-2"
              >
                Business
              </a>
            </span>

            <h2 className="entry-title h7">
              <a href="https://demo.mekshq.com/herald/?p=125">
                {News?.title.slice(0,50)}
              </a>
            </h2>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SS2TRSubArticle;
