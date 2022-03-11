import { useState, useEffect } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

function CommentList({ commentCount, articleId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    api.getComments(articleId).then((comments) => {
      setComments(comments);
    });
  }, [comments]);

  return (
    <>
      <div className="pa3">
        <div className="flex items-center">
          <h4>Comments</h4>
          <div className="mh3">
            <dl>{commentCount}</dl>
          </div>
        </div>

        <PostComment articleId={articleId} setComments={setComments} />
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
