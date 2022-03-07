import { ArticleCard } from "./ArticleCard";

function ArticleList({articles}) {
  return (
    <div>
      <h2>Article List</h2>
      <ul>
        {articles.map(article => {
          return (
            <ArticleCard
            article_id={article.article_id}
            title={article.title}
            topic={article.topic}
            body={article.body}
            />
          )
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
