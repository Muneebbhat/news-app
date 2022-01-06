import React from 'react'

const SS2FNDSubArticles = ({news}) => {
    return (
        <article
          className="
                    herald-lay-g
                    post-187 post
                    type-post
                    status-publish
                    format-image
                    has-post-thumbnail
                    hentry
                    category-food-and
                    post_format-post-format-image
                  "
        >
          <div className="row">
            <div className="col-lg-4 col-xs-3 col-sm-4">
              <div className="herald-post-thumbnail">
                <a
                  href="https://demo.mekshq.com/herald/?p=187"
                  title="11 reasons why making your own food is essential"
                >
                  <img
                    width="74"
                    height="55"
                    src={news?.urlToImage}
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
                    href="https://demo.mekshq.com/herald/?cat=4"
                    className="herald-cat-4"
                  >
                    Science
                  </a>
                </span>

                <h2 className="entry-title h7">
                  <a href="https://demo.mekshq.com/herald/?p=187">
                    <span className="herald-format-icon">
                      <i className="fa fa-picture-o"></i>
                    </span>
                    {news?.title.slice(0,70)}...
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </article>
    )
}

export default SS2FNDSubArticles
