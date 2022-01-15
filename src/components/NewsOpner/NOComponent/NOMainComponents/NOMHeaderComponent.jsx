import React from 'react'

const NOMHeaderComponent = () => {
    return (
        <header className="entry-header">
        <span className="meta-category">
          <a
            href="https://demo.mekshq.com/herald/?cat=4"
            className="herald-cat-4"
          >
            Food &amp; Drinks
          </a>
        </span>
        <h1 className="entry-title h1">
        {/* {title} */}
        TITLE IS HERE
        </h1>
        <div className="entry-meta entry-meta-single">
          <div className="meta-item herald-date">
            <span className="updated">4 days ago</span>
          </div>
          <div className="meta-item herald-rtime">2 Min Read</div>
        </div>
      </header>
    )
}

export default NOMHeaderComponent

