import React from "react"
import BottomHeader from "./BottomHeader"
import MiddleHeader from "./MiddleHeader"
import MobileNavigation from "./MobileNavigation"
import ResponsiveHeader from "./ResponsiveHeader"
import StickyHeader from "./StickyHeader"
import TopHeader from "./TopHeader"
import TrendingHeader from "./TrendingHeader"

const Headers = () => {
    return (
        <React.Fragment>
            <header className="herald-site-header">
                <TopHeader/>
                <MiddleHeader/>
                <BottomHeader/>
                <TrendingHeader/>
            </header>
            <StickyHeader/>
            <ResponsiveHeader/>
            <MobileNavigation/>
        </React.Fragment>
    )
}

export default Headers
