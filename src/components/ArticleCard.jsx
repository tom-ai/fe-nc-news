export function ArticleCard({ article_id, title, topic, author, body }) {
  return (
    <li key={article_id}>
      <h3>{title}</h3>
      <p>@{author}</p>
      <p>{topic}</p>
      <p>{body}</p>
    </li>
  );
}

export default ArticleCard;
