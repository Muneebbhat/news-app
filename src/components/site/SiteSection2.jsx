import axios from "axios";
import React, { useEffect, useState } from "react";
import SS2Main from "./SS2components/SS2Main";
import SS2Side from "./SS2components/SS2Side";

const SiteSection2 = ({ topNews }) => {
  const [EntmntNews, setEntmntNews] = useState([]);
  const [Business, setBusinessNews] = useState([]);
  const [Health, setHealthNews] = useState([])
  const [Science, setScienceNews] = useState([])
  const [Technology, setTechnologyNews] = useState([])

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

    const healthNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=c2d2bbf6310e45f8ad7018b12b0c2f04`
      );
      setHealthNews(res.data.articles);
    };

    const scienceNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=c2d2bbf6310e45f8ad7018b12b0c2f04`
      );
      setScienceNews(res.data.articles);
    };

    const technologyNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c2d2bbf6310e45f8ad7018b12b0c2f04`
      );
      setTechnologyNews(res.data.articles);
    };
    

    scienceNews()
    healthNews()
    entertainmentNews();
    businessNews()
    technologyNews()
  }, []);
  return (
    <div className="herald-section container" id="herald-section-1">
      <div className="row">
        <SS2Main News={topNews} entNews={EntmntNews} businessNews={Business} healthNews={Health} scienceNews={Science} technews={Technology} />
        <SS2Side />
      </div>
    </div>
  );
};

export default SiteSection2;
