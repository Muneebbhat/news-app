import { useState, useEffect } from "react"
import axios from "axios"
import './styles/style.css'
import Headers from "./components/headers"
import Home from "./components/Home"
import NewsIndex from "./components/NewsType/NewsIndex"

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
    <div>
        <Headers topNews={topHeadlines}/>
        <Home topNews={topHeadlines}/>
        <NewsIndex/>
    </div>
  )
}

export default App
