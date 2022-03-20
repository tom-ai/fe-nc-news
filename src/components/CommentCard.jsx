function CommentCard({ comment }) {
  const { comment_id, body, author, votes, created_at } = comment;

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
