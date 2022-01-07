import SS4TopArticle from "./SS4Articles/SS4TopArticle"
import SS4SubArticles from "./SS4Articles/SS4SubArticles"
import SS4NavLoader from "./SS4Articles/SS4NavLoader"
const SS4MainArticles = ({news, counter, incCounter}) => {

 
  return (
    <div className="herald-main-content col-lg-9 col-md-9 col-mod-main">
      <div className="row">
        <div
          className="herald-module col-lg-12 col-md-12 col-sm-12"
          id="herald-module-3-0"
          data-col="12"
        >
          <div className="herald-mod-wrap">
            <div className="herald-mod-head">
              <div className="herald-mod-title">
                <h2 className="h6 herald-mod-h herald-color">
                  Latest Articles 
                </h2>
              </div>
            </div>
          </div>
          <div className="row herald-posts row-eq-height">
            <SS4TopArticle {...news[0]}/>

            {news?.slice(1, counter)?.map((news, index) => (
              <>
              <SS4SubArticles key={index} id={index} {...news}/>
              </>
            ))}
           
          </div>

          <SS4NavLoader count={incCounter}/>
        </div>
      </div>
    </div>
  );
};

export default SS4MainArticles;
