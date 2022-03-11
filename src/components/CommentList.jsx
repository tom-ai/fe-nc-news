import { useState, useEffect } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";

function CommentList({ commentCount, articleId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    api.getComments(articleId).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <div className="pa3 flex items-center">
        <h4>Comments</h4>
        <div className="mh3">
          <dl>{commentCount}</dl>
        </div>
      </div>
      <div className="pa3">
        <ul className="list pl0">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default CommentList;
