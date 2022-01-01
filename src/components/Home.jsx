import Banner from "./banner/Banner";

const Home = ({ topNews }) => {
  return (
    <div id="content" className="herald-site-content herald-slide">
      {/* {console.log(topNews)} */}
      <Banner topNews={topNews}/>
    </div>
  );
};

export default Home;
