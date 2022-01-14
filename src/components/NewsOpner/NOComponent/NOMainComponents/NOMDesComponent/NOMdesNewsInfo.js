import React from 'react'

const NOMdesNewsInfo = () => {
    return (
        <div className="col-lg-2 col-md-2 col-sm-2 hidden-xs herald-left">
          <div className="entry-meta-wrapper ">
            <div className="entry-meta-author">
              <div className="co-author">
                <img
                  data-del="avatar"
                  alt=""
                  src="https://mksdmcdn-9b59.kxcdn.com/herald/wp-content/uploads/2015/04/meks_3-150x150.jpg"
                  className="avatar pp-user-avatar avatar-80 photo "
                  height="80"
                  width="80"
                />{" "}
                <a
                  className="herald-author-name"
                  href="https://demo.mekshq.com/herald?author_name=meks3"
                >
                  John Bergstein
                </a>
                <a
                  className="herald-author-twitter"
                  href="https://twitter.com/mekshq"
                >
                  mekshq
                </a>
              </div>
            </div>

            <div className="entry-meta entry-meta-single">
              <div className="meta-item herald-comments">
                <a href="https://demo.mekshq.com/herald/?p=203#comments">
                  3 Comments
                </a>
              </div>
            </div>

            <ul className="herald-share">
              <span className="herald-share-meta">
                <i className="fa fa-share-alt"></i>Share This!
              </span>
              <div className="meta-share-wrapper">
                <div className="meks_ess square no-labels solid ">
                  <a
                    href="/"
                    className="meks_ess-item socicon-facebook"
                    data-url="http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemo.mekshq.com%2Fherald%2F%3Fp%3D203&amp;t=Grandma%E2%80%99s%20secret%20blueberry%20pie%20recipe%20revealed%21"
                  >
                    <span>Facebook</span>
                  </a>
                  <a
                    href="/"
                    className="meks_ess-item socicon-twitter"
                    data-url="http://twitter.com/intent/tweet?url=https%3A%2F%2Fdemo.mekshq.com%2Fherald%2F%3Fp%3D203&amp;text=Grandma%E2%80%99s%20secret%20blueberry%20pie%20recipe%20revealed%21"
                  >
                    <span>Twitter</span>
                  </a>
                  <a
                    href="/"
                    className="meks_ess-item socicon-pinterest"
                    data-url="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fdemo.mekshq.com%2Fherald%2F%3Fp%3D203&amp;media=https%3A%2F%2Fdemo.mekshq.com%2Fherald%2Fwp-content%2Fuploads%2F2015%2F11%2Fherald024.jpg&amp;description=Grandma%E2%80%99s%20secret%20blueberry%20pie%20recipe%20revealed%21"
                  >
                    <span>Pinterest</span>
                  </a>
                  <a
                    href="/"
                    className="meks_ess-item socicon-linkedin"
                    data-url="https://www.linkedin.com/cws/share?url=https%3A%2F%2Fdemo.mekshq.com%2Fherald%2F%3Fp%3D203"
                  >
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
    )
}

export default NOMdesNewsInfo
