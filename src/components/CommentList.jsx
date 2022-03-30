import { useState, useEffect } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

function CommentList({ commentCount, articleId, users }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    api.getComments(articleId).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <div className="pa3">
        <div className="flex items-center">
          <h4 className="f3 f2-l">Comments</h4>
          <div className="mh3 f3 f2-l">
            <dl>{commentCount}</dl>
          </div>
        </div>

        <PostComment
          articleId={articleId}
          setComments={setComments}
          users={users}
        />
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
