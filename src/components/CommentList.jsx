import { useState, useEffect } from "react";
import * as api from "../utils/api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

function CommentList({ commentCount, articleId, users }) {
  const [comments, setComments] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    api.getComments(articleId).then((comments) => {
      setComments(comments);
    });
  }, []);

  const handleDelete = () => {
    console.log("in delete!");
  };

  console.log(loggedInUser);

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
          loggedInUser={loggedInUser}
          setLoggedInUser={setLoggedInUser}
        />
        <ul className="list pl0">
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                handleDelete={handleDelete}
                loggedInUser={loggedInUser}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default CommentList;
