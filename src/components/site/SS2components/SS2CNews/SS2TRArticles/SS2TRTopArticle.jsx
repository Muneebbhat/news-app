import moment from "moment";
import React from "react";


const SS2TRTopArticle = ({News}) => {
  return (
    <article
      className="
                      herald-lay-f herald-lay-f1
                      post-140 post
                      type-post
                      status-publish
                      format-standard
                      has-post-thumbnail
                      hentry
                      category-travel
                    "
    >
      <div className="herald-ovrld">
        <div className="herald-post-thumbnail">
          <a
            href="https://demo.mekshq.com/herald/?p=140"
            title="The top 10 traveling taboos you should break"
          >
            <img
              width="300"
              height="200"
              src={News?.urlToImage}
              className="
                              attachment-herald-lay-b1
                              size-herald-lay-b1
                              wp-post-image
                            "
              alt=""
              loading="lazy"
              sizes="(max-width: 300px) 100vw, 300px"
            />
          </a>
        </div>

        <div className="entry-header herald-clear-blur">
          <span className="meta-category">
            <a
              href="https://demo.mekshq.com/herald/?cat=2"
              className="herald-cat-2"
            >
              Business
            </a>
          </span>

          <h2 className="entry-title h6">
            <a href="https://demo.mekshq.com/herald/?p=140">
              {News?.title}
            </a>
          </h2>
          <div className="entry-meta">
            <div className="meta-item herald-date">
              <span className="updated">{moment(News?.publishedAt).startOf('hour').fromNow()}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default SS2TRTopArticle;
