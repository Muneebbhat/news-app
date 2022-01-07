import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Loader from "../loader/Loader";
import { key } from "../data/Data";
const SS3PopularThisWeek = lazy( () => import("./SS3Compnents/SS3PopularThisWeek"))
const SS3SelectedProducts = lazy( () => import("./SS3Compnents/SS3SelectedProducts"))

const SiteSection3 = () => {
  const [Sports, setSportsNews] = useState([]);
  useEffect(() => {
   const sportsNews = async () =>{
const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${key}`)
setSportsNews(response.data.articles)
   }
   sportsNews()
  }, [])
  
  return (
    <div
      className="herald-section container herald-no-sid"
      id="herald-section-2"
    >
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
          <Suspense fallback={<Loader/>}>
          <SS3PopularThisWeek SportsNews={Sports}/>
            <SS3SelectedProducts />
          </Suspense>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSection3;
