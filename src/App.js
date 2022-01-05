import { useState, useEffect } from "react"
import axios from "axios"
import './styles/style.css'
import Headers from "./components/headers"
import Banner from "./components/site/Banner"
import SiteSection2 from "./components/site/SiteSection2"
import SiteSection3 from "./components/site/SiteSection3"
import SiteSection4 from "./components/site/SiteSection4"


const App = () => {
  const [topHeadlines, setTopHeadlines] = useState([])
  useEffect(() => {
    const getTopHeadlines = async () => {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=981aef87ee3145e6bc5d276393fb83e7`)

      setTopHeadlines(response.data.articles)
    }
    getTopHeadlines();
  },[])
  return (
    <div id="content" className="herald-site-content herald-slide">
        <Headers topNews={topHeadlines}/>
        <Banner topNews={topHeadlines}/>
        <SiteSection2 topNews={topHeadlines}/>
        <SiteSection3/>
        <SiteSection4/>
        {console.log(topHeadlines)}
    </div>
  )
}

export default App
