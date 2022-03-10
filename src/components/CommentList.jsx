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
        <h3>Comments</h3>
        <div className="mh3">
          <dl>{commentCount}</dl>
        </div>
      </div>

      <h3>Post a comment</h3>

      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </>
  );
}

export default CommentList;
