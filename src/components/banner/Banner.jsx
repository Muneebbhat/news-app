import moment from "moment";


const Banner = ({ topNews }) => {
  return (
    <div
      className="herald-section container herald-no-sid"
      id="herald-section-0"
    >
        {console.log('TOP 4:',topNews)}
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <div
              className="herald-module col-lg-12 col-md-12 col-sm-12"
              id="herald-module-0-0"
            >
              <div className="herald-fa-wrapper herald-fa-2">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="herald-fa-list">
                        {topNews.slice(16,20).map((news) => (
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
                                  {news?.title}
                                </a>
                              </h2>
                              <div className="entry-meta">
                                <div className="meta-item herald-date">
                                  <span className="updated">{moment(news.publishedAt).startOf('hour').fromNow()}</span>
                                </div>
                                <div className="meta-item herald-comments">
                                  <a href="https://demo.mekshq.com/herald/?p=157#comments">
                                    6 Comments
                                  </a>
                                </div>
                              </div>
    
                              <div className="entry-content">
                                <p>
                                 {news?.description}
                                </p>
                              </div>
    
                              <a href="#" className="fa-post-bg"></a>
                            </header>
    
                            <a
                              className="fa-post-thumbnail"
                              href="https://demo.mekshq.com/herald/?p=157"
                              title="The simplest way to make the best of your vacation"
                            >
                              <img
                                width="550"
                                height="520"
                                src={news?.urlToImage}
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
                        ))}
                      {/* <article className="herald-fa-item herald-cat-2">
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
                              {topNews[0]?.title}
                            </a>
                          </h2>
                          <div className="entry-meta">
                            <div className="meta-item herald-date">
                              <span className="updated">1 week ago</span>
                            </div>
                            <div className="meta-item herald-comments">
                              <a href="https://demo.mekshq.com/herald/?p=157#comments">
                                6 Comments
                              </a>
                            </div>
                          </div>

                          <div className="entry-content">
                            <p>
                              Umami craft beer hella, put a bird on it YOLO roof
                              party Echo Park single...
                            </p>
                          </div>

                          <a href="#" className="fa-post-bg"></a>
                        </header>

                        <a
                          className="fa-post-thumbnail"
                          href="https://demo.mekshq.com/herald/?p=157"
                          title="The simplest way to make the best of your vacation"
                        >
                          <img
                            width="550"
                            height="520"
                            src={topNews[0]?.urlToImage}
                            className="
                                attachment-herald-lay-fa1-full
                                size-herald-lay-fa1-full
                                wp-post-image
                              "
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </article> */}

                      {/* <article className="herald-fa-item herald-cat-4">
                        <header className="entry-header">
                          <span className="meta-category">
                            <a
                              href="https://demo.mekshq.com/herald/?cat=4"
                              className="herald-cat-4"
                            >
                              Food &amp; Drinks
                            </a>
                          </span>

                          <h2 className="entry-title h6">
                            <a href="https://demo.mekshq.com/herald/?p=203">
                              Grandma&#8217;s secret blueberry pie recipe
                              revealed!
                            </a>
                          </h2>
                          <div className="entry-meta">
                            <div className="meta-item herald-date">
                              <span className="updated">6 days ago</span>
                            </div>
                            <div className="meta-item herald-comments">
                              <a href="https://demo.mekshq.com/herald/?p=203#comments">
                                3 Comments
                              </a>
                            </div>
                          </div>

                          <div className="entry-content">
                            <p>
                              Paleo ethical Williamsburg Wes Anderson Vice
                              biodiesel +1, asymmetrical mlkshk...
                            </p>
                          </div>

                          <a href="#" className="fa-post-bg"></a>
                        </header>

                        <a
                          className="fa-post-thumbnail"
                          href="https://demo.mekshq.com/herald/?p=203"
                          title="Grandma&#8217;s secret blueberry pie recipe revealed!"
                        >
                          <img
                            width="550"
                            height="520"
                            src="https://mksdmcdn-9b59.kxcdn.com/herald/wp-content/uploads/2015/11/herald024-550x520.jpg"
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

                      <article className="herald-fa-item herald-cat-3">
                        <header className="entry-header">
                          <span className="meta-category">
                            <a
                              href="https://demo.mekshq.com/herald/?cat=3"
                              className="herald-cat-3"
                            >
                              Fashion
                            </a>
                          </span>

                          <h2 className="entry-title h6">
                            <a href="https://demo.mekshq.com/herald/?p=192">
                              Everything you ever need to known about scarves
                            </a>
                          </h2>
                          <div className="entry-meta">
                            <div className="meta-item herald-date">
                              <span className="updated">1 week ago</span>
                            </div>
                            <div className="meta-item herald-comments">
                              <a href="https://demo.mekshq.com/herald/?p=192#comments">
                                4 Comments
                              </a>
                            </div>
                          </div>

                          <div className="entry-content">
                            <p>
                              Ennui single-origin coffee crucifix, irony PBR
                              squid sriracha. Kale chips slow...
                            </p>
                          </div>

                          <a href="#" className="fa-post-bg"></a>
                        </header>

                        <a
                          className="fa-post-thumbnail"
                          href="https://demo.mekshq.com/herald/?p=192"
                          title="Everything you ever need to known about scarves"
                        >
                          <img
                            width="550"
                            height="520"
                            src="https://mksdmcdn-9b59.kxcdn.com/herald/wp-content/uploads/2015/11/herald092-550x520.jpg"
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

                      <article className="herald-fa-item herald-cat-5">
                        <header className="entry-header">
                          <span className="meta-category">
                            <a
                              href="https://demo.mekshq.com/herald/?cat=5"
                              className="herald-cat-5"
                            >
                              Sports
                            </a>
                          </span>

                          <h2 className="entry-title h6">
                            <a href="https://demo.mekshq.com/herald/?p=180">
                              Little known facts about football and why they
                              matter
                            </a>
                          </h2>
                          <div className="entry-meta">
                            <div className="meta-item herald-date">
                              <span className="updated">1 week ago</span>
                            </div>
                            <div className="meta-item herald-comments">
                              <a href="https://demo.mekshq.com/herald/?p=180#respond">
                                Add Comment
                              </a>
                            </div>
                          </div>

                          <div className="entry-content">
                            <p>
                              Cornhole fashion axe Tonx, hashtag readymade
                              quinoa aesthetic polaroid Marfa...
                            </p>
                          </div>

                          <a href="#" className="fa-post-bg"></a>
                        </header>

                        <a
                          className="fa-post-thumbnail"
                          href="https://demo.mekshq.com/herald/?p=180"
                          title="Little known facts about football and why they matter"
                        >
                          <img
                            width="550"
                            height="520"
                            src="https://mksdmcdn-9b59.kxcdn.com/herald/wp-content/uploads/2015/11/herald018-550x520.jpg"
                            className="
                                attachment-herald-lay-fa1-full
                                size-herald-lay-fa1-full
                                wp-post-image
                              "
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </article> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
