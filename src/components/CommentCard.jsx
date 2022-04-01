import { useState } from "react";

function CommentCard({ comment, loggedInUser, handleDelete }) {
  const { comment_id, body, author, votes, created_at } = comment;

  const Bin = () => {
    if (loggedInUser === author) {
      return (
        <dl
          onClick={() => {
            handleDelete(comment_id);
          }}
          className="mr3 grow pointer"
        >
          🗑
        </dl>
      );
    } else return <></>;
  };

  return (
    <>
      <li>
        <div className={`flex flex-column`}>
          <h5>{author}</h5>
          <div className="flex flex-row items-center">
            <Bin />
            <p>{body}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CommentCard;
