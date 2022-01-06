import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./styles/style.css";
import Banner from "./components/site/Banner";
import Loader from "./components/loader/Loader";
const Headers = React.lazy(() => import("./components/headers"));
const SiteSection2 = React.lazy(() => import("./components/site/SiteSection2"));
const SiteSection3 = React.lazy(() => import("./components/site/SiteSection3"));
const SiteSection4 = React.lazy(() => import("./components/site/SiteSection4"));

const App = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  useEffect(() => {
    const getTopHeadlines = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=981aef87ee3145e6bc5d276393fb83e7`
      );

      setTopHeadlines(response.data.articles);
    };
    getTopHeadlines();
  }, []);
  return (
    <div id="content" className="herald-site-content herald-slide">
      <Suspense fallback={<Loader />}>
        <Headers topNews={topHeadlines} />
        <Banner topNews={topHeadlines} />
        <SiteSection2 topNews={topHeadlines} />
        <SiteSection3 />
        <SiteSection4 />
      </Suspense>

    </div>
  );
};

export default App;
