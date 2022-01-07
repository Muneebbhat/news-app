import axios from "axios";
import React, { useEffect, useState } from "react";
import SS2Main from "./SS2components/SS2Main";
import SS2Side from "./SS2components/SS2Side";
import { key } from "../data/Data";

const SiteSection2 = ({ topNews }) => {
  const [EntmntNews, setEntmntNews] = useState([]);
  const [Business, setBusinessNews] = useState([]);
  const [Health, setHealthNews] = useState([])
  const [Science, setScienceNews] = useState([])
  const [Technology, setTechnologyNews] = useState([])

  useEffect(() => {
    const entertainmentNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${key}`
      );
      setEntmntNews(res.data.articles);
    };
  
    
    const businessNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${key}`
      );
      setBusinessNews(res.data.articles);
    };

    const healthNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${key}`
      );
      setHealthNews(res.data.articles);
    };

    const scienceNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${key}`
      );
      setScienceNews(res.data.articles);
    };

    const technologyNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${key}`
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
