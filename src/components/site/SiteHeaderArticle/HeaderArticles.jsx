import moment from "moment";
import React from "react";

const HeaderArticles = ({New}) => {
  return (
    <article className="herald-fa-item herald-cat-2">
      <header className="entry-header">
        <span className="meta-category">
          <a
            href="https://demo.mekshq.com/herald/?cat=2"
            className="herald-cat-2"
          >
            Travel
          </a>
        </span>

        <h2 className="entry-title h6">
          <a href="https://demo.mekshq.com/herald/?p=157">
            <span className="herald-format-icon">
              <i className="fa fa-camera"></i>
            </span>
            {New?.title}
          </a>
        </h2>
        <div className="entry-meta">
          <div className="meta-item herald-date">
            <span className="updated">{moment(New?.publishedAt).startOf('hour').fromNow()}</span>
          </div>
          <div className="meta-item herald-comments">
            <a href="https://demo.mekshq.com/herald/?p=157#comments">
              6 Comments
            </a>
          </div>
        </div>

        <div className="entry-content">
          <p>
          {New?.description}
          </p>
        </div>

        <a href="/" className="fa-post-bg">
           
        </a>
      </header>

      <a
        className="fa-post-thumbnail"
        href="https://demo.mekshq.com/herald/?p=157"
        title="The simplest way to make the best of your vacation"
      >
        <img
          width="550"
          height="520"
          src={New?.urlToImage}
          className="
                                attachment-herald-lay-fa1-full
                                size-herald-lay-fa1-full
                                wp-post-image
                              "
          alt=""
          loading="lazy"
        />
      </a>
    </article>
  );
};

export default HeaderArticles;
