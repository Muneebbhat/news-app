const TrendingHeader = ({ sixNews }) => {
  return (
    <div className="header-trending hidden-xs hidden-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="row" data-col="6">
              {sixNews.slice(0, 6).map((news) => (
                <div className="col-lg-2 col-md-2">
                  <div className="herald-post-thumbnail">
                    <a
                      href="https://demo.mekshq.com/herald/?p=203"
                      title="Grandma&#8217;s secret blueberry pie recipe revealed!"
                    >
                      <img
                        width="150"
                        height="150"
                        src={news.urlToImage}
                        className="
                          attachment-thumbnail
                          size-thumbnail
                          wp-post-image
                        "
                        alt=""
                        loading="lazy"
                        sizes="(max-width: 150px) 100vw, 150px"
                      />
                    </a>
                  </div>
                  <h4 className="h6">
                    <a href="https://demo.mekshq.com/herald/?p=203">
                      {news.title.slice(0,50)}...
                    </a>
                  </h4>
                </div>
              ))}

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingHeader;
