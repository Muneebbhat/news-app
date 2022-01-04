import React from "react";

const BreakingNews = ({breakNews}) => {
  return (
    <>
    <div className="herald-main-content col-lg-9 col-md-9 col-mod-main">
      <div className="row">
        <div
          className="herald-module col-lg-12 col-md-12 col-sm-12"
          id="herald-module-1-0"
          data-col="12"
        >
          <div className="herald-mod-wrap">
            <div className="herald-mod-head">
              <div className="herald-mod-title">
                <h2 className="h6 herald-mod-h herald-color">Breaking News</h2>
              </div>
            </div>
          </div>
          <div className="row herald-posts row-eq-height">
          {breakNews.slice(0,2).map((News) => (
      <article
      className="
              herald-lay-c
              post-191 post
              type-post
              status-publish
              format-standard
              has-post-thumbnail
              hentry
              category-food-and
            "
    >
      <div className="herald-post-thumbnail herald-format-icon-middle">
        <a
          href="https://demo.mekshq.com/herald/?p=191"
          title="Pasta is the secret ingredient for a healthy lifestyle"
        >
          <img
            width="470"
            height="264"
            src={News.urlToImage}
            className="
                    attachment-herald-lay-b
                    size-herald-lay-b
                    wp-post-image
                  "
            alt=""
            loading="lazy"
            sizes="(max-width: 470px) 100vw, 470px"
          />
        </a>
      </div>

      <div className="entry-header">
        <span className="meta-category">
          <a
            href="https://demo.mekshq.com/herald/?cat=4"
            className="herald-cat-4"
          >
          </a>
        </span>

        <h2 className="entry-title h3">
          <a href="https://demo.mekshq.com/herald/?p=191">
            {News.title}
            {console.log(News)}
          </a>
        </h2>
        <div className="entry-meta">
          <div className="meta-item herald-date">
            <span className="updated">1 week ago</span>
          </div>
          <div className="meta-item herald-author">
            <div className="coauthors couauthors-icon">
              <span className="vcard author">
                <span className="fn">
                  <a href="https://demo.mekshq.com/herald?author_name=meks1">
                    Patrick Callahan
                  </a>
                </span>
              </span>
              <span className="vcard author">
                <span className="fn">
                  <a href="https://demo.mekshq.com/herald?author_name=meks2">
                    Lisa Scholfield
                  </a>
                </span>
              </span>
              <span className="vcard author">
                <span className="fn">
                  <a href="https://demo.mekshq.com/herald?author_name=meks3">
                    John Bergstein
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="entry-content">
        <p>
          This is an example of a post with multiple authors to showcase
          full support with Co Authors Plus WordPress Plugin. Master
          cleanse mumblecore...
        </p>
      </div>
    </article>
      ))}
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default BreakingNews;
