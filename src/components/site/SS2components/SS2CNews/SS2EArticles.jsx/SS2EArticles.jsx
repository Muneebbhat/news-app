import React from "react";

const SS2EArticles = ({news}) => {
  return (
    <article
      className="
                      herald-lay-f
                      post-171 post
                      type-post
                      status-publish
                      format-standard
                      has-post-thumbnail
                      hentry
                      category-entertainment
                      tag-blog tag-music-2 tag-studio
                    "
    >
      <div className="herald-post-thumbnail herald-format-icon-middle">
        <a
          href="https://demo.mekshq.com/herald/?p=171"
          title={news?.title}
        >
          <img
            width="300"
            height="168"
            src={news?.urlToImage}
            className="
                            attachment-herald-lay-f
                            size-herald-lay-f
                            wp-post-image
                          "
            alt=""
            loading="lazy"
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </a>
      </div>

      <div className="entry-header">
        <span className="meta-category meta-small">
          <a
            href="https://demo.mekshq.com/herald/?cat=6"
            className="herald-cat-6"
          >
            Entertainment
          </a>
        </span>

        <h2 className="entry-title h5">
          <a href="https://demo.mekshq.com/herald/?p=171">
            {news?.title}
          </a>
        </h2>
        <div className="entry-meta meta-small">
          <div className="meta-item herald-rtime"> </div>
        </div>
      </div>
    </article>
  );
};
export default SS2EArticles;
