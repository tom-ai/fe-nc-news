import { useState, useEffect } from "react";
import * as api from "../utils/api";

function Vote({ articleId, votes }) {
  const [articleVoteCount, setArticleVoteCount] = useState(votes);

  useEffect(() => {}, []);

  const handleClick = () => {
    setArticleVoteCount((currVotes) => {
      return currVotes + 1;
    });
    api.updateArticleVoteCount(articleId);
  };

  console.log(articleVoteCount);
  return (
    <button onClick={handleClick} className="grow f4 f3-l pr4">
      👍 {articleVoteCount}
    </button>
  );
}

export default Vote;
