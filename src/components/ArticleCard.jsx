import { Link } from "react-router-dom";
import Vote from "./Vote";
import { useState } from "react";

export function ArticleCard({
  article_id,
  title,
  topic,
  author,
  body,
  comment_count,
  votes,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <li key={article_id}>
      <article className="mb6 ">
        <dl>
          <Link
            to={`/articles/${article_id}`}
            className="link underline-hover dark-red"
          >
            <h3 className="f3 f2-l">{title}</h3>
          </Link>
          <div className="flex items-center mb3 ">
            <img
              src="https://www.springboardstories.co.uk/images/gallery/products/Topics/myths/resources/GreenMan/SS7-A4-Poster.jpg"
              className="br-100 h3 w3 dib mr2 "
              alt="avatar"
            />
            <div className="f4 f3-l pointer_default dark-red mr3">
              <dt>@{author}</dt>
            </div>
            <div className="flex items-center">
              <Link
                className="f6 f5-l br-pill ph3 pv1 dib no-underline light-yellow bg-dark-red mr3"
                to={`/topics/${topic}`}
              >
                {topic}
              </Link>
              <dt className="f5 f4-l">2h</dt>
            </div>
          </div>
          <div className="f4 f3-l mb1">
            {!isOpen && <p>{body.substring(0, 200)}. . .</p>}
            {isOpen && <p>{body}</p>}
          </div>
          <div className="flex justify-center">
            {!isOpen && (
              <div
                onClick={toggleOpen}
                className="f5 f4-l grow no-underline pointer br-pill ba bw1 ph3 pv2 mb3 dark-red"
              >
                Read more
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Link
              to={`/articles/${article_id}`}
              className="f4 f3-l link underline-hover dark-red"
            >
              {comment_count} comments
            </Link>
            <Vote votes={votes} articleId={article_id} />
          </div>
        </dl>
      </article>
    </li>
  );
}

export default ArticleCard;
