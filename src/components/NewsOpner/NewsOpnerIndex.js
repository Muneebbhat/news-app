import React from "react";
import NOpenerMain from "./NOComponent/NOMain";
import NOpnerSide from "./NOComponent/NOpnerSide";
import { useParams } from "react-router-dom";

const NewsOpnerIndex = () => {
  const {image} = useParams();

  console.log('THIS IS IMAGE:',image)
  return (
    <div className="post-template-default single single-post postid-157 single-format-gallery wp-embed-responsive theme-herald woocommerce-no-js herald-boxed herald-v_2_6">
      <div id="content" className="herald-site-content herald-slide">
        <div className="herald-section container ">
          <article
            id="post-203"
            className="herald-single post-203 post type-post status-publish format-standard has-post-thumbnail hentry category-food-and tag-earth tag-ecology tag-solar-energy"
          >
            <div className="row">
              <NOpenerMain/>

              <NOpnerSide/>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default NewsOpnerIndex;
