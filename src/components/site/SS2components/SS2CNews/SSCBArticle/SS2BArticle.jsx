import moment from 'moment'
import React from 'react'

const SS2BArticle = ({topNews}) => {
    return (
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
                src={topNews?.urlToImage}
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
                Breaking News
              </a>
            </span>

            <h2 className="entry-title h3">
              <a href="https://demo.mekshq.com/herald/?p=191">
                {topNews?.title}

              </a>
            </h2>
            <div className="entry-meta">
              <div className="meta-item herald-date">
                <span className="updated">{moment(topNews?.publishedAt).startOf('hour').fromNow()}</span>
              </div>
              <div className="meta-item herald-author">
                <div className="coauthors couauthors-icon">
                  <span className="vcard author">
                    <span className="fn">
                      <a href="https://demo.mekshq.com/herald?author_name=meks1">
                      {topNews?.author}
                      </a>
                    </span>
                  </span>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="entry-content">
            <p>
              {topNews?.content?.slice(0,150)}...
            </p>
          </div>
        </article>
    )
}

export default SS2BArticle
