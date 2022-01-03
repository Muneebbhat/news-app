import moment from "moment";


const Banner = ({ topNews }) => {
  return (
    <div
      className="herald-section container herald-no-sid"
      id="herald-section-0"
    >
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
                        { topNews.sort(function(){return .5 - Math.random()}).slice(0,4).map((news) => (
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
