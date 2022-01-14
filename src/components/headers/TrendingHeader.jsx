import { Link } from "react-router-dom";

const TrendingHeader = ({ sixNews }) => {
  return (
    <div className="header-trending hidden-xs hidden-sm">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="row" data-col="6">
              {sixNews.slice(0, 6).map((news,index) => (
                <div className="col-lg-2 col-md-2" key={index} id={index}>
                  <div className="herald-post-thumbnail">
                   <Link to="/open">
                   <img
                        width="150"
                        height="150"
                        src={news?.urlToImage}
                        className="
                          attachment-thumbnail
                          size-thumbnail
                          wp-post-image
                        "
                        alt=""
                        loading="lazy"
                        sizes="(max-width: 150px) 100vw, 150px"
                      />
                   </Link>
                      
                  </div>
                  <h4 className="h6">
                    <Link to="/open">
                      {news?.title?.slice(0,40)}...
                     </Link>
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
