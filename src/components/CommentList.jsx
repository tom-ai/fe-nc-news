import PostComment from "./PostComment";
import CommentCard from "./CommentCard";

function CommentList() {
  return (
    <>
      <h3>Comments</h3>
      <PostComment />

      {
        //map over comments returning...
      }
      <CommentCard />
    </>
  );
}

export default CommentList;
