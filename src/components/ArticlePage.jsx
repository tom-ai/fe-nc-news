import Article from "./Article";
import CommentList from "./CommentList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../utils/api";

function ArticlePage() {
  {
    // api request article by id
    // new set state of article
    // passing down as props to Article
  }

  const { article_id: id } = useParams();

  const [article, setArticle] = useState();

  useEffect(() => {
    api.getArticleById(id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <>
      <Article articleId={article} />
      {/* <CommentList /> */}
    </>
  );
}

export default ArticlePage;
