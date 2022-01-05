import React from "react";
import SS2Breaking from "./SS2CNews/SS2Breaking";
import SS2Entertainment from "./SS2CNews/SS2Entertainment";
import SS2Fashion from "./SS2CNews/SS2Fashion";
import SS2FoodNDrinks from "./SS2CNews/SS2FoodNDrinks";
import SS2TopReviews from "./SS2CNews/SS2TopReviews";
import SS2Travel from "./SS2CNews/SS2Travel";

const SS2Main = (props) => {
  // const {News} = props.topNews
  return (
    <div className="herald-main-content col-lg-9 col-md-9 col-mod-main">
      <div className="row">
        <SS2Breaking/>
        <SS2Entertainment/>
        {console.log(props,"muneebbhat")}

        {/* ads here */}

        <SS2Travel/>
        <SS2Fashion/>
        <SS2FoodNDrinks/>
       <SS2TopReviews/> 
      </div>
    </div>
  );
};

export default SS2Main;
