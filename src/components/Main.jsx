import Filters from "./Filters";
import ArticleList from "./ArticleList";
import { Routes, Route } from "react-router-dom";
import * as api from '../utils/api'
import { useState, useEffect } from "react";

function Main() {
    const [topics, setTopics] = useState([])
    const [articles, setArticles] = useState([])

    useEffect(() =>{
        api.getTopics().then((topics) => setTopics(topics))
    }, [])

    useEffect(() => {
        api.getArticles().then((articles) => setArticles(articles))
    }, [])
    
  return (
    <>
    <Filters topics={topics}/>
    <Routes>
        <Route path='/' element={<ArticleList articles={articles}/>} />
        <Route path='/topics/:topic_id' element={<ArticleList articles={articles} />} />
    </Routes>
    </>
  );
}
export default Main;
