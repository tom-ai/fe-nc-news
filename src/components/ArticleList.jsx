import { ArticleCard } from "./ArticleCard";
import Sort from "./Sort";
import * as api from "../utils/api";
import { useState, useEffect } from "react";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.getArticles().then((articles) => setArticles(articles));
  }, []);

  return (
    <div>
      <h2>Article List</h2>
      <Sort />
      <ul>
        {articles.map((article) => {
          return (
            <ArticleCard
              article_id={article.article_id}
              title={article.title}
              author={article.author}
              topic={article.topic}
              body={article.body}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
