import { Link } from "react-router-dom";

export function ArticleCard({
  article_id,
  title,
  topic,
  author,
  body,
  comment_count,
  votes,
}) {
  return (
    <li key={article_id}>
      <article className="mb6 ">
        <dl>
          <h3 className="f3 f2-l">{title}</h3>
          <div className="flex items-center mb3 ">
            <img
              src="https://www.springboardstories.co.uk/images/gallery/products/Topics/myths/resources/GreenMan/SS7-A4-Poster.jpg"
              className="br-100 h3 w3 dib mr2 "
              alt="avatar"
            />
            <Link to="/" className="f4 f3-l link underline-hover dark-red mr3">
              @{author}
            </Link>

            <div className="f6 f5-l br-pill ph3 pv1 dib light-yellow bg-dark-red mr3">
              <dt>{topic}</dt>
            </div>
            <dt className="f5 f4-l">2h</dt>
          </div>
          <p className="f4 f3-l mb1">{body.substring(0, 200)}. . .</p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="f5 f4-l grow no-underline br-pill ba bw1 ph3 pv2 mb3 dark-red"
            >
              Read more...
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/" className="f4 f3-l link underline-hover dark-red">
              {comment_count} comments
            </Link>
            <dt className="grow f4 f3-l pr4">👍 {votes}</dt>
          </div>
        </dl>
      </article>
    </li>
  );
}

export default ArticleCard;
