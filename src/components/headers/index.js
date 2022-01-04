import React, { Suspense } from "react";
import MobileNavigation from "./MobileNavigation";
import ResponsiveHeader from "./ResponsiveHeader";
import StickyHeader from "./StickyHeader";
import TrendingHeader from "./TrendingHeader";
import Loader from "../loader/Loader";

const TopHeader = React.lazy(() => import("./TopHeader"));
const MiddleHeader = React.lazy(() => import("./MiddleHeader"));
const BottomHeader = React.lazy(() => import("./BottomHeader"));

const Headers = ({ topNews }) => {
  return (
    <React.Fragment>
      <header className="herald-site-header">
        <Suspense fallback={<Loader />}>
          <TopHeader />
          <MiddleHeader />
          <BottomHeader />
        </Suspense>
        <TrendingHeader sixNews={topNews} />
      </header>
      <StickyHeader />
      <ResponsiveHeader />
      <MobileNavigation />
    </React.Fragment>
  );
};

export default Headers;
