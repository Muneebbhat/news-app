import React from 'react'
import logo from "../../../../LogoMakr-7SfJFw.png"

const FTArticleOne = () => {
    return (
        <div className="col-md-6 col-sm-6" >
          <div id="text-3" className="widget widget_text">
            <div className="textwidget" style={{marginLeft:"5px"}}>
              <p>
                <img
                  src={logo}
                  alt="Herald"
                />
              </p>
              <p>
                Reactor Wewbs is the next generation React magazine theme,
                featuring a fully flexible header with 3 customizable areas and
                an easy-to-use module builder for unlimited layout combinations
              </p>
              <p style={{ marginTop: "25px" }}>
                <a
                  className="mks_button mks_button_small squared"
                  href="https://themeforest.net/item/herald-news-portal-magazine-wordpress-theme/13800118"
                  style={{ color: "#ffffff", backgroundColor: "#0288d1" }}
                  rel="noopener"
                >
                  Find out more
                </a>
              </p>
            </div>
          </div>
        </div>
    )
}

export default FTArticleOne
