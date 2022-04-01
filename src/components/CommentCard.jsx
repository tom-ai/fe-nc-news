import binIcon from "../assets/delete-2.png";

function CommentCard({ comment, loggedInUser, handleDelete, hasPosted }) {
  const { comment_id, body, author } = comment;

  const Bin = () => {
    if (loggedInUser === author) {
      return (
        <div
          onClick={() => {
            handleDelete(comment_id);
          }}
          className="mr3 grow pointer mt2"
        >
          <img src={binIcon} width="20" height="20" alt="delete comment" />
        </div>
      );
    } else return <></>;
  };

  return (
    <>
      <li>
        <div className={"flex flex-column"}>
          <h5 className="mb0 f5 f4-l">{author}</h5>
          <div className="flex flex-row items-center">
            <Bin />
            <p className="f5 f4-l">{body}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CommentCard;
