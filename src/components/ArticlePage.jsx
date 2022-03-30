import Article from "./Article";
import CommentList from "./CommentList";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";

function ArticlePage({ users }) {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id: id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticleById(id)
      .then((article) => {
        console.log("api");
        setArticle(article);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setError(response.status);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <Loading />;

  if (error) return <p>{<ErrorComponent status={error} />}</p>;
  return (
    <>
      <Article
        key={article.article_id}
        articleId={article.article_id}
        body={article.body}
        commentCount={article.comment_count}
        username={article.author}
        timestamp={article.created_at}
        title={article.title}
        topic={article.topic}
        votes={article.votes}
      />
      <CommentList
        commentCount={article.comment_count}
        articleId={article.article_id}
        users={users}
      />
    </>
  );
}

export default ArticlePage;
