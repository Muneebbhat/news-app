import React from 'react'
import FTAThComp1 from './FTAThreeComp/FTAThComp'
import FTAThComp2 from './FTAThreeComp/FTAThComp2'

const FTArticleThree = () => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-3">
        <div
          id="herald_posts_widget-11"
          className="widget herald_posts_widget"
        >
          <h4 className="widget-title h6">
            <span>Most Discussed</span>
          </h4>

          <div className="row">
            <FTAThComp1/>
            <FTAThComp2/>
            
          </div>
        </div>
      </div>
    )
}

export default FTArticleThree
