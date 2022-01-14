import React from 'react'
import NOMDesnewsExtra from './NOMDesComponent/NOMDesnewsExtra'
import NOMdesNewsInfo from './NOMDesComponent/NOMdesNewsInfo'
import NOMDnewsDescription from './NOMDesComponent/NOMDnewsDescription'

const NOMDescription = () => {
    return (
        <div className="row">
        <NOMdesNewsInfo/>

        <NOMDnewsDescription/>

        <NOMDesnewsExtra/>
      </div>
    )
}

export default NOMDescription
