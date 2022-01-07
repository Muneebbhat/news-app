import moment from 'moment'
import React from 'react'

const SS3ArticleWOI = ({title,publishedAt}) => {
    return (
        <article
          className="
                herald-lay-j
                post-201 post
                type-post
                status-publish
                format-standard
                has-post-thumbnail
                hentry
                category-technology
              "
        >
          <div className="entry-header">
            <span className="meta-category meta-small">
              <a
                href="https://demo.mekshq.com/herald/?cat=7"
                className="herald-cat-7"
              >
                Sports
              </a>
            </span>

            <h2 className="entry-title h7">
              <a href="https://demo.mekshq.com/herald/?p=201">
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

export default SS3ArticleWOI
