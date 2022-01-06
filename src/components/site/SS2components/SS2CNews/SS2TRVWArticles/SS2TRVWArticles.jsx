import moment from 'moment'
import React from 'react'

const SS2TRVWArticles = ({news}) => {
    return (
        <article
          className="
                      herald-lay-f
                      post-140 post
                      type-post
                      status-publish
                      format-standard
                      has-post-thumbnail
                      hentry
                      category-travel
                    "
        >
          <div className="herald-post-thumbnail herald-format-icon-middle">
            <a
              href="https://demo.mekshq.com/herald/?p=140"
              title="The top 10 traveling taboos you should break"
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
                href="https://demo.mekshq.com/herald/?cat=2"
                className="herald-cat-2"
              >
                Techonology
              </a>
            </span>

            <h2 className="entry-title h5">
              <a href="https://demo.mekshq.com/herald/?p=140">
                {news?.title}
              </a>
            </h2>
            <div className="entry-meta meta-small">
              <div className="meta-item herald-rtime">{moment(news?.publishedAt).startOf('hour').fromNow()}</div>
              <div className="meta-item herald-reviews">
                <div
                  className="
                              review-type-star
                              wp-review-show-total
                              wp-review-total-140
                              wp-review-total-star
                            "
                >
                  <div className="review-star">
                    <div
                      className="review-result-wrapper"
                      style={{ color: "#95bae0" }}
                    >
                      <i className="mts-icon-star"></i>
                      <i className="mts-icon-star"></i>
                      <i className="mts-icon-star"></i>
                      <i className="mts-icon-star"></i>
                      <i className="mts-icon-star"></i>

                      <div
                        className="review-result"
                        style={{ width: "95%", color: "#0288d1" }}
                      >
                        <i className="mts-icon-star"></i>
                        <i className="mts-icon-star"></i>
                        <i className="mts-icon-star"></i>
                        <i className="mts-icon-star"></i>
                        <i className="mts-icon-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
    )
}

export default SS2TRVWArticles
