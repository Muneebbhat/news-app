import axios from "axios";
import React, { useEffect, useState } from "react";
import SS2Main from "./SS2components/SS2Main";
import SS2Side from "./SS2components/SS2Side";

const SiteSection2 = ({ topNews }) => {
  const [EntmntNews, setEntmntNews] = useState([]);
  const [Business, setBusinessNews] = useState([]);

  useEffect(() => {
    const entertainmentNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c2d2bbf6310e45f8ad7018b12b0c2f04`
      );
      setEntmntNews(res.data.articles);
    };
    
    const businessNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c2d2bbf6310e45f8ad7018b12b0c2f04`
      );
      setBusinessNews(res.data.articles);
    };

    entertainmentNews();
    businessNews()
  }, []);
  return (
    <div className="herald-section container" id="herald-section-1">
      <div className="row">
        <SS2Main News={topNews} entNews={EntmntNews} businessNews={Business}/>
        <SS2Side />
      </div>
    </div>
  );
};

export default SiteSection2;
