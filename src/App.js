import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./styles/style.css";
import Banner from "./components/site/Banner";
import Loader from "./components/loader/Loader";
import { key } from "./components/data/Data";

const Headers = React.lazy(() => import("./components/headers"));
const SiteSection2 = React.lazy(() => import("./components/site/SiteSection2"));
const SiteSection3 = React.lazy(() => import("./components/site/SiteSection3"));
const SiteSection4 = React.lazy(() => import("./components/site/SiteSection4"));
const Footer = React.lazy(() => import("./components/footer/Footer"));

const App = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  useEffect(() => {
    const getTopHeadlines = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`
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
        <Footer/>
      </Suspense>

    </div>
  );
};

export default App;
