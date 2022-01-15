import React from 'react'
import { useParams } from 'react-router-dom'
const NOMThumbnail = () => {
  // const {image} = useParams();
    return (
        <div className="herald-post-thumbnail herald-post-thumbnail-single">
        <span>
          <img
            width="990"
            height="660"
            src="https://mksdmcdn-9b59.kxcdn.com/herald/wp-content/uploads/2015/11/herald024-990x660.jpg"
            className="attachment-herald-lay-single size-herald-lay-single wp-post-image"
            alt=""
            loading="lazy"
          />
        </span>
      </div>
    )
}

export default NOMThumbnail
