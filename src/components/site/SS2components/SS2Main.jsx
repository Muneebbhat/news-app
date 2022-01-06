import React,{lazy, Suspense} from "react";
import Loader from "../../loader/Loader";
const SS2Breaking = lazy(() => import("./SS2CNews/SS2Breaking"))
const SS2Entertainment = lazy(() => import("./SS2CNews/SS2Entertainment"))
const SS2Fashion = lazy(() => import("./SS2CNews/SS2Fashion"))
const SS2FoodNDrinks = lazy(() => import("./SS2CNews/SS2FoodNDrinks"))
const SS2TopReviews = lazy(() => import("./SS2CNews/SS2TopReviews"))
const SS2Travel = lazy(() => import("./SS2CNews/SS2Travel"))


const SS2Main = (props) => {
  const {News, entNews, businessNews, healthNews, scienceNews, technews} = props
  return (
    <div className="herald-main-content col-lg-9 col-md-9 col-mod-main">
      <div className="row">
      <Suspense fallback={<Loader/>}>
        <SS2Breaking news={News}/>
        <SS2Entertainment news={entNews}/>

        {/* ads here */}

        <SS2Travel business={businessNews}/>
        <SS2Fashion health={healthNews}/>
        <SS2FoodNDrinks science={scienceNews}/>
       <SS2TopReviews tech={technews}/> 
      </Suspense>
      </div>
    </div>
  );
};

export default SS2Main;
