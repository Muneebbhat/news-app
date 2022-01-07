import React from 'react'
import FTATComp2 from './FTATwoComp/FTATComp2'
import FTATComp3 from './FTATwoComp/FTATComp3'
import FTATComp1 from './FTATwoComp/FTATComponents'

const FTArticleTwo = () => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-3">
          <div
            id="herald_posts_widget-10"
            className="widget herald_posts_widget"
          >
            <h4 className="widget-title h6">
              <span>Most Popular</span>
            </h4>

            <div className="row">
              <FTATComp1/>
              <FTATComp2/>
              <FTATComp3/>
            </div>
          </div>
        </div>
    )
}

export default FTArticleTwo
