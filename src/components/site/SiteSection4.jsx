import axios from "axios";
import React, { useEffect, useState } from "react";
import SS4MainArticles from "./SS4Components/SS4MainArticles";
import SS4SideNav from "./SS4Components/SS4SideNav";
import { key } from "../data/Data";

const SiteSection4 = () => {
  const [WorldNews, setWorldNews] = useState([])
  const [counter, setcounter] = useState(3);

  useEffect(() => {
    const worldNews = async () =>{
const res = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${key}`)
setWorldNews(res.data.articles)
    }
    worldNews()
  }, [counter])
  const incCounter = () => {
setcounter( counter + 3)
  }
  // const WNData = WorldNews?.slice
  return (
    <div className="herald-section container" id="herald-section-3">
      <div className="row">

        <SS4MainArticles news={WorldNews} counter={counter} incCounter={incCounter}/>
        <SS4SideNav />
      </div>
    </div>
  );
};

export default SiteSection4;
