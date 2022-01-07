import axios from "axios";
import React, { useEffect, useState } from "react";
import SS4MainArticles from "./SS4Components/SS4MainArticles";
import SS4SideNav from "./SS4Components/SS4SideNav";

const SiteSection4 = () => {
  const [WorldNews, setWorldNews] = useState([])
  useEffect(() => {
    const worldNews = async () =>{
const res = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c2d2bbf6310e45f8ad7018b12b0c2f04`)
setWorldNews(res.data)
    }
    worldNews()
  }, [])
  
  return (
    <div className="herald-section container" id="herald-section-3">
      <div className="row">

{console.log(WorldNews)}
        <SS4MainArticles />
        <SS4SideNav />
      </div>
    </div>
  );
};

export default SiteSection4;
