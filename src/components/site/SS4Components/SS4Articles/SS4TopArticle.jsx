import moment from 'moment'
import React from 'react'

const SS4TopArticle = ({title,urlToImage,publishedAt,author}) => {
    return (
        <article
                  className="
                      herald-lay-a
                      post-197 post
                      type-post
                      status-publish
                      format-standard
                      has-post-thumbnail
                      hentry
                      category-sports
                    "
                >
                  <div className="herald-ovrld">
                    <div className="herald-post-thumbnail">
                      <a
                        href="https://demo.mekshq.com/herald/?p=197"
                        title="Learn to play golf by practicing 15 minutes a day"
                      >
                        <img
                          width="990"
                          height="556"
                          src={urlToImage}
                          className="
                              attachment-herald-lay-a
                              size-herald-lay-a
                              wp-post-image
                            "
                          alt=""
                          loading="lazy"
                          sizes="(max-width: 990px) 100vw, 990px"
                        />
                      </a>
                    </div>

                    <div className="entry-header herald-pf herald-clear-blur">
                      <span className="meta-category">
                        <a
                          href="https://demo.mekshq.com/herald/?cat=5"
                          className="herald-cat-5"
                        >
                          {author}
                        </a>
                      </span>

                      <h2 className="entry-title h2">
                        <a href="https://demo.mekshq.com/herald/?p=197">
                          {title}
                        </a>
                      </h2>
                      <div className="entry-meta">
                        <div className="meta-item herald-date">
                          <span className="updated">{moment(publishedAt).startOf('hour').fromNow()}</span>
                        </div>
                        <div className="meta-item herald-comments">
                          <a href="https://demo.mekshq.com/herald/?p=197#comments">
                            1 Comment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
    )
}

export default SS4TopArticle
