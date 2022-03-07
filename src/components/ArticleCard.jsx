export function ArticleCard ({article_id, title, img_url, topic, author, body }) {

    return (
        <li key={article_id}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{topic}</p>
        </li>
    )
}

export default ArticleCard
