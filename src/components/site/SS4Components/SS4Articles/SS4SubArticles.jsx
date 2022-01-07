import React, { useState } from 'react'
import moment from "moment"

const SS4SubArticles = ({title,urlToImage, description,content,author, publishedAt}) => {
  // const [counter, setcounter] = useState(100)
  const [read, setRead] = useState(false)
  const increase = () =>{
    setRead(!read)
    // setcounter(counter + 500)
  }
    return (
        <article
                  className="
                      herald-lay-b
                      post-174 post
                      type-post
                      status-publish
                      format-standard
                      has-post-thumbnail
                      hentry
                      category-food-and
                    "
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                      <div
                        className="
                            herald-post-thumbnail herald-format-icon-middle
                          "
                      >
                        <a
                          href="https://demo.mekshq.com/herald/?p=174"
                          title="This is how coffee can help you predict the future"
                        >
                          <img
                            width="300"
                            height="200"
                            src={urlToImage}
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
                    </div>

                    <div className="col-lg-8 col-md-8 col-sm-8">
                      <div className="entry-header">
                        <span className="meta-category">
                          <a
                            href="https://demo.mekshq.com/herald/?cat=4"
                            className="herald-cat-4"
                          >
                            {author}
                          </a>
                        </span>

                        <h2 className="entry-title h3">
                          <a href="https://demo.mekshq.com/herald/?p=174">
                            {title}
                          </a>
                        </h2>
                        <div className="entry-meta">
                          <div className="meta-item herald-date">
                            <span className="updated">{moment(publishedAt).startOf('hour').fromNow()}</span>
                          </div>
                          <div className="meta-item herald-comments">
                            <a href="https://demo.mekshq.com/herald/?p=174#respond">
                              Add Comment
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="entry-content">
                        
                        {!read ? <p>{description?.slice(8,100) }</p> : <p>{description } {content}</p>}
                        <span onClick={increase}>{!read ? "Read More" : "Read Less"}</span>
                        
                      </div>
                    </div>
                  </div>
                </article>
    )
}

export default SS4SubArticles
