import axios from "axios";
import React, { useEffect, useState } from "react";
import BreakingNews from "./BreakingNews";
import SideNews from "./SideNews";

const NewsIndex = ({topNews}) => {
  // const [brNews, setBrNews] = useState([])
  // useEffect(() => {
  //  const getBreakingNews = async()=>{
  //    const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_32560f2f2851336f61200ac6123373bd4211&q=india`)
  //    setBrNews(response.data.results);

  //  }
  //  getBreakingNews()
  // }, [])
  return (
    <div className="herald-section container" id="herald-section-1">
      <div className="row"> 
        <BreakingNews breakNews={topNews}/>
        <SideNews/>
      </div>
    </div>
  );
};

export default NewsIndex;
