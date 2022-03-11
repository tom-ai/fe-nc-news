import Article from "./Article";
import CommentList from "./CommentList";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";

function ArticlePage({ users }) {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_id: id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.getArticleById(id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

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
