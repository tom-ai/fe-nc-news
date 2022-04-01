import { useState } from "react";

function CommentCard({ comment, loggedInUser, handleDelete }) {
  const { comment_id, body, author, votes, created_at } = comment;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (loggedInUser === author) {
    // setIsLoggedIn(true);
  }
  return (
    <>
      <li>
        <div className="flex flex-column">
          <h5 className="mb1">{author}</h5>
          <p>{body}</p>
        </div>
      </li>
    </>
  );
}

export default CommentCard;
