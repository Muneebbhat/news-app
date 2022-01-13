import React, { Suspense } from "react";
import MobileNavigation from "./MobileNavigation";
import ResponsiveHeader from "./ResponsiveHeader";
import StickyHeader from "./StickyHeader";
import Loader from "../loader/Loader";

const TopHeader = React.lazy(() => import("./TopHeader"));
const MiddleHeader = React.lazy(() => import("./MiddleHeader"));
const BottomHeader = React.lazy(() => import("./BottomHeader"));
const TrendingHeader = React.lazy(() => import("./TrendingHeader"));

const Headers = ({ topNews }) => {
  return (
    <div className="">
      <header className="herald-site-header">
        <Suspense fallback={<Loader />}>
          <TopHeader />
          <MiddleHeader />
          <BottomHeader />
        <TrendingHeader sixNews={topNews} />
        </Suspense>
      </header>
      <StickyHeader />
      <ResponsiveHeader />
      <MobileNavigation />
    </div>
  );
};

export default Headers;
