function CommentCard({ comment }) {
  const { comment_id, body, author, votes, created_at } = comment;

  return (
    <>
      <li>
        <div className="flex flex-column">
          <h4>{author}</h4>
          <p>{body}</p>
        </div>
      </li>
    </>
  );
}

export default CommentCard;
