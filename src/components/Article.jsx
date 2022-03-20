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
          <div className="f6 f5-l br-pill ph3 pv1 dib light-yellow bg-dark-red mr3">
            <dt>{topic}</dt>
          </div>
          <dt className="f5 f4-l">2h</dt>
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
