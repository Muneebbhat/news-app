import moment from 'moment'
import React from 'react'

const SS3ArticleWI = ({title,publishedAt,urlToImage,}) => {
    return (
        <article
          className="
                herald-lay-i
                post-197 post
                type-post
                status-publish
                format-standard
                has-post-thumbnail
                hentry
                category-sports
              "
        >
          <div className="herald-post-thumbnail herald-format-icon-small">
            <a
              href="https://demo.mekshq.com/herald/?p=197"
              title="Learn to play golf by practicing 15 minutes a day"
            >
              <img
                width="300"
                height="168"
                src={urlToImage}
                className="
                      attachment-herald-lay-i-full
                      size-herald-lay-i-full
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
                href="https://demo.mekshq.com/herald/?cat=5"
                className="herald-cat-5"
              >
                Sports
              </a>
            </span>

            <h2 className="entry-title h6">
              <a href="https://demo.mekshq.com/herald/?p=197">
              {title}
              </a>
            </h2>
            <div className="entry-meta meta-small">
              <div className="meta-item herald-date">
                <span className="updated">{moment(publishedAt).startOf('hour').fromNow()}</span>
              </div>
            </div>
          </div>
        </article>
    )
}

export default SS3ArticleWI
