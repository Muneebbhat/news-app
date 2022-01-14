import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import "./styles/style.css";
import Loader from "./components/loader/Loader";
import { key } from "./components/data/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllNewsIndex from "./components/site/AllNewsIndex";
import NotFound from "./components/site/404NotFound";

const Headers = React.lazy(() => import("./components/headers"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const NewsOpnerindex = React.lazy(() =>
  import("./components/NewsOpner/NewsOpnerIndex")
);

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
    <BrowserRouter>
      <div id="content" className="herald-site-content herald-slide">
        <Suspense fallback={<Loader />}>
          <Headers topNews={topHeadlines} />
          <Routes>
          <Route path="/" element={<AllNewsIndex topHeadlines={topHeadlines}/>}/>
           <Route path="/open" element={<NewsOpnerindex/>}/> 
           <Route path="*" element={NotFound}/>
            
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
