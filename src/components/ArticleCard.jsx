export function ArticleCard({ article_id, title, topic, author, body }) {
  return (
    <li key={article_id}>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{body}</p>
      <p>{topic}</p>
    </li>
  );
}

export default ArticleCard;
