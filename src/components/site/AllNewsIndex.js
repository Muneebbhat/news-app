import React, { Suspense } from "react";
import Loader from "../loader/Loader";
import Banner from "./Banner";
const SiteSection2 = React.lazy(() => import("./SiteSection2"));
const SiteSection3 = React.lazy(() => import("./SiteSection3"));
const SiteSection4 = React.lazy(() => import("./SiteSection4"));

const AllNewsIndex = ({ topHeadlines }) => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Banner topNews={topHeadlines} />
        <SiteSection2 topNews={topHeadlines} />
        <SiteSection3 />
        <SiteSection4 />
      </Suspense>
    </>
  );
};

export default AllNewsIndex;
