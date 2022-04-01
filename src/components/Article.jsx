import { Link } from "react-router-dom";
import Vote from "./Vote";

function Article({
  articleId,
  body,
  commentCount,
  username,
  timestamp,
  title,
  topic,
  votes,
}) {
  return (
    <>
      <section className="pa3">
        <h3 className="f3 f2-l">{title}</h3>

        <div className="flex items-center mb3">
          <div className="f4 f3-l i pointer_default dark-red mr3">
            <dt>by {username}</dt>
          </div>
        </div>
        <p className="f4 f3-l mb4">{body}</p>
        <div className="flex justify-center">
          <Vote articleId={articleId} votes={votes} />
        </div>
      </section>
    </>
  );
}

export default Article;
