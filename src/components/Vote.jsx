import { useState, useEffect } from "react";
import * as api from "../utils/api";

function Vote({ articleId, votes }) {
  const [articleVoteCount, setArticleVoteCount] = useState(votes);
  const [err, setErr] = useState(null);

  const handleClick = (e) => {
    const upOrDown = e.target.id;
    if (upOrDown === "up") {
      const incAmount = 1;
      setArticleVoteCount((currVotes) => currVotes + 1);
      api.updateArticleVoteCount(articleId, incAmount).catch((err) => {
        setArticleVoteCount((currVotes) => currVotes - 1);
        setErr("Something went wrong!");
      });
    } else {
      const incAmount = -1;
      setArticleVoteCount((currVotes) => currVotes - 1);
      api.updateArticleVoteCount(articleId, incAmount).catch((err) => {
        setArticleVoteCount((currVotes) => currVotes - 1);
        setErr("Something went wrong!");
      });
    }
  };

  if (err != null) return <p>{err}</p>;

  return (
    <>
      <div className="flex items-center">
        <dl className="ph1 b">{articleVoteCount}</dl>
        <a
          id="up"
          onClick={handleClick}
          className="grow dib f4 f3-l no-underline pa2 pointer"
        >
          👍
        </a>
        <a
          id="down"
          onClick={handleClick}
          className="grow dib f4 f3-l no-underline pa2 pointer"
        >
          👎
        </a>
      </div>
    </>
  );
}

export default Vote;
