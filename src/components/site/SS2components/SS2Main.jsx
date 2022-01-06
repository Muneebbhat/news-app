import React from "react";
import SS2Breaking from "./SS2CNews/SS2Breaking";
import SS2Entertainment from "./SS2CNews/SS2Entertainment";
import SS2Fashion from "./SS2CNews/SS2Fashion";
import SS2FoodNDrinks from "./SS2CNews/SS2FoodNDrinks";
import SS2TopReviews from "./SS2CNews/SS2TopReviews";
import SS2Travel from "./SS2CNews/SS2Travel";

const SS2Main = (props) => {
  const {News, entNews, businessNews} = props
  return (
    <div className="herald-main-content col-lg-9 col-md-9 col-mod-main">
      <div className="row">
        <SS2Breaking news={News}/>
        <SS2Entertainment news={entNews}/>

        {/* ads here */}

        <SS2Travel business={businessNews}/>
        <SS2Fashion/>
        <SS2FoodNDrinks/>
       <SS2TopReviews/> 
      </div>
    </div>
  );
};

export default SS2Main;
