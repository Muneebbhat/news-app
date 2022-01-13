import React from "react";
import FTArticleFour from "./FooterTopArticles/FTArticleFour";
import FTArticleOne from "./FooterTopArticles/FTArticleOne";
// import FTArticleThree from "./FooterTopArticles/FTArticleThree";
// import FTArticleTwo from "./FooterTopArticles/FTArticleTwo";

const FooterTop = () => {
  return (
    <div className="footer-widgets container">
      <div className="row">
        <FTArticleOne/>
        {/* <FTArticleTwo/>
        <FTArticleThree/> */}
       <FTArticleFour/>
      </div>
    </div>
  );
};

export default FooterTop;
