import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const HeaderArticles = ({New}) => {
  return (
    <article className="herald-fa-item herald-cat-2">
      <header className="entry-header">
        <span className="meta-category">
         
          <Link to="/open" className="herald-cat-2">
            Travel
           </Link>
        </span>
        

        <h2 className="entry-title h6">
          <Link to="/open">
          <span className="herald-format-icon">
              <i className="fa fa-camera"></i>
            </span>
            {New?.title}
          </Link>
           
        </h2>
        <div className="entry-meta">
          <div className="meta-item herald-date">
            <span className="updated">{moment(New?.publishedAt).startOf('hour').fromNow()}</span>
          </div>
          {/* <div className="meta-item herald-comments">
            <a href="https://demo.mekshq.com/herald/?p=157#comments">
              6 Comments
            </a>
          </div> */}
        </div>

        <div className="entry-content">
          <p>
          {New?.description}
          </p>
        </div>

        <a href="/" className="fa-post-bg">
           
        </a>
      </header>

      
      <Link to="/open" className="fa-post-thumbnail">
        <img
          width="550"
          height="520"
          src={New?.urlToImage}
          className="
                                attachment-herald-lay-fa1-full
                                size-herald-lay-fa1-full
                                wp-post-image
                              "
          alt=""
          loading="lazy"
        />
        </Link>
    </article>
  );
};

export default HeaderArticles;
